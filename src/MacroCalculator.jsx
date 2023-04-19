import { useState } from "react";

export function MacroCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fats, setFats] = useState("");

  function calculateMacros(event) {
    // calculate macros based on Harris-Benedict formula
    event.preventDefault();
    const bmr = 10 * weight + 6.25 * height - 5 * age;
    const tdee = bmr * activityLevel;
    const protein = 0.8 * weight;
    const fats = (0.3 * tdee) / 9;
    const carbs = (tdee - protein * 4 - fats * 9) / 4;

    setProtein(protein.toFixed(1));
    setCarbs(carbs.toFixed(1));
    setFats(fats.toFixed(1));
  }

  return (
    <div>
      <h1>Calculate Your Macros</h1>
      <div className="card">
        <p></p>
        <form className="card-body">
          Weight:{" "}
          <input
            className="form-control"
            name="weight"
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <p></p>
          Height:{" "}
          <input
            className="form-control"
            name="height"
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <p></p>
          Age:{" "}
          <input className="form-control" name="age" type="text" value={age} onChange={(e) => setAge(e.target.value)} />
          <p></p>
          Activity Level:{" "}
          <div>
            {" "}
            <input
              className="form-control"
              name="activity-level"
              type="text"
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
            />
          </div>
          <p></p>
          <button className="btn btn-outline-secondary" onClick={calculateMacros}>
            Calculate Macros
          </button>
          <p></p>
          <p>Protein: {protein}</p>
          <p>Carbs: {carbs}</p>
          <p>Fats: {fats}</p>
          <p></p>
        </form>
      </div>
      <p></p>

      <form className="">
        <p className="">
          Check Out Our Nutrition Guides{" "}
          <a href="/nutrition">
            <img
              src="https://cdn-icons-png.flaticon.com/128/5033/5033206.png"
              alt="Logo"
              width="45"
              height="45"
              className="d-inline-block align-text-top"
            />
          </a>
        </p>
      </form>
    </div>
  );
}
