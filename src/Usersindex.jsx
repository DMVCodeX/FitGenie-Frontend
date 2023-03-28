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
          <p></p>
          <p></p>
          <button type="submit" className="btn btn-outline-secondary">
            Follow
          </button>
          <p></p>
          <p className="card-footer"></p>
        </div>
      ))}
    </div>
  );
}
