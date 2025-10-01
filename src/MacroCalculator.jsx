import { useState, useEffect } from "react";

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
  const [macroPercents, setMacroPercents] = useState({ protein: 25, fats: 25, carbs: 50 });

  const [customMacro, setCustomMacro] = useState(false);
  const [sliders, setSliders] = useState({ protein: 25, fats: 25, carbs: 50 });

  // Keep sliders adding up to 100%
  const handleSliderChange = (macro, value) => {
    const newValue = parseInt(value);
    let otherMacros = Object.keys(sliders).filter((m) => m !== macro);
    let totalOther = otherMacros.reduce((sum, m) => sum + sliders[m], 0);
    let diff = newValue - sliders[macro];

    let updated = { ...sliders, [macro]: newValue };

    otherMacros.forEach((m) => {
      updated[m] = Math.max(0, sliders[m] - diff * (sliders[m] / totalOther));
    });

    // Normalize to exactly 100%
    let total = updated.protein + updated.fats + updated.carbs;
    updated = {
      protein: (updated.protein / total) * 100,
      fats: (updated.fats / total) * 100,
      carbs: (updated.carbs / total) * 100,
    };

    setSliders(updated);
  };

  const calculateMacros = () => {
    const weightKg = parseFloat(weight) * 0.4536;
    const goalWeightKg = parseFloat(goalWeight) * 0.4536;
    const [feet, inches] = height.split("'");
    const heightCm = parseInt(feet) * 30.48 + parseInt(inches || 0) * 2.54;

    let bmr = 0;
    if (sex === "male") {
      bmr = 88.362 + 13.397 * weightKg + 4.799 * heightCm - 5.677 * parseInt(age);
    } else {
      bmr = 447.593 + 9.247 * weightKg + 3.098 * heightCm - 4.33 * parseInt(age);
    }

    const tdee = bmr * parseFloat(activityLevel);

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

    let macroSplit;
    if (customMacro) {
      macroSplit = {
        protein: sliders.protein / 100,
        fats: sliders.fats / 100,
        carbs: sliders.carbs / 100,
      };
    } else {
      if (goal === "loss") {
        macroSplit = { protein: 0.3, fats: 0.25, carbs: 0.45 };
      } else if (goal === "gain") {
        macroSplit = { protein: 0.25, fats: 0.2, carbs: 0.55 };
      } else {
        macroSplit = { protein: 0.25, fats: 0.25, carbs: 0.5 };
      }
    }

    const proteinGrams = parseFloat(goalWeight) * 1.0;
    const proteinCalories = proteinGrams * 4;

    const fatCalories = avgCalories * macroSplit.fats;
    const fatGrams = fatCalories / 9;

    const carbCalories = avgCalories * macroSplit.carbs;
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
  };

  useEffect(() => {
    if (weight && goalWeight && height && age) {
      calculateMacros();
    }
  }, [sliders, weight, goalWeight, height, age, sex, activityLevel, goal, customMacro]);

  return (
    <div>
      <h1 className="m-3 pb-2">Calculate Your Macros</h1>
      <div className="card p-3">
        <form className="card-body">
          <label>Current Weight (lbs):</label>
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

          <label className="form-label mt-2">Weight Goal:</label>
          <select value={goal} onChange={(e) => setGoal(e.target.value)} className="form-select">
            <option value="loss">Weight Loss</option>
            <option value="maintenance">Maintenance</option>
            <option value="gain">Weight Gain</option>
          </select>

          <div className="form-check mt-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="customMacro"
              checked={customMacro}
              onChange={(e) => setCustomMacro(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="customMacro">
              Use Custom Macro Percentages
            </label>
          </div>

          {customMacro && (
            <div className="mt-3">
              <label>Protein %: {sliders.protein.toFixed(0)}%</label>
              <input
                type="range"
                min="0"
                max="100"
                value={sliders.protein}
                onChange={(e) => handleSliderChange("protein", e.target.value)}
                className="form-range"
              />

              <label>Fats %: {sliders.fats.toFixed(0)}%</label>
              <input
                type="range"
                min="0"
                max="100"
                value={sliders.fats}
                onChange={(e) => handleSliderChange("fats", e.target.value)}
                className="form-range"
              />

              <label>Carbs %: {sliders.carbs.toFixed(0)}%</label>
              <input
                type="range"
                min="0"
                max="100"
                value={sliders.carbs}
                onChange={(e) => handleSliderChange("carbs", e.target.value)}
                className="form-range"
              />
            </div>
          )}
        </form>

        {calorieRange && (
          <div className="p-3">
            <h4>Recommended Daily Intake: {calorieRange} kcal</h4>
            <p>
              Protein: {protein} g ({macroPercents.protein}%)
            </p>
            <div className="progress mb-2">
              <div className="progress-bar bg-success" style={{ width: `${macroPercents.protein}%` }}>
                {macroPercents.protein}%
              </div>
            </div>

            <p>
              Carbs: {carbs} g ({macroPercents.carbs}%)
            </p>
            <div className="progress mb-2">
              <div className="progress-bar bg-info" style={{ width: `${macroPercents.carbs}%` }}>
                {macroPercents.carbs}%
              </div>
            </div>

            <p>
              Fats: {fats} g ({macroPercents.fats}%)
            </p>
            <div className="progress mb-2">
              <div className="progress-bar bg-warning" style={{ width: `${macroPercents.fats}%` }}>
                {macroPercents.fats}%
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
