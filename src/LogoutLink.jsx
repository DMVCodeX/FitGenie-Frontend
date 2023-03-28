import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <a href="#" onClick={handleClick}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/182/182448.png"
        alt="Logo"
        width="30"
        height="30"
        className="d-inline-block align-text-top"
      />
    </a>
  );
}
