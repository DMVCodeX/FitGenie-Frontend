export function UsersIndex(props) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {props.users.map((user) => (
        <div className="card" key={user.id}>
          <p></p>
          <h2>{user.name}</h2>
          <img src={user.image_url} />
          <p></p>
          <p className="center-text">
            {" "}
            Schedule Workout Routine
            <a
              href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${user.name}'s+Workout+&details=&dates=20230322T160000Z%2F20230324T050000Z`}
              target="_blank"
            >
              <p></p>
              <img
                src="https://cdn-icons-png.flaticon.com/128/2693/2693507.png"
                alt="Logo"
                width="30"
                height="30"
                className="d-inline-block align-text-top"
              />
            </a>
          </p>

          <button class="btn btn-light">
            <a class="navbar-brand" href="/">
              <img
                src="https://cdn-icons-png.flaticon.com/128/6238/6238787.png"
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
