import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function LogIn() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/sessions.json", params)
      .then((response) => {
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/home";
      })
      .catch((error) => {
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div className="m-5">
      <p className="center-text">(Use your account to log in or use our test account)</p>
      <div className="card" id="login">
        {/* Log in with test account */}
        <h1 className="card-body ">Log In</h1>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="m-2">
            {/* Prefill test account info */}
            Email: <input className="form-control" name="email" type="email" />
            <div id="emailHelp" class="form-text">
              Test Account Email is: Diane@test.com
            </div>
          </div>
          <div className="m-2">
            Password: <input className="form-control" name="password" type="password" />
            <div id="emailHelp" class="form-text">
              Test Account Password is: password
            </div>
          </div>
          <div className="form-check m-3">
            <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
            <label className="form-check-label" htmlFor="dropdownCheck2">
              Remember Me
            </label>
          </div>
          <p></p>
          <button type="submit" className="m-3 btn btn-outline-secondary">
            Log In
          </button>
        </form>

        <p></p>
        <form className="card-body">
          <p className="">
            Don't have an account yet?{" "}
            <a href="/signup">
              <img
                src="https://cdn-icons-png.flaticon.com/128/6239/6239065.png"
                alt="Logo"
                width="45"
                height="45"
                className="d-inline-block align-text-top"
              />
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
