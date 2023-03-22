import { UsersIndex } from "./UsersIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { SignUp } from "./SignUp";
import { LogIn } from "./LogIn";
import { LogoutLink } from "./LogoutLink";

export function Content() {
  const [users, setUsers] = useState([]);

  const handleIndexUsers = () => {
    console.log("handeIndexUsers");
    axios.get("http://localhost:3000/users.json").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  };

  useEffect(handleIndexUsers, []);

  return (
    <div className="container">
      <SignUp />
      <LogIn />
      <p></p>
      <LogoutLink />
      <UsersIndex users={users} />
    </div>
  );
}
