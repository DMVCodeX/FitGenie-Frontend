export function UsersIndex(props) {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");
  const formattedDate = `${month}-${day}-${year}`;

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {props.users.map((user) => (
        <div className="card" key={user.id}>
          <p></p>
          <h2>{user.name}</h2>
          <img src={user.image_url} />
          <p>{user.email}</p>
          <a //interpolate javascript code into html ${code}
            href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${user.name}'s+Workout+&details=&dates=20230322T160000Z%2F20230324T050000Z`}
            target="_blank" //opens in new tab
          >
            {" "}
            Add a Workout to Google Calender{" "}
          </a>
          <p></p>
          <button type="submit" className="btn btn-outline-secondary">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
}
