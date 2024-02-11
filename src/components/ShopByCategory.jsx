import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ShopByCategory = () => {
  const options = {
    loop: true,
    margin: 10,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    animatOut: "slideOutUp",
    autoplayHoverPause: true,
    dots: true,
    responsive: {
      1200: {
        items: 4,
      },
      768: {
        items: 3,
      },
      540: {
        items: 1,
        innerWidth: "100%",
        outerWidth: "100%",
      },
    },
  };

  return (
    <div className="px-md-5 px-2 mt-4">
      <h2 className="px-2 fw-bold">SHOP BY CATEGORY</h2>
      <ReactOwlCarousel className="owl-theme" {...options}>
        <div className="item">
          <div className="card border-0 shadow rounded-10 mb-3 p-3">
            <img
              src={process.env.PUBLIC_URL + "/images/category-01.png"}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-text text-center">LAPTOPS</h5>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card border-0 shadow rounded-10 mb-3 p-3">
            <img
              src={process.env.PUBLIC_URL + "/images/category-02.png"}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-text text-center">HEADPHONES</h5>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card border-0 shadow rounded-10 mb-3 p-3">
            <img
              src={process.env.PUBLIC_URL + "/images/category-03.png"}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-text text-center">PROJECTOR</h5>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card border-0 shadow rounded-10 mb-3 p-3">
            <img
              src={process.env.PUBLIC_URL + "/images/category-04.png"}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-text text-center">DESKTOPS</h5>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card border-0 shadow rounded-10 mb-3 p-3">
            <img
              src={process.env.PUBLIC_URL + "/images/category-02.png"}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-text text-center">HEADPHONES</h5>
            </div>
          </div>
        </div>
      </ReactOwlCarousel>
    </div>
  );
};

export default ShopByCategory;
