import ReactPlayer from "react-player";

export function UserWorkoutsIndex(props) {
  return (
    <div>
      <p></p>
      <h1>{props.user.name}'s Workouts</h1>
      <p></p>

      <div class="accordion" id="accordionExample">
        {props.user.workouts.map((workout) => (
          <div class="accordion-item">
            <h1 class="accordion-header">
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
            <div id={"collapseTwo" + workout.id} class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                {workout.workout_exercises.map((workoutExercise) => (
                  <div>
                    <p></p>
                    <h2 className="center-text">{workoutExercise.exercise.name}</h2>
                    <img className="centered-image" src={workoutExercise.exercise.image_url} alt="" />
                    <p className="text-line-break">{workoutExercise.exercise.description}</p>
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
