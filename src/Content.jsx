import { UsersIndex } from "./UsersIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { SignUp } from "./SignUp";
import { LogIn } from "./LogIn";
import { ExercisesIndex } from "./ExercisesIndex";
import { Routes, Route } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
import { UserWorkoutsIndex } from "./UserWorkoutsIndex";

export function Content() {
  const [users, setUsers] = useState([]);

  //UserIndex function
  const handleIndexUsers = () => {
    console.log("handeIndexUsers");
    axios.get("http://localhost:3000/users.json").then((response) => {
      console.log(response.data);
      setUsers(response.data);
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

  return (
    <div className="container-md">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/users" element={<UsersIndex users={users} />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/userworkouts" element={<UserWorkoutsIndex />} />
        <Route path="/exercises" element={<ExercisesIndex exercises={exercises} />} />
      </Routes>
    </div>
  );
}
