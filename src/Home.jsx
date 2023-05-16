export function Home() {
  return (
    <div id="home-index" className="container-fluid">
      <head>
        <style>@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@100&display=swap');</style>
      </head>

      <h2 className="center-text">Endurance | Determination | Consistency </h2>

      <div id="carouselExampleCaptions" className="carousel slide m-4">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              id="home-img"
              src="https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="d-block w-100"
              alt="https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>Endurance</h1>
              <p>
                Endurance is the ability to persist through physical or mental challenges over a long period of time,
                demonstrating resilience and determination.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              id="home-img"
              src="https://images.unsplash.com/photo-1590487988256-9ed24133863e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              className="d-block w-100"
              alt="https://images.unsplash.com/photo-1590487988256-9ed24133863e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>Determination</h1>
              <p>
                Determination is the quality of being firm and resolute in pursuing a goal despite obstacles or
                setbacks.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              id="home-img"
              src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="d-block w-100"
              alt="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>Consistency</h1>
              <p>Consistency means being dependable and unchanging over time in behavior, performance, or output.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
