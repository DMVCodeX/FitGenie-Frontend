import axios from "axios";
import { useState } from "react";

export function SignUp() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/users.json", params)
      .then((response) => {
        event.target.reset();
        window.location.href = "/login";
      })
      .catch((error) => {
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div>
      {/* add test account for easy access */}
      <h1 className="center-text m-3">Welcome to FitGenie</h1>
      <p className="center-text">
        Sign up and explore the app or use the test account to log in{" "}
        <img src="https://img.icons8.com/?size=512&id=2922&format=png" alt="login" height="20" width="20" />
        <a href="/login">
          <img
            src="https://cdn-icons-png.flaticon.com/128/6239/6239002.png"
            alt="Logo"
            width="45"
            height="45"
            className="d-inline-block m-3 "
          />
        </a>
      </p>
      <div className="card m-2" id="signup">
        <h1 className="card-body">Signup</h1>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <form className="card-body" onSubmit={handleSubmit}>
          <div>
            Name: <input className="form-control" name="name" type="text" />
            <p></p>
          </div>
          <div>
            Email: <input className="form-control" name="email" type="email" />
            <p></p>
          </div>
          <div>
            Password: <input className="form-control" name="password" type="password" />
            <p></p>
          </div>
          <div>
            Password Confirmation: <input className="form-control" name="password_confirmation" type="password" />
            <p></p>
          </div>
          <button type="submit" className="btn btn-outline-secondary">
            Signup
          </button>
        </form>
        <p></p>
        <form className="card-body">
          <p>
            Have an account?{" "}
            <a href="/login">
              <img
                src="https://cdn-icons-png.flaticon.com/128/6239/6239002.png"
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
