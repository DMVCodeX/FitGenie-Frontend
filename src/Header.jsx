import { LogoutLink } from "./LogoutLink";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <a class="navbar-brand" href="/">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/813/813670.png"
                  alt="Logo"
                  width="27"
                  height="27"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li>

            <li class="nav-item">
              <a class="navbar-brand" href="exercises">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2871/2871284.png"
                  alt="Logo"
                  width="35"
                  height="35"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li>
            <li class="nav-item">
              <a class="navbar-brand" href="/userworkouts">
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
              <a class="navbar-brand" href="/users#">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/615/615075.png"
                  alt="Logo"
                  width="40"
                  height="40"
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
