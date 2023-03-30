import { useState } from "react";

export function MacroCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fats, setFats] = useState("");

  function calculateMacros() {
    const protein = setProtein(protein);
    const carbs = setCarbs(carbs);
    const fats = setFats(fats);
  }

  return (
    <div>
      <h1>Calculate Your Macros</h1>
      <div className="card">
        <p></p>
        <form className="card-body">
          Weight: <input name="weight" type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
          <p></p>
          Height: <input name="height" type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
          <p></p>
          Age: <input name="age" type="text" value={age} onChange={(e) => setAge(e.target.value)} />
          <p></p>
          Activity Level:{" "}
          <input
            name="activity-level"
            type="text"
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
          />
          <p></p>
          <button className="btn btn-outline-secondary" onClick={calculateMacros}>
            Calculate Macros
          </button>
          <p></p>
          <div>
            <p>Protein: {protein}</p>
            <p>Carbs: {carbs}</p>
            <p>Fats: {fats}</p>
            <p></p>
            <form className="card-body">
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
        </form>
      </div>
    </div>
  );
}
