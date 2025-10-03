export function Info() {
  return (
    <div className="container my-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 pink-font fw-bold">FitGenie Nutrition Tools</h1>
        <p className="lead">
          FitGenie is a cutting-edge fitness application built with Ruby on Rails, following MVC architecture and
          RESTful API principles. Designed to empower your nutrition journey with smart tools for your goals.
        </p>
        {/* <a
          href="https://fitgenie.netlify.app/macrocalculator"
          target="_blank"
          rel="noreferrer"
          className="btn btn-gradient btn-lg mt-3 shadow"
          style={{
            background: "linear-gradient(90deg,rgb(239, 116, 198),rgb(236, 158, 206))",
            color: "#fff",
            border: "none",
          }}
        >
          Visit FitGenie MacroCalculator
          <img
            src="https://cdn-icons-png.flaticon.com/128/7663/7663989.png"
            alt="Link Icon"
            width="30"
            height="30"
            className="ms-2"
          />
        </a> */}
      </div>

      {/* Features Grid */}
      <div className="row g-4">
        {/* Macro Calculator Card */}
        <div className="col-md-6">
          <div
            className="card shadow-lg h-100 border-0 hover-preview right-preview macro-card"
            style={{ borderRadius: "15px" }}
          >
            <div className="card-body preview-container">
              <h3 className="card-title text-white fw-bold">Macro Calculator</h3>
              <p className="card-text text-light">
                Your interactive tool to personalize your macros to fit your goals.
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Goal-based calorie ranges</li>
                <li className="list-group-item">Protein based on goal weight</li>
                <li className="list-group-item">Customizable macro percentages</li>
                <li className="list-group-item">Auto-adjust sliders to keep totals at 100%</li>
                <li className="list-group-item">Live updates in grams and %</li>
              </ul>

              <div className="preview-content right">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/12578/12578993.png"
                  alt="Macro Preview"
                  className="img-fluid"
                  style={{ maxHeight: "150px" }}
                />
                <p className="mt-2">Drag sliders to instantly adjust macro breakdown!</p>
                <a
                  href="https://fitgenie.netlify.app/macrocalculator"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-light btn-lg mt-2"
                >
                  Go to Macro Calculator
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Nutrition Guides Card */}
        <div className="col-md-6">
          <div
            className="card shadow-lg h-100 border-0 hover-preview left-preview nutrition-card"
            style={{ borderRadius: "15px" }}
          >
            <div className="card-body preview-container">
              <h3 className="card-title text-white fw-bold">Nutrition Guides</h3>
              <p className="card-text text-light">Comprehensive guides to make healthy eating simple and effective.</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Meal planning tailored to your goals</li>
                <li className="list-group-item">Portion control guidance</li>
                <li className="list-group-item">Healthy eating strategies</li>
                <li className="list-group-item">Quick access to nutrition resources</li>
              </ul>

              <div className="preview-content left">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/9757/9757053.png"
                  alt="Nutrition Preview"
                  className="img-fluid"
                  style={{ maxHeight: "150px" }}
                />
                <p className="mt-2">Explore expert nutrition tips instantly!</p>
                <a href="/nutrition" className="btn btn-light btn-lg mt-2">
                  View Nutrition Guides
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-5 text-center">
        <p className="text-muted">
          FitGenie — your personalized nutrition companion, making macro tracking and healthy eating simple and
          effective.
        </p>
      </div>

      {/* Hover Preview CSS */}
      <style>{`
        .hover-preview {
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease-in-out;
        }
        .hover-preview:hover {
          transform: scale(1.02);
          box-shadow: 0px 8px 20px rgba(0,0,0,0.3);
        }
        .preview-content {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          padding: 15px;
          background: rgba(0,0,0,0.7);
          color: white;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
          box-shadow: 0px 0px 30px rgba(255,255,255,0.3);
        }
        .preview-content.right {
          right: -100%;
          transform: translateX(0);
        }
        .hover-preview.right-preview:hover .preview-content.right {
          transform: translateX(-100%);
          opacity: 1;
        }
        .preview-content.left {
          left: -100%;
          transform: translateX(0);
        }
        .hover-preview.left-preview:hover .preview-content.left {
          transform: translateX(100%);
          opacity: 1;
        }
        .list-group-item {
          background: transparent;
          border: none;
          color: #f8f9fa;
        }

        /* Premium gradients */
        .macro-card {
          background: linear-gradient(135deg,rgb(69, 152, 184),rgb(129, 189, 221));
        }
        .nutrition-card {
          background: linear-gradient(135deg,rgb(124, 185, 149),rgb(148, 219, 192));
        }
      `}</style>
    </div>
  );
}
