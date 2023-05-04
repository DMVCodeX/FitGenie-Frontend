import { LogoutLink } from "./LogoutLink";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

export function Header(props) {
  return (
    <header>
      <nav>
        <div class="container-fluid center-text ">
          <a class="navbar-brand" href="/home">
            <h1>
              FitGenie <img src="https://img.icons8.com/?size=512&id=23938&format=png" alt="" height="45" width="45" />
            </h1>
          </a>
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
          </ul>
          <div className="">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title center-text" id="offcanvasNavbarLabel">
                  Dashboard
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item m-3">
                    <a class="nav-link active" aria-current="page" href="/home">
                      Home
                    </a>
                  </li>

                  <li class="nav-item m-3 dropdown">
                    <a
                      class="nav-link dropdown-toggle"
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
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
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
                        <a class="dropdown-item" href="/aboutus">
                          About Us
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li className="dropdown-item ml-6 ">
                        Logout <LogoutLink />
                      </li>
                    </ul>
                  </li>
                </ul>
                <form class="d-flex mt-3" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-secondary" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
