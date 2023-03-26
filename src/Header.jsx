import { LogoutLink } from "./LogoutLink";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <main className="papyrus-heading">
            FitGenie{" "}
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
              <a class="nav-link active" aria-current="page" href="#">
                Active
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="navbar-brand" href="#">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVlgUDBzuIBTTIZei4cDucRGcLKs_wxvx21GOle08bP_V_kZG6m72KQdkAtHG-BilZfY0&usqp=CAU//media.istockphoto.com/id/1221301662/photo/magic-lamp-with-barbell.jpg?b=1&s=170667a&w=0&k=20&c=3MqE8b50G7qWdUPU1uoVClY25chtU5RmlKiJKt8xXEo="
                  alt="Logo"
                  width="30"
                  height="30"
                  className="d-inline-block align-text-top"
                />
                <LogoutLink />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
