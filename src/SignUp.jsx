import axios from "axios";
import { useState } from "react";

export function SignUp() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div className="card" id="signup">
      <h1 className="card-body">Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form className="card-body" onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
          <p></p>
        </div>
        <div>
          Email: <input name="email" type="email" />
          <p></p>
        </div>
        <div>
          Password: <input name="password" type="password" />
          <p></p>
        </div>
        <div>
          Password Confirmation: <input name="password_confirmation" type="password" />
          <p></p>
        </div>
        <button type="submit" className="btn btn-outline-secondary">
          Signup
        </button>
      </form>
    </div>
  );
}
