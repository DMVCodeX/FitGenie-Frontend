export function Info() {
  return (
    <div className="container my-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 pink-font fw-bold">
          Nutrition Tools
          <img
            src="https://cdn-icons-png.flaticon.com/128/7078/7078773.png"
            alt="FitGenie Logo"
            width="70"
            height="70"
            className="ms-2"
          />
        </h1>
        <p className="lead">
          FitGenie is a cutting-edge fitness application built with Ruby on Rails, following MVC architecture and
          RESTful API principles. Designed to empower your nutrition journey with smart tools for your goals.
        </p>
        <a
          href="https://fitgenie.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-gradient btn-lg mt-3 shadow"
          style={{
            background: "linear-gradient(90deg, #ff758c, #ff7eb3)",
            color: "#fff",
            border: "none",
          }}
        >
          Visit FitGenie App
          <img
            src="https://cdn-icons-png.flaticon.com/128/7663/7663989.png"
            alt="Link Icon"
            width="30"
            height="30"
            className="ms-2"
          />
        </a>
      </div>

      {/* Features Grid */}
      <div className="row g-4">
        {/* Macro Calculator Card */}
        <div className="col-md-6">
          <div className="card shadow-lg h-100 border-0 hover-preview right-preview" style={{ borderRadius: "15px" }}>
            <div
              className="card-body preview-container"
              style={{ background: "linear-gradient(135deg, #89f7fe, #66a6ff)", borderRadius: "15px" }}
            >
              <h3 className="card-title text-white fw-bold">Macro Calculator</h3>
              <p className="card-text text-white">
                Your interactive tool to personalize your macros for weight loss, maintenance, or gain.
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Goal-based calorie ranges</li>
                <li className="list-group-item">Protein based on goal weight</li>
                <li className="list-group-item">Customizable macro percentages</li>
                <li className="list-group-item">Auto-adjust sliders to keep totals at 100%</li>
                <li className="list-group-item">Live updates in grams and %</li>
              </ul>

              {/* Hidden Preview */}
              <div className="preview-content right">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/12578/12578993.png"
                  alt="Macro Preview"
                  className="img-fluid"
                  style={{ maxHeight: "150px" }}
                />
                <p className="mt-2 text-white">Drag sliders to instantly adjust macro breakdown!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Nutrition Guides Card */}
        <div className="col-md-6">
          <div className="card shadow-lg h-100 border-0 hover-preview left-preview" style={{ borderRadius: "15px" }}>
            <div
              className="card-body preview-container"
              style={{ background: "linear-gradient(135deg, #fdfbfb, #ebedee)", borderRadius: "15px" }}
            >
              <h3 className="card-title fw-bold">Nutrition Guides</h3>
              <p className="card-text">Comprehensive guides to make healthy eating simple and effective.</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Meal planning tailored to your goals</li>
                <li className="list-group-item">Portion control guidance</li>
                <li className="list-group-item">Healthy eating strategies</li>
                <li className="list-group-item">Quick access to nutrition resources</li>
              </ul>

              {/* Hidden Preview */}
              <div className="preview-content left">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/9757/9757053.png"
                  alt="Nutrition Preview"
                  className="img-fluid"
                  style={{ maxHeight: "150px" }}
                />
                <p className="mt-2">Explore expert nutrition tips instantly!</p>
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
          transition: transform 0.4s ease-in-out;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .preview-content.right {
          right: -100%;
        }
        .hover-preview.right-preview:hover .preview-content.right {
          transform: translateX(-100%);
        }
        .preview-content.left {
          left: -100%;
        }
        .hover-preview.left-preview:hover .preview-content.left {
          transform: translateX(100%);
        }
        .list-group-item {
          background: transparent;
          border: none;
          color: #333;
        }
      `}</style>
    </div>
  );
}
