export function ExercisesIndex(props) {
  return (
    <div>
      <h1 className="papyrus-heading">Exercises</h1>
      {props.exercises.map((exercise) => (
        <div key={exercise.id}>
          <h2>{exercise.name}</h2>
          <img src={exercise.image_url} />
          <p className="text-break">{exercise.description}</p>
          <p>Suggested reps: {exercise.reps}</p>
        </div>
      ))}
    </div>
  );
}
