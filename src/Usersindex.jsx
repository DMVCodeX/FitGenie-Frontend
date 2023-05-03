export function UsersIndex(props) {
  return (
    <div>
      <h1 className="m-3">Users</h1>
      <div className="col-sm-6 mb-3 mb-sm-0 container-fluid">
        {props.users.map((user) => (
          <div key={user.id} className="card">
            <h2 className="center-text">{user.name}</h2>
            <img src={user.image_url} />

            <button className="btn btn-light">
              <a className="navbar-brand" href="/">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/6238/6238709.png"
                  alt="Logo"
                  width="80"
                  height="80"
                  className="d-inline-block align-text-top"
                />
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
