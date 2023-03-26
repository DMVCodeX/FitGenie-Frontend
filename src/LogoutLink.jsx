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
        src="https://cdn-icons-png.flaticon.com/128/4803/4803246.png"
        alt="Logo"
        width="25"
        height="25"
        className="d-inline-block align-text-top"
      />
    </a>
  );
}
