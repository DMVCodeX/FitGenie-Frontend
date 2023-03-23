import { UsersIndex } from "./UsersIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { SignUp } from "./SignUp";
import { LogIn } from "./LogIn";
import { LogoutLink } from "./LogoutLink";
import { ExercisesIndex } from "./ExercisesIndex";

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
    <div className="container">
      <SignUp />
      <LogIn />
      <p></p>
      <ExercisesIndex exercises={exercises} />
      <UsersIndex users={users} />
    </div>
  );
}
