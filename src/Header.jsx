import { LogoutLink } from "./LogoutLink";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <main className="">
            {" "}
            <img
              src="https://media.istockphoto.com/id/1221301662/photo/magic-lamp-with-barbell.jpg?b=1&s=170667a&w=0&k=20&c=3MqE8b50G7qWdUPU1uoVClY25chtU5RmlKiJKt8xXEo="
              alt="Logo"
              width="90"
              height="70"
              className="d-inline-block align-text-top"
            />
          </main>

          <ul class="nav justify-content-end">
            <li class="nav-item">
              <a class="navbar-brand" href="exercises">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3914/3914460.png"
                  alt="Logo"
                  width="30"
                  height="30"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li>
            <li class="nav-item">
              <a class="navbar-brand" href="/workouts">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/9888/9888290.png"
                  alt="Logo"
                  width="30"
                  height="30"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li>
            <li class="nav-item">
              <a class="navbar-brand" href="signup">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6238/6238952.png"
                  alt="Logo"
                  width="40"
                  height="40"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li>
            <li class="nav-item">
              <a class="navbar-brand" href="/login">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6238/6238893.png"
                  alt="Logo"
                  width="40"
                  height="40"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li>
            <li class="nav-item">
              <a class="navbar-brand" href="#">
                <LogoutLink />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
