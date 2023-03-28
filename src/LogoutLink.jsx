import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <a className="" href="#" onClick={handleClick}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/5543/5543009.png"
        alt="Logo"
        width="35"
        height="35"
        className="d-inline-block align-text-top"
      />
    </a>
  );
}
