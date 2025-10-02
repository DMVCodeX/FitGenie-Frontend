import { LogoutLink } from "./LogoutLink";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

export function Header(props) {
  return (
    <header>
      <nav className="flexcontainer my-3">
        <div className="itemcenter ">
          <a className="navbar-brand" href="/home">
            <h1 className="d-inline m-5 p-5">
              FitGenie <img src="https://img.icons8.com/?size=512&id=23938&format=png" alt="" height="45" width="45" />
            </h1>
          </a>
        </div>
      </nav>
      <br />
      <br />
      <nav className="nav justify-content-center">
        <div className="container">
          <ul className="nav justify-content-center">
            <li> </li>
            {/* <li className="nav-item m-3">
              <a className="navbar-brand" href="/map">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4053/4053871.png"
                  alt="Logo"
                  width="32"
                  height="32"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li> */}
            {/* <li className="nav-item m-3">
              <a className="navbar-brand" href="exercises">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2928/2928158.png"
                  alt="Logo"
                  width="35"
                  height="35"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li> */}
            {/* <li className="nav-item m-3">
              <a className="navbar-brand" href="/userworkouts">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/7118/7118261.png"
                  alt="Logo"
                  width="35"
                  height="35"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li> */}
            <li className="nav-item m-3">
              <a className="navbar-brand" href="/nutrition">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/12641/12641402.png"
                  alt="Logo"
                  width="35"
                  height="35"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li>
            <li className="nav-item m-3">
              <a className="navbar-brand" href="/macrocalculator">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/12578/12578968.png"
                  alt="Logo"
                  width="35"
                  height="35"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li>
            <li className="nav-item m-3">
              <a className="navbar-brand" href="/info">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/11208/11208657.png"
                  alt="Logo"
                  width="38"
                  height="38"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li>
            {/* <li className="nav-item m-3">
              <a className="navbar-brand" href="/users">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/694/694642.png"
                  alt="Logo"
                  width="40"
                  height="40"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
}
