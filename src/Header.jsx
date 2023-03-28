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
              <a class="navbar-brand" href="/home">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/10043/10043293.png"
                  alt="Logo"
                  width="35"
                  height="35"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li>

            <li class="nav-item">
              <a class="navbar-brand" href="/map">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4053/4053888.png"
                  alt="Logo"
                  width="32"
                  height="32"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li>

            <li class="nav-item">
              <a class="navbar-brand" href="exercises">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/7489/7489817.png"
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
                  src="https://cdn-icons-png.flaticon.com/128/10163/10163844.png"
                  alt="Logo"
                  width="32"
                  height="32"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li>
            <li class="nav-item">
              <a class="navbar-brand" href="/users">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/9322/9322366.png"
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
                  src="https://cdn-icons-png.flaticon.com/128/6239/6239065.png"
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
                  src="https://cdn-icons-png.flaticon.com/128/6239/6239002.png"
                  alt="Logo"
                  width="40"
                  height="40"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li>
            <li class="nav-item">
              <a class="navbar-brand" href="/login">
                <LogoutLink />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
