import { LogoutLink } from "./LogoutLink";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

export function Header(props) {
  return (
    <header>
      <nav className="flexcontainer my-3">
        <div className="itemcenter ">
          <a className="navbar-brand" href="/home">
            <h1 className="d-inline m-5">
              FitGenie <img src="https://img.icons8.com/?size=512&id=23938&format=png" alt="" height="45" width="45" />
            </h1>
          </a>
        </div>
        <div className="itemright">
          <button
            // style={{ backgroundColor: "grey" }}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="">
              <img src="https://img.icons8.com/?size=1x&id=vHLspPwGtpIq&format=png" alt="" width="50" height="50" />
            </span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title center-text" id="offcanvasNavbarLabel">
                Dashboard
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item m-3">
                  <a className="nav-link active" aria-current="page" href="/home">
                    Home
                  </a>
                </li>

                <li className="nav-item m-3 dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Current User
                    {/* <img
                        src="https://img.icons8.com/?size=512&id=15263&format=png"
                        alt="Logo"
                        width="25"
                        height="25"
                        className="d-inline-block align-text-top m-1"
                      /> */}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Account Settings
                        <img
                          src="https://img.icons8.com/?size=512&id=364&format=png"
                          alt="Logo"
                          width="25"
                          height="25"
                          className="d-inline-block align-text-top m-1"
                        />
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/aboutus">
                        About Us
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li className="dropdown-item ml-6 ">
                      Logout <LogoutLink />
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-secondary" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>

      <nav className="nav justify-content-center">
        <div className="container">
          <ul className="nav justify-content-center">
            <li> </li>
            <li className="nav-item m-3">
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
            <li className="nav-item m-3">
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
                  src="https://cdn-icons-png.flaticon.com/128/4725/4725744.png"
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
                  src="https://cdn-icons-png.flaticon.com/128/3867/3867884.png"
                  alt="Logo"
                  width="35"
                  height="35"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li>
            <li className="nav-item m-3">
              <a className="navbar-brand" href="/shop">
                <img
                  src="https://img.icons8.com/?size=1x&id=3686&format=png"
                  alt="Logo"
                  width="33"
                  height="33"
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
            {/* turnary function */}
            {localStorage.jwt === undefined ? (
              //opening tag 1 (wraps the li elements to act as a parent element)
              <>
                <li className="nav-item m-3">
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
                <li className="nav-item m-3 ml-6">
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
              </> //closing tag 1 (wraps the li elements to act as a parent element)
            ) : (
              <></> //opening and closing tag this is an empty element
            )}{" "}
            {/* turnary function */}
          </ul>
        </div>
      </nav>
    </header>
  );
}
