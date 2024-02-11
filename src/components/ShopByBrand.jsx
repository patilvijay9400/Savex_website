import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ShopByBrand = () => {
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
      <h2 className="fw-bold px-2">SHOP BY BRAND</h2>
      <ReactOwlCarousel className="owl-theme" {...options}>
        <div className="item">
          <div className="border p-3 rounded-10 d-flex justify-content-center">
            <img
              src={process.env.PUBLIC_URL + "/images/brand-01.png"}
              className="w-auto"
              height="100"
              alt="..."
            />
          </div>
        </div>
        <div className="item">
          <div className="border p-3 rounded-10 d-flex justify-content-center">
            <img
              src={process.env.PUBLIC_URL + "/images/brand-02.png"}
              className="w-auto"
              height="100"
              alt="..."
            />
          </div>
        </div>
        <div className="item">
          <div className="border p-3 rounded-10 d-flex justify-content-center">
            <img
              src={process.env.PUBLIC_URL + "/images/brand-03.png"}
              className="w-auto"
              height="100"
              alt="..."
            />
          </div>
        </div>
        <div className="item">
          <div className="border p-3 rounded-10 d-flex justify-content-center">
            <img
              src={process.env.PUBLIC_URL + "/images/brand-04.png"}
              className="w-auto"
              height="100"
              alt="..."
            />
          </div>
        </div>
        <div className="item">
          <div className="border p-3 rounded-10 d-flex justify-content-center">
            <img
              src={process.env.PUBLIC_URL + "/images/brand-05.png"}
              className="w-auto"
              height="100"
              alt="..."
            />
          </div>
        </div>
        <div className="item">
          <div className="border p-3 rounded-10 d-flex justify-content-center">
            <img
              src={process.env.PUBLIC_URL + "/images/brand-06.png"}
              className="w-auto"
              height="100"
              alt="..."
            />
          </div>
        </div>
        <div className="item">
          <div className="border p-3 rounded-10 d-flex justify-content-center">
            <img
              src={process.env.PUBLIC_URL + "/images/brand-07.png"}
              className="w-auto"
              height="100"
              alt="..."
            />
          </div>
        </div>
      </ReactOwlCarousel>
    </div>
  );
};

export default ShopByBrand;
