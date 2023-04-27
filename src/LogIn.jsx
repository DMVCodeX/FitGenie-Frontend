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
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div className="card" id="login">
      <h1 className="card-body ">Log In</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="">
          Email: <input className="form-control" name="email" type="email" />
          <p></p>
        </div>
        <div className="">
          Password: <input className="form-control" name="password" type="password" />
          <p></p>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="dropdownCheck2" />
          <label class="form-check-label" for="dropdownCheck2">
            Remember Me
          </label>
        </div>
        <p></p>
        <button type="submit" className="btn btn-outline-secondary">
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
  );
}
