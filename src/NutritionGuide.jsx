import { useEffect } from "react";

export function NutritionGuide() {
  useEffect(() => {
    const accordionItems = document.querySelectorAll(".accordion-collapse");
    accordionItems.forEach((item) => {
      item.addEventListener("show.bs.collapse", () => {
        item.style.transition = "all 0.4s ease-in-out";
      });
    });
  }, []);

  return (
    <div className="container my-5">
      <style>{`
        .guide-title {
          color: #4b4b4b;
          font-size: 2.5rem;
          font-weight: bold;
        }
        .guide-image {
          max-height: 400px;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
        .guide-accordion .accordion-button {
          transition: all 0.3s ease;
          font-size: 1.25rem;
          background: linear-gradient(90deg,rgb(200, 96, 188),rgb(241, 235, 240));
          color: white;
        }
        .guide-accordion .accordion-button:hover {
          background: linear-gradient(90deg,rgb(82, 148, 217),rgb(209, 220, 229)) !important;
        }
        .guide-card {
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 15px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.1);
        }
        .guide-body {
          animation: fadeInSlide 0.5s ease forwards;
          background: white;
          padding: 20px;
          border-radius: 10px;
        }
        .guide-subimage {
          max-height: 300px;
          object-fit: cover;
          border-radius: 8px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.1);
        }
        .guide-btn {
          background: linear-gradient(90deg, #4caf50, #2196f3);
          color: white;
          padding: 12px 24px;
          border-radius: 50px;
          font-weight: bold;
          transition: all 0.3s ease;
          font-size: 1.1rem;
        }
        .guide-btn:hover {
          transform: scale(1.05);
        }
        @keyframes fadeInSlide {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <h1 className="text-center mb-4 guide-title">Nutrition Guides</h1>

      <div className="mb-5 text-center">
        <img
          className="img-fluid rounded shadow-lg guide-image"
          src="https://media.istockphoto.com/id/1134849981/photo/cropped-image-of-female-doctor-explaining-to-patient-in-hospital.jpg?s=612x612&w=0&k=20&c=C8cmuCx145o7AUUeZuRObJ-Rq-_HGKjssnzriJA7dXk="
          alt="Healthy food spread"
        />
      </div>

      <div className="accordion guide-accordion" id="accordionExample">
        {/* Weight Loss */}
        <div className="accordion-item guide-card">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed guide-header"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Weight Loss Guide
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body guide-body">
              <h5 className="text-center fw-semibold mb-3">Nutrition for Weight Loss</h5>
              <img
                className="img-fluid rounded mx-auto d-block mb-3 shadow guide-subimage"
                src="https://media.istockphoto.com/id/1363586390/photo/yellow-tape-measure-on-glass-bathroom-scale.jpg?b=1&s=170667a&w=0&k=20&c=9UlnI82gY8_CoZJXn2VCEyipfpb-a9i9M2QSDBoosC4="
                alt="Weight loss"
              />
              <p>
                Nutrition plays a crucial role in weight loss. Eating a balanced diet with proper macronutrients and
                micronutrients helps create a calorie deficit for sustainable results. Here are tips:
              </p>
              <ol>
                <li>Calculate calorie needs based on your body and activity level.</li>
                <li>Create a safe calorie deficit (500–1000 kcal/day).</li>
                <li>Focus on whole foods rich in nutrients.</li>
                <li>Increase protein intake (0.8–1g per pound of body weight daily).</li>
                <li>Limit refined carbs, favor complex carbs.</li>
                <li>Choose healthy fats (avocado, nuts, olive oil).</li>
                <li>Avoid sugary drinks; hydrate well.</li>
                <li>Practice mindful eating and keep a food diary.</li>
                <li>Consult a registered dietitian when needed.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Toning */}
        <div className="accordion-item guide-card">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed guide-header"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Toning Guide
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body guide-body">
              <h5 className="text-center fw-semibold mb-3">Nutrition for Toning</h5>
              <img
                className="img-fluid rounded mx-auto d-block mb-3 shadow guide-subimage"
                src="https://media.istockphoto.com/id/1337244064/photo/shot-of-two-young-gym-buddies-doing-core-strengthening-on-the-floor-at-the-gym.jpg?s=612x612&w=0&k=20&c=cWsLQ9dahWxmiBHzvaCf4TrIsimx81J46lR5w350bys="
                alt="Toning"
              />
              <p>
                Toning requires muscle growth and fat loss. Proper nutrition supports energy, recovery, and lean muscle
                development.
              </p>
              <ol>
                <li>Calculate calorie needs.</li>
                <li>Increase protein intake (1–1.5g per pound of body weight).</li>
                <li>Include complex carbs.</li>
                <li>Choose healthy fats for hormone balance.</li>
                <li>Eat consistently and time meals.</li>
                <li>Hydrate adequately.</li>
                <li>Use supplements wisely.</li>
                <li>Avoid processed foods and use portion control.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Weight Gain */}
        <div className="accordion-item guide-card">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed guide-header"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Weight Gain Guide
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body guide-body">
              <h5 className="text-center fw-semibold mb-3">Nutrition for Healthy Weight Gain</h5>
              <img
                className="img-fluid rounded mx-auto d-block mb-3 shadow guide-subimage"
                src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2VpZ2h0JTIwbGlmdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="Weight gain"
              />
              <p>
                Gaining weight requires consuming more calories than burned while focusing on nutrient-dense foods to
                promote muscle growth and overall health.
              </p>
              <ol>
                <li>Calculate calorie needs.</li>
                <li>Increase calorie intake by 500–1000 kcal/day.</li>
                <li>Focus on nutrient-dense foods.</li>
                <li>Increase protein intake (1–1.5g per pound of body weight).</li>
                <li>Include healthy fats and complex carbs.</li>
                <li>Eat frequently and snack smartly.</li>
                <li>Hydrate well with calorie-dense beverages.</li>
                <li>Incorporate resistance training.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <a
          href="/macrocalculator"
          className="btn btn-gradient btn-lg mt-3 shadow"
          style={{
            background: "linear-gradient(90deg,rgb(79, 163, 231),rgb(255, 255, 255))",
            color: "#fff",
            border: "none",
          }}
        >
          Check Out Our Macro Calculator
          <img
            src="https://cdn-icons-png.flaticon.com/128/12578/12578968.png"
            alt="Macro Calculator"
            width="30"
            height="30"
            className="ms-2"
          />
        </a>
      </div>
    </div>
  );
}
