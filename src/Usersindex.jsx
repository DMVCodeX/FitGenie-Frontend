export function UsersIndex(props) {
  return (
    <div className="col-sm-6 mb-3 mb-sm-0 container-fluid">
      {props.users.map((user) => (
        <div className="card" key={user.id}>
          <p></p>
          <h2 className="center-text">{user.name}</h2>
          <img src={user.image_url} />
          <p></p>

          <button class="btn btn-light">
            <a class="navbar-brand" href="/">
              <img
                src="https://cdn-icons-png.flaticon.com/128/6238/6238709.png"
                alt="Logo"
                width="90"
                height="90"
                className="d-inline-block align-text-top"
              />
            </a>
          </button>
        </div>
      ))}
    </div>
  );
}
