import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <a className="" href="#" onClick={handleClick}>
      <img
        src="https://cdn-icons-png.flaticon.com/128/2170/2170091.png"
        alt="Logo"
        width="30"
        height="30"
        className="d-inline-block align-text-top"
      />
    </a>
  );
}
