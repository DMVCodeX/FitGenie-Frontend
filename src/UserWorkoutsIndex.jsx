export function UserWorkoutsIndex(props) {
  return (
    <div>
      <h1>User Workouts Go Here</h1>
      <p>{props.user.name}</p>
      <div class="accordion" id="accordionExample">
        {props.user.workouts.map((workout) => (
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#collapseTwo" + workout.id}
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                {workout.name}
              </button>
            </h2>
            <div id={"collapseTwo" + workout.id} class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                {workout.workout_exercises.map((workoutExercise) => (
                  <div>
                    <p>{workoutExercise.exercise.name}</p>
                    <img src={workoutExercise.exercise.image_url} alt="" />
                    <p className="text-line-break">{workoutExercise.exercise.description}</p>
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
