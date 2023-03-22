export function ExercisesIndex(props) {
  return (
    <div>
      <h1>Exercises</h1>
      {props.exercises.map((exercise) => (
        <div key={exercise.id}>
          <h2>{exercise.name}</h2>
          <img src={exercise.image_url} />
          <p>{exercise.description}</p>
        </div>
      ))}
    </div>
  );
}
