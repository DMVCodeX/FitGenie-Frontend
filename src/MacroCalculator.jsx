import { useState } from "react";

export function MacroCalculator() {
  const [weight, setWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("male");
  const [activityLevel, setActivityLevel] = useState(1.2);
  const [goal, setGoal] = useState("maintenance");

  const [calorieRange, setCalorieRange] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fats, setFats] = useState("");
  const [macroPercents, setMacroPercents] = useState({});

  function calculateMacros(e) {
    e.preventDefault();

    const weightKg = parseFloat(weight) * 0.4536;
    const goalWeightKg = parseFloat(goalWeight) * 0.4536;
    const [feet, inches] = height.split("'");
    const heightCm = parseInt(feet) * 30.48 + parseInt(inches || 0) * 2.54;

    // BMR baseline
    let bmr = 0;
    if (sex === "male") {
      bmr = 88.362 + 13.397 * weightKg + 4.799 * heightCm - 5.677 * parseInt(age);
    } else {
      bmr = 447.593 + 9.247 * weightKg + 3.098 * heightCm - 4.33 * parseInt(age);
    }

    const tdee = bmr * parseFloat(activityLevel);

    // Calorie range by goal
    let minCalories, maxCalories;
    if (goal === "loss") {
      minCalories = tdee * 0.75;
      maxCalories = tdee * 0.85;
    } else if (goal === "gain") {
      minCalories = tdee * 1.1;
      maxCalories = tdee * 1.2;
    } else {
      minCalories = tdee * 0.95;
      maxCalories = tdee * 1.05;
    }

    const avgCalories = (minCalories + maxCalories) / 2;

    // Macro percentages
    let macroSplit;
    if (goal === "loss") {
      macroSplit = { protein: 0.3, fats: 0.25, carbs: 0.45 };
    } else if (goal === "gain") {
      macroSplit = { protein: 0.25, fats: 0.2, carbs: 0.55 };
    } else {
      macroSplit = { protein: 0.25, fats: 0.25, carbs: 0.5 };
    }

    // Protein based on goal weight
    const proteinGrams = parseFloat(goalWeight) * 1.0; // 1g per lb
    const proteinCalories = proteinGrams * 4;

    // Fats
    const fatCalories = avgCalories * macroSplit.fats;
    const fatGrams = fatCalories / 9;

    // Carbs
    const carbCalories = avgCalories - proteinCalories - fatCalories;
    const carbGrams = carbCalories / 4;

    const totalCalories = proteinCalories + fatCalories + carbCalories;
    const percents = {
      protein: ((proteinCalories / totalCalories) * 100).toFixed(0),
      fats: ((fatCalories / totalCalories) * 100).toFixed(0),
      carbs: ((carbCalories / totalCalories) * 100).toFixed(0),
    };

    setCalorieRange(`${minCalories.toFixed(0)}–${maxCalories.toFixed(0)}`);
    setProtein(proteinGrams.toFixed(0));
    setFats(fatGrams.toFixed(0));
    setCarbs(carbGrams.toFixed(0));
    setMacroPercents(percents);
  }

  return (
    <div>
      <h1 className="m-3 pb-2">Calculate Your Macros</h1>
      <div className="card">
        <form onSubmit={calculateMacros} className="card-body">
          <label className="form-label">Current Weight (lbs):</label>
          <input className="form-control" value={weight} onChange={(e) => setWeight(e.target.value)} />

          <label className="form-label mt-2">Goal Weight (lbs):</label>
          <input className="form-control" value={goalWeight} onChange={(e) => setGoalWeight(e.target.value)} />

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

          <label className="form-label mt-2">Goal:</label>
          <select value={goal} onChange={(e) => setGoal(e.target.value)} className="form-select">
            <option value="loss">Weight Loss</option>
            <option value="maintenance">Maintenance</option>
            <option value="gain">Weight Gain</option>
          </select>

          <button type="submit" className="btn btn-outline-secondary mt-3">
            Calculate Macros
          </button>
        </form>

        {calorieRange && (
          <div className=" p-3">
            <h4>Recommended Daily Intake: {calorieRange} kcal</h4>
            <p>
              <br />
              Protein: {protein} g ({macroPercents.protein}%)
            </p>
            <p>
              Carbs: {carbs} g ({macroPercents.carbs}%)
            </p>
            <p>
              Fats: {fats} g ({macroPercents.fats}%)
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
