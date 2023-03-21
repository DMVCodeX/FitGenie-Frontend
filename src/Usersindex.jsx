export function UsersIndex(props) {
  return (
    <div>
      {props.users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <img src={user.image_url} />
          <h3>{user.email}</h3>
        </div>
      ))}
    </div>
  );
}
