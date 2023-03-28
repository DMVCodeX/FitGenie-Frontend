import { UsersIndex } from "./UsersIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { SignUp } from "./SignUp";
import { LogIn } from "./LogIn";
import { ExercisesIndex } from "./ExercisesIndex";
import { Routes, Route } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
import { UserWorkoutsIndex } from "./UserWorkoutsIndex";
import { Maps } from "./Maps";
import { Home } from "./Home";
import { NutritionGuide } from "./NutritionGuide";
import { MacroCalculator } from "./MacroCalculator";

export function Content() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({ workouts: [] });
  //UserIndex function
  const handleIndexUsers = () => {
    console.log("handeIndexUsers");
    axios.get("http://localhost:3000/users.json").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  };
  const handleShowCurrentUser = () => {
    console.log("handeShowCurrentUser");
    axios.get("http://localhost:3000/users/current.json").then((response) => {
      console.log(response.data);
      setCurrentUser(response.data);
    });
  };

  useEffect(handleIndexUsers, []);

  const [exercises, setExercises] = useState([]);

  const handleIndexExercises = () => {
    console.log("handleExercisesIndex");
    axios.get("http://localhost:3000/exercises.json").then((response) => {
      console.log(response.data);
      setExercises(response.data);
    });
  };

  useEffect(handleIndexExercises, []);
  useEffect(handleShowCurrentUser, []);

  return (
    <div className="container-md">
      <head>
        <style>@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@100&display=swap');</style>
      </head>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/macrocalculator" element={<MacroCalculator />} />
        <Route path="/map" element={<Maps />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/nutrition" element={<NutritionGuide />} />
        <Route path="/users" element={<UsersIndex users={users} />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/userworkouts" element={<UserWorkoutsIndex user={currentUser} />} />
        <Route path="/exercises" element={<ExercisesIndex exercises={exercises} />} />
      </Routes>
    </div>
  );
}
