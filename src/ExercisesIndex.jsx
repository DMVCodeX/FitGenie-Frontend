import ReactPlayer from "react-player";

export function ExercisesIndex(props) {
  return (
    <div>
      <h1 className="papyrus-heading">Exercises</h1>
      {props.exercises.map((exercise) => (
        <div key={exercise.id}>
          <h2 className="papyrus-heading">{exercise.name}</h2>
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
