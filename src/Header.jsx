import { LogoutLink } from "./LogoutLink";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <ul className="nav justify-content-end">
            <h2 className="">FitGenie </h2>
            <img
              src="https://cdn-icons-png.flaticon.com/128/5169/5169662.png"
              alt="Logo"
              width="35"
              height="35"
              className="d-inline-block align-text-top"
            />

            <li className="nav-item">
              <a className="navbar-brand" href="/home">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/10181/10181480.png"
                  alt="Logo"
                  width="35"
                  height="35"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li>

            <li className="nav-item">
              <a className="navbar-brand" href="/map">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4053/4053871.png"
                  alt="Logo"
                  width="32"
                  height="32"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li>

            <li className="nav-item">
              <a className="navbar-brand" href="exercises">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2928/2928158.png"
                  alt="Logo"
                  width="35"
                  height="35"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand" href="/userworkouts">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/7118/7118261.png"
                  alt="Logo"
                  width="35"
                  height="35"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand" href="/nutrition">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4725/4725744.png"
                  alt="Logo"
                  width="35"
                  height="35"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand" href="/macrocalculator">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3867/3867884.png"
                  alt="Logo"
                  width="35"
                  height="35"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand" href="/users">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/694/694642.png"
                  alt="Logo"
                  width="40"
                  height="40"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand" href="signup">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6238/6238952.png"
                  alt="Logo"
                  width="42"
                  height="42"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand" href="/login">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6238/6238893.png"
                  alt="Logo"
                  width="42"
                  height="42"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li>
            <li className="nav-item">
              <LogoutLink />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
