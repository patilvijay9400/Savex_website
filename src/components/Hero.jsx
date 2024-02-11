import React from "react";

const Hero = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide py-4 px-2 px-md-5 bg-light border-top"
      data-bs-ride="carousel"
      data-bs-interval="10000"
    >
      <div className="carousel-inner px-2">
        <div className="carousel-item active">
          <div className="d-flex justify-content-between align-items-center">
            <div className="content w-50">
              <h3>Binge Through Everything</h3>
              <h1 className="fw-bold display-4">Lenovo Pad Sim3</h1>
              <h3>Your Personal Theater Experinece</h3>
              <p className="mb-0">From</p>
              <h2>$14,4999</h2>
              <button className="btn btn-lg btn-primary">
                Explore top categories
              </button>
            </div>
            <div className="w-50 ps-md-5">
              <img
                src={process.env.PUBLIC_URL + "/images/hero1.png"}
                alt="laptop1"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-flex justify-content-between align-items-center">
            <div className="content w-50">
              <h3>Binge Through Everything</h3>
              <h1 className="fw-bold display-4">Lenovo Pad Sim3</h1>
              <h3>Your Personal Theater Experinece</h3>
              <p className="mb-0">From</p>
              <h2>$14,4999</h2>
              <button className="btn btn-lg btn-primary">
                Explore top categories
              </button>
            </div>
            <div className="w-50 ps-2 ps-md-5">
              <img
                src={process.env.PUBLIC_URL + "/images/hero1.png"}
                alt="laptop1"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-flex justify-content-between align-items-center">
            <div className="content w-50">
              <h3>Binge Through Everything</h3>
              <h1 className="fw-bold display-4">Lenovo Pad Sim3</h1>
              <h3>Your Personal Theater Experinece</h3>
              <p className="mb-0">From</p>
              <h2>$14,4999</h2>
              <button className="btn btn-lg btn-primary">
                Explore top categories
              </button>
            </div>
            <div className="w-50 ps-md-5">
              <img
                src={process.env.PUBLIC_URL + "/images/hero1.png"}
                alt="laptop1"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
    </div>
  );
};

export default Hero;
