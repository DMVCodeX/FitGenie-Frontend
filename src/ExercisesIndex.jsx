import ReactPlayer from "react-player";

export function ExercisesIndex(props) {
  return (
    <div>
      <h1>Explore Exercises</h1>
      <p></p>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {props.exercises.map((exercise) => (
          <div className="card" key={exercise.id}>
            <p></p>
            <h2 className="card-title center-text">{exercise.name}</h2>
            <img className="card-img-top" src={exercise.image_url} />
            <p></p>
            <p className="text-line-break">{exercise.description}</p>
            <p>Suggested reps: {exercise.reps}</p>
            <ReactPlayer className="centered-image" url={exercise.video_url} />
            <p></p>
            <button type="submit" className="btn btn-outline-secondary">
              Add to Workout
            </button>
            <p></p>
          </div>
        ))}
      </div>
    </div>
  );
}
