import { useState, useEffect } from "react";

export function MacroCalculator() {
  const [weight, setWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [heightInput, setHeightInput] = useState("");
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("male");
  const [activityLevel, setActivityLevel] = useState("1.2");
  const [goal, setGoal] = useState("notSure");

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
    calculateMacros(updated);
  };

  const calculateMacros = (customSliders = sliders) => {
    if (!weight || !height || !age) return;

    const bmr =
      sex === "male" ? 66 + 6.23 * weight + 12.7 * height - 6.8 * age : 655 + 4.35 * weight + 4.7 * height - 4.7 * age;

    const tdee = bmr * parseFloat(activityLevel);

    let calorieAdjustment = 0.85; // default: slight deficit for most cases
    let macroSplit = { protein: 0.3, carbs: 0.4, fats: 0.3 };

    if (goal === "tone") {
      calorieAdjustment = 0.8; // 20% deficit for toning/fat loss
      macroSplit = { protein: 0.35, carbs: 0.35, fats: 0.3 };
    } else if (goal === "build") {
      calorieAdjustment = 1.0; // maintenance to slight surplus
      macroSplit = { protein: 0.35, carbs: 0.45, fats: 0.2 };
    } else if (goal === "strength") {
      calorieAdjustment = 0.9; // slight deficit for lean strength gain
      macroSplit = { protein: 0.3, carbs: 0.5, fats: 0.2 };
    } else if (goal === "notSure") {
      calorieAdjustment = 0.85; // safe default deficit
      macroSplit = { protein: 0.3, carbs: 0.4, fats: 0.3 };
    }

    const avgCalories = tdee * calorieAdjustment;
    const minCalories = avgCalories * 0.95;
    const maxCalories = avgCalories * 1.05;

    setCalorieRange(`${Math.round(minCalories)} - ${Math.round(maxCalories)}`);

    if (customMacro) {
      macroSplit = {
        protein: customSliders.protein / 100,
        carbs: customSliders.carbs / 100,
        fats: customSliders.fats / 100,
      };
    }

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

  const resetForm = () => {
    setWeight("");
    setGoalWeight("");
    setHeightInput("");
    setHeight(0);
    setAge("");
    setSex("male");
    setActivityLevel("1.2");
    setGoal("notSure");
    setCustomMacro(false);
    setSliders({ protein: 30, carbs: 40, fats: 30 });
    setProteinGrams(0);
    setCarbGrams(0);
    setFatGrams(0);
    setMacroPercents({ protein: 0, carbs: 0, fats: 0 });
    setCalorieRange("");
  };

  useEffect(() => {
    calculateMacros();
  }, [weight, height, age, sex, activityLevel, goal, sliders, customMacro]);

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
          border: 2px solid #FF99AA;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          cursor: pointer;
        }
        .progress-bar.bg-success {
          background: linear-gradient(90deg, rgb(226, 107, 186),rgb(236, 158, 206));
        }
        .progress-bar.bg-info {
          background: linear-gradient(90deg, rgb(116, 206, 239),rgb(194, 226, 235));
        }
        .progress-bar.bg-warning {
          background: linear-gradient(90deg, rgb(127, 184, 83), rgb(180, 217, 99));
        }
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
        <div className="card shadow-lg p-4 rounded-4" style={{ maxWidth: "900px", width: "100%" }}>
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
              {["male", "female"].map((s) => (
                <option key={s} value={s}>
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </option>
              ))}
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

          {/* Fitness Goal */}
          <div className="mt-3">
            <label className="form-label">Fitness Goal</label>
            <select className="form-select form-select-lg" value={goal} onChange={(e) => setGoal(e.target.value)}>
              <option value="tone">Tone</option>
              <option value="build">Build Muscle</option>
              <option value="strength">Strength</option>
              <option value="notSure">Not Sure</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="mt-3 d-flex gap-2">
            <button
              className="btn btn-gradient btn-lg mt-3 shadow"
              style={{
                background: "linear-gradient(90deg,rgb(226, 107, 186),rgb(236, 158, 206))",
                color: "#fff",
                border: "none",
              }}
              onClick={() => calculateMacros()}
            >
              Calculate Macros
            </button>
            <button
              className="btn btn-gradient btn-lg mt-3 shadow"
              style={{
                background: "linear-gradient(90deg,rgb(116, 206, 239),rgb(194, 226, 235))",
                color: "#fff",
                border: "none",
              }}
              onClick={resetForm}
            >
              Reset
            </button>
          </div>

          {/* Custom Macro Toggle */}
          <div className="form-check mt-3">
            <input
              type="checkbox"
              className="form-check-input"
              checked={customMacro}
              onChange={(e) => setCustomMacro(e.target.checked)}
            />
            <label className="form-check-label">Use Custom Macro Percentages</label>
          </div>

          {/* Custom Macro Sliders */}
          {customMacro && (
            <div className="mt-4">
              <label>
                Protein %: {sliders.protein.toFixed(0)}% ({proteinGrams}g)
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={sliders.protein}
                onChange={(e) => handleSliderChange("protein", e.target.value)}
                className="form-range"
              />

              <label>
                Carbs %: {sliders.carbs.toFixed(0)}% ({carbGrams}g)
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={sliders.carbs}
                onChange={(e) => handleSliderChange("carbs", e.target.value)}
                className="form-range"
              />

              <label>
                Fats %: {sliders.fats.toFixed(0)}% ({fatGrams}g)
              </label>
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
