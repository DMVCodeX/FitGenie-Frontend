import { useState } from "react";

export function MacroCalculator() {
  const [weight, setWeight] = useState(""); // lbs
  const [height, setHeight] = useState(""); // e.g. 5'10
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("male");
  const [activityLevel, setActivityLevel] = useState(1.2);

  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fats, setFats] = useState("");

  function calculateMacros(e) {
    e.preventDefault();

    // Convert inputs
    const weightKg = parseFloat(weight) * 0.4536;
    const [feet, inches] = height.split("'");
    const heightCm = parseInt(feet) * 30.48 + parseInt(inches || 0) * 2.54;

    // BMR (Harris-Benedict)
    let bmr = 0;
    if (sex === "male") {
      bmr = 88.362 + 13.397 * weightKg + 4.799 * heightCm - 5.677 * parseInt(age);
    } else {
      bmr = 447.593 + 9.247 * weightKg + 3.098 * heightCm - 4.33 * parseInt(age);
    }

    // TDEE
    const tdee = bmr * parseFloat(activityLevel);

    // Macros
    const proteinValue = weightKg * 2.0; // ~2 g per kg
    const fatsValue = (0.25 * tdee) / 9; // 25% of calories
    const carbsValue = (tdee - proteinValue * 4 - fatsValue * 9) / 4;

    setProtein(proteinValue.toFixed(1));
    setCarbs(carbsValue.toFixed(1));
    setFats(fatsValue.toFixed(1));
  }

  return (
    <div>
      <h1 className="m-3 pb-2">Calculate Your Macros</h1>
      <div className="card">
        <form onSubmit={calculateMacros} className="card-body">
          <label className="form-label">Weight (lbs):</label>
          <input className="form-control" value={weight} onChange={(e) => setWeight(e.target.value)} />

          <label className="form-label mt-2">Height (e.g. 5'10):</label>
          <input className="form-control" value={height} onChange={(e) => setHeight(e.target.value)} />

          <label className="form-label mt-2">Age:</label>
          <input className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />

          <label className="form-label mt-2">Sex:</label>
          <select value={sex} onChange={(e) => setSex(e.target.value)} className="form-select">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <label className="form-label mt-2">Activity Level:</label>
          <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(parseFloat(e.target.value))}
            className="form-select"
          >
            <option value={1.2}>Sedentary</option>
            <option value={1.375}>Light</option>
            <option value={1.55}>Moderate</option>
            <option value={1.725}>Active</option>
            <option value={1.9}>Very Active</option>
          </select>

          <button type="submit" className="btn btn-outline-secondary mt-3">
            Calculate Macros
          </button>
        </form>

        <div className="mt-2 p-3">
          <p>Protein: {protein} g</p>
          <p>Carbs: {carbs} g</p>
          <p>Fats: {fats} g</p>
        </div>
      </div>
    </div>
  );
}
