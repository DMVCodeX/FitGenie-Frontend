import { useState, useEffect } from "react";

export function MacroCalculator() {
  const [weight, setWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [heightInput, setHeightInput] = useState("");
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("male");
  const [activityLevel, setActivityLevel] = useState("1.2");
  const [goal, setGoal] = useState("maintenance");

  const [customMacro, setCustomMacro] = useState(false);
  const [sliders, setSliders] = useState({ protein: 30, carbs: 40, fats: 30 });

  const [proteinGrams, setProteinGrams] = useState(0);
  const [carbGrams, setCarbGrams] = useState(0);
  const [fatGrams, setFatGrams] = useState(0);
  const [macroPercents, setMacroPercents] = useState({ protein: 0, carbs: 0, fats: 0 });
  const [calorieRange, setCalorieRange] = useState("");

  const activityMultipliers = {
    1.2: "Sedentary",
    1.375: "Lightly active",
    1.55: "Moderately active",
    1.725: "Very active",
    1.9: "Extra active",
  };

  const parseHeight = (value) => {
    const match = value.match(/(\d+)'(\d+)/);
    if (match) {
      const feet = parseInt(match[1], 10);
      const inches = parseInt(match[2], 10);
      return feet * 12 + inches;
    }
    const num = parseFloat(value);
    return isNaN(num) ? 0 : num;
  };

  const handleHeightChange = (e) => {
    const val = e.target.value;
    setHeightInput(val);
    setHeight(parseHeight(val));
  };

  const handleSliderChange = (macro, value) => {
    const newValue = parseInt(value);
    let otherMacros = Object.keys(sliders).filter((m) => m !== macro);
    let totalOther = otherMacros.reduce((sum, m) => sum + sliders[m], 0);
    let diff = newValue - sliders[macro];

    let updated = { ...sliders, [macro]: newValue };
    otherMacros.forEach((m) => {
      updated[m] = Math.max(0, sliders[m] - diff * (sliders[m] / totalOther));
    });

    let total = updated.protein + updated.carbs + updated.fats;
    updated = {
      protein: (updated.protein / total) * 100,
      carbs: (updated.carbs / total) * 100,
      fats: (updated.fats / total) * 100,
    };

    setSliders(updated);
  };

  const calculateMacros = () => {
    if (!weight || !goalWeight || !height || !age) return;

    const bmr =
      sex === "male" ? 66 + 6.23 * weight + 12.7 * height - 6.8 * age : 655 + 4.35 * weight + 4.7 * height - 4.7 * age;

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
    setCalorieRange(`${Math.round(minCalories)} - ${Math.round(maxCalories)}`);

    let macroSplit = customMacro
      ? {
          protein: sliders.protein / 100,
          carbs: sliders.carbs / 100,
          fats: sliders.fats / 100,
        }
      : goal === "loss"
      ? { protein: 0.3, carbs: 0.45, fats: 0.25 }
      : goal === "gain"
      ? { protein: 0.25, carbs: 0.55, fats: 0.2 }
      : { protein: 0.25, carbs: 0.5, fats: 0.25 };

    const proteinCalories = avgCalories * macroSplit.protein;
    const carbCalories = avgCalories * macroSplit.carbs;
    const fatCalories = avgCalories * macroSplit.fats;

    setProteinGrams(Math.round(proteinCalories / 4));
    setCarbGrams(Math.round(carbCalories / 4));
    setFatGrams(Math.round(fatCalories / 9));

    setMacroPercents({
      protein: ((proteinCalories / avgCalories) * 100).toFixed(0),
      carbs: ((carbCalories / avgCalories) * 100).toFixed(0),
      fats: ((fatCalories / avgCalories) * 100).toFixed(0),
    });
  };

  useEffect(() => {
    calculateMacros();
  }, [sliders, weight, goalWeight, height, age, sex, activityLevel, goal, customMacro]);

  return (
    <>
      <style>{`
        input[type="range"].form-range {
          height: 8px;
          border-radius: 5px;
          background: linear-gradient(90deg, #4caf50, #2196f3, #ff9800);
        }
        input[type="range"]::-webkit-slider-thumb {
          background: #fff;
          border: 2px solid #4caf50;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          cursor: pointer;
        }
        .progress-bar.bg-success {
          background: linear-gradient(90deg, rgb(225, 105, 199), rgb(224, 188, 231));
        }
        .progress-bar.bg-info {
          background: linear-gradient(90deg, rgb(62, 145, 186), rgb(166, 197, 222));
        }
        .progress-bar.bg-warning {
          background: linear-gradient(90deg, rgb(127, 184, 83), rgb(180, 217, 99));
        }

        /* Larger macro bars */
        .progress {
          height: 40px;
          border-radius: 12px;
          overflow: hidden;
          background-color: #f1f3f4;
        }
        .progress-bar {
          font-weight: 600;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: width 0.5s ease-in-out;
        }
      `}</style>

      <div className="container py-5 d-flex justify-content-center">
        <div className="card shadow-lg p-4 rounded-4 macro-card" style={{ maxWidth: "900px", width: "100%" }}>
          <h1 className="fw-bold text-center mb-4">Macro Calculator</h1>

          {/* Inputs */}
          <div className="row g-3">
            <div className="col-md-6">
              <input
                type="number"
                placeholder="Current Weight (lbs)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="form-control form-control-lg"
              />
            </div>
            <div className="col-md-6">
              <input
                type="number"
                placeholder="Goal Weight (lbs)"
                value={goalWeight}
                onChange={(e) => setGoalWeight(e.target.value)}
                className="form-control form-control-lg"
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                placeholder={`Height e.g. 5'5"`}
                value={heightInput}
                onChange={handleHeightChange}
                className="form-control form-control-lg"
              />
            </div>
            <div className="col-md-6">
              <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="form-control form-control-lg"
              />
            </div>
          </div>

          {/* Sex */}
          <div className="mt-3">
            <label className="form-label">Sex</label>
            <select className="form-select form-select-lg" value={sex} onChange={(e) => setSex(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Activity Level */}
          <div className="mt-3">
            <label className="form-label">Select Activity Level</label>
            <select
              className="form-select form-select-lg"
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
            >
              {Object.entries(activityMultipliers).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          {/* Weight Goal */}
          <div className="mt-3">
            <label className="form-label">Weight Goal</label>
            <select className="form-select form-select-lg" value={goal} onChange={(e) => setGoal(e.target.value)}>
              <option value="loss">Weight Loss</option>
              <option value="maintenance">Maintenance</option>
              <option value="gain">Weight Gain</option>
            </select>
          </div>

          {/* Custom Macro */}
          {/* <div className="form-check mt-3">
            <input
              type="checkbox"
              className="form-check-input"
              checked={customMacro}
              onChange={(e) => setCustomMacro(e.target.checked)}
            />
            <label className="form-check-label">Use Custom Macro Percentages</label>
          </div> */}
          <br />
          <h5 className="form-check-label">Use Custom Macro Percentages</h5>
          <hr />
          {customMacro && (
            <div className="mt-4">
              <label>Protein %: {sliders.protein.toFixed(0)}%</label>
              <input
                type="range"
                min="0"
                max="100"
                value={sliders.protein}
                onChange={(e) => handleSliderChange("protein", e.target.value)}
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

              <label>Fats %: {sliders.fats.toFixed(0)}%</label>
              <input
                type="range"
                min="0"
                max="100"
                value={sliders.fats}
                onChange={(e) => handleSliderChange("fats", e.target.value)}
                className="form-range"
              />
            </div>
          )}

          {/* Results */}
          <div className="results-box p-4 mt-4 rounded-4">
            <h3 className="fw-semibold text-center">Recommended Daily Intake</h3>
            <p className="text-center fs-5">{calorieRange} kcal</p>

            <div className="progress mb-2">
              <div className="progress-bar bg-success" style={{ width: `${macroPercents.protein}%` }}>
                Protein: {proteinGrams}g ({macroPercents.protein}%)
              </div>
            </div>
            <div className="progress mb-2">
              <div className="progress-bar bg-info" style={{ width: `${macroPercents.carbs}%` }}>
                Carbs: {carbGrams}g ({macroPercents.carbs}%)
              </div>
            </div>
            <div className="progress mb-2">
              <div className="progress-bar bg-warning" style={{ width: `${macroPercents.fats}%` }}>
                Fats: {fatGrams}g ({macroPercents.fats}%)
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
