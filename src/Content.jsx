import axios from "axios";
import { useState, useEffect } from "react";
import { SignUp } from "./SignUp";
import { LogIn } from "./LogIn";
import { ExercisesIndex } from "./ExercisesIndex";
import { Routes, Route } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
import { UserWorkoutsIndex } from "./UserWorkoutsIndex";
import { UsersIndex } from "./Usersindex";
import { Maps } from "./Maps";
import { Home } from "./Home";
import { NutritionGuide } from "./NutritionGuide";
import { MacroCalculator } from "./MacroCalculator";
import { Shop } from "./Shop";
import { AboutUs } from "./AboutUs";

export function Content() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({ workouts: [] });
  //UserIndex function
  const handleIndexUsers = () => {
    axios.get("https://fitgenie-api.onrender.com/users.json").then((response) => {
      setUsers(response.data);
    });
  };
  const handleShowCurrentUser = () => {
    axios.get("https://fitgenie-api.onrender.com/users/current.json").then((response) => {
      setCurrentUser(response.data);
    });
  };

  useEffect(handleIndexUsers, []);

  const [exercises, setExercises] = useState([]);

  const handleIndexExercises = () => {
    axios.get("https://fitgenie-api.onrender.com/exercises.json").then((response) => {
      setExercises(response.data);
    });
  };

  useEffect(handleIndexExercises, []);
  useEffect(handleShowCurrentUser, []);

  return (
    <div className="container-md">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/macrocalculator" element={<MacroCalculator />} />
        <Route path="/map" element={<Maps />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/nutrition" element={<NutritionGuide />} />
        <Route path="/users" element={<UsersIndex users={users} />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/userworkouts" element={<UserWorkoutsIndex user={currentUser} />} />
        <Route path="/exercises" element={<ExercisesIndex exercises={exercises} />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
}
