import React from "react";

const Footer = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4 mt-5 bg-black text-white px-2 px-md-4 mx-0">
      <div className="col">
        <h4 className="mb-3">Exclusive</h4>
        <p className="mb-2">Subscribe</p>
        <div>
          <p className="text-14">Signup for free Newsletter</p>
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-transparent rounded-3 ps-4 pe-5 py-2 border-white w-100"
          />
        </div>
      </div>

      <div className="col">
        <h4 className="mb-3">Support</h4>
        <p>111 Bijoy sarani, Banagalore, DH 1515, India.</p>
        <p>exclusive@gmail.com</p>
        <p>+91 8015-88888-9999</p>
      </div>

      <div className="col">
        <h4 className="mb-3">Account</h4>
        <p>
          <a href="#" className="text-decoration-none text-white">My Account.</a>
        </p>
        <p>
          <a href="#" className="text-decoration-none text-white">Login / Register</a>
        </p>
        <p>
          <a href="#" className="text-decoration-none text-white">Wishlist</a>
        </p>
        <p>
          <a href="#" className="text-decoration-none text-white">Shop</a>
        </p>
        <p>
          <a href="#" className="text-decoration-none text-white">Cart</a>
        </p>
      </div>

      <div className="col">
        <h4 className="mb-3">Quick Links</h4>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
        <p>FAQ</p>
        <p>Contact</p>
      </div>

      <div className="col">
        <h4 className="mb-3">Download App</h4>
        <p className="text-14">Save $3 with App New User Only</p>
        <div className="d-flex gap-3">
          <div>
            <img src={process.env.PUBLIC_URL + "/images/Qr Code.png"} alt="qrcode" />
          </div>
          <div>
            <div>
              <img src={process.env.PUBLIC_URL + "/images/GooglePlay.png"} alt="playstore" />
            </div>
            <div>
            <img src={process.env.PUBLIC_URL + "/images/AppStore.png"} alt="playstore" />
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center gap-3 my-3">
          <i className="ri-facebook-line"></i>
          <i className="ri-twitter-line"></i>
          <i className="ri-instagram-line"></i>
          <i className="ri-linkedin-line"></i>
        </div>
      </div>
    </div>
      <p className="py-3 text-center mb-0 bg-dark text-light">@ Copyright Savex 2024. All right reserved</p>
    </>
  );
};

export default Footer;
