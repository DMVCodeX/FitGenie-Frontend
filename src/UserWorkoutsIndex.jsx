import ReactPlayer from "react-player";

export function UserWorkoutsIndex(props) {
  return (
    <div className="head">
      <p></p>

      <h1>Your Workouts</h1>
      <h2>{props.user.name}</h2>
      <p>
        {" "}
        Schedule Workout Routine
        <a
          href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${props.user.name}'s+Workout+&details=&dates=20230322T160000Z%2F20230324T050000Z`}
          target="_blank"
        >
          <p></p>
          <img
            src="https://cdn-icons-png.flaticon.com/128/2693/2693507.png"
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-text-top"
          />
        </a>
      </p>
      <p></p>

      <div className="accordion" id="accordionExample">
        {props.user.workouts.map((workout) => (
          <div className="accordion-item">
            <h1 className="accordion-header">
              <button
                className="btn btn-outline-secondary container-fluid"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#collapseTwo" + workout.id}
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <p></p>
                {workout.name}
                <p></p>
              </button>
            </h1>
            <div
              id={"collapseTwo" + workout.id}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {workout.workout_exercises.map((workoutExercise) => (
                  <div>
                    <p></p>
                    <h2 classNameName="center-text">{workoutExercise.exercise.name}</h2>
                    <img className="centered-image" src={workoutExercise.exercise.image_url} alt="" />
                    <p className="text-line-break">{workoutExercise.exercise.description}</p>
                    <p>Suggested reps: {workoutExercise.exercise.reps}</p>

                    <ReactPlayer className="centered-image" url={workoutExercise.exercise.video_url} />
                    <p></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
