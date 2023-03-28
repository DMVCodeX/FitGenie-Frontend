import ReactPlayer from "react-player";

export function ExercisesIndex(props) {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {props.exercises.map((exercise) => (
        <div className="card" key={exercise.id}>
          <h2 className="card-title">{exercise.name}</h2>
          <img className="card-img-top" src={exercise.image_url} />
          <p></p>
          <p className="text-break">{exercise.description}</p>
          <p>Suggested reps: {exercise.reps}</p>
          <ReactPlayer className="centered-image" url={exercise.video_url} />
          <p></p>
          <button type="submit" className="btn btn-outline-secondary">
            Save
          </button>
          <p></p>
        </div>
      ))}
    </div>
  );
}
