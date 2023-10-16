export function Info() {
  return (
    <>
      <div className="container-fluid">
        <div className="center-text m-5">
          <p>
            Click the link in image below to navigate to the FitGenie sign up page{" "}
            <img height="40" width="40" src="https://cdn-icons-png.flaticon.com/128/7663/7663989.png" alt="" />
          </p>
          <div>
            <a className="a" href={"https://fitgenie.netlify.app/"} target="_blank" rel="noreferrer">
              <h1 className="center-text pink-font m-1">
                {" "}
                FitGenie App{" "}
                <img
                  className=""
                  src="https://img.icons8.com/?size=512&id=23938&format=png"
                  alt=""
                  width="70"
                  height="70"
                />
              </h1>
            </a>
            <br />
            <h5>
              <ol>
                FitGenie is a cutting-edge fitness application meticulously crafted using the Ruby on Rails framework,
                which seamlessly adheres to the Model-View-Controller (MVC) architecture and embraces the principles of
                RESTful API conventions. This dynamic web app redefines the fitness journey with a plethora of robust
                features designed to empower users on their path to a healthier lifestyle. Key Functionalities:
                <br />
                <br />
                <li>
                  Workout Customization: FitGenie is your fitness architect. It offers a diverse library of workouts,
                  allowing users to curate personalized workout plans tailored to their fitness goals.
                </li>
                <br />
                <li>
                  Comprehensive Workout Resources: For every workout, users have access to a treasure trove of
                  resources, including high-resolution images, detailed step-by-step descriptions, and instructive
                  videos, ensuring they perform exercises with precision and confidence.
                </li>
                <br />
                <li>
                  Google Calendar Integration: Staying committed to your fitness regimen is a breeze with FitGenie. The
                  app seamlessly integrates with Google Calendar, enabling users to effortlessly schedule their workouts
                  without leaving the platform.
                </li>
                <br />
                <li>
                  Macro Calculator: FitGenie goes beyond workouts. It features a built-in macro calculator that takes
                  into account user details such as weight, height, age, and activity level to recommend personalized
                  macronutrient intake (protein, carbs, and fats). This feature helps users optimize their nutrition for
                  their fitness goals.
                </li>
                <br />
                <li>
                  Nutrition Guides: In addition to the macro calculator, FitGenie provides comprehensive nutrition
                  guides to assist users in reaching their fitness goals. These guides offer valuable insights into
                  making healthier dietary choices.
                  <br />
                  <br />
                  FitGenie is not just an app; it is your virtual fitness companion, simplifying gym planning, elevating
                  workout experiences, and empowering you to reach your fitness milestones. Your journey to a healthier,
                  more active lifestyle begins here.
                </li>
              </ol>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
