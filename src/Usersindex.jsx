export function UsersIndex(props) {
  return (
    <div>
      {props.users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <img src={user.url} />
          <p>Width: {user.width}</p>
          <p>Height: {user.height}</p>
        </div>
      ))}
    </div>
  );
}
