import ReactPlayer from "react-player";

export function ExercisesIndex(props) {
  return (
    <div>
      <h1 className="verdana-heading">Exercises</h1>
      {props.exercises.map((exercise) => (
        <div key={exercise.id}>
          <h2 className="verdana-heading">{exercise.name}</h2>
          <img src={exercise.image_url} />
          <p></p>
          <p className="text-break">{exercise.description}</p>
          <p>Suggested reps: {exercise.reps}</p>
          <ReactPlayer url={exercise.video_url} />
          <p></p>
          <p></p>
          <p></p>
        </div>
      ))}
    </div>
  );
}
