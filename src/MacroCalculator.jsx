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
    const bmr = 10 * weight + 6.25 * parseInt(height.split("'")[0] * 12) + parseInt(height.split("'")[1]) - 5 * age;
    const tdee = bmr * activityLevel;
    const proteinValue = 0.8 * weight;
    const fatsValue = (0.3 * tdee) / 9;
    const carbsValue = (tdee - proteinValue * 4 - fatsValue * 9) / 4;

    setProtein(proteinValue.toFixed(1));
    setCarbs(carbsValue.toFixed(1));
    setFats(fatsValue.toFixed(1));
  }

  return (
    <div>
      <h1 className="m-3 pb-2">Calculate Your Macros</h1>
      <div className="card">
        <p></p>
        <form className="card-body">
          <label className="form-label" for="weight">
            Weight:
          </label>
          <input
            className="form-control"
            name="weight"
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <p></p>
          <label className="form-label" for="height">
            Height:
          </label>
          <input
            className="form-control"
            name="height"
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <p></p>
          <label className="form-label" for="age">
            Age:
          </label>
          <input className="form-control" name="age" type="text" value={age} onChange={(e) => setAge(e.target.value)} />
          <p></p>

          <div class="mb-3">
            <label className="form-label" for="activity-level">
              Activity Level:
            </label>
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              id="activity-level"
              class="form-select"
            >
              <option value={1.2}>Sedentary</option>
              <option value={1.375}>Light</option>
              <option value={1.55}>Moderate</option>
            </select>
          </div>

          <p></p>
          <button className="btn btn-outline-secondary mt-1" onClick={calculateMacros}>
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
