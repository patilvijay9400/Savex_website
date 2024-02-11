import React from "react";
import { Link } from "react-router-dom";
import SubHeader from "./SubHeader";

const Header = () => {
  return (
    <header className="px-2 px-md-5">
      <nav className="navbar navbar-expand-lg navbar-white bg-white">
        <div className="container-fluid px-0">
          <div className="d-flex align-items-center justify-content-between w-100 w-md-auto px-2">
            <i className="ri-menu-2-line primary-color d-lg-none text-18 w-25"></i>
            <Link className="navbar-brand" to="/">
              <img
                src={process.env.PUBLIC_URL + "/images/savex-logo.png"}
                height="30"
                alt="logo"
              />
            </Link>
            <div className="d-flex d-lg-none gap-3 w-25 justify-content-end">
              <i className="ri-shopping-cart-fill primary-color text-18"></i>
              <i className="ri-login-box-line primary-color text-18"></i>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <form className="d-flex me-auto w-100">
              <input
                className="form-control me-md-5 rounded-5"
                type="search"
                placeholder="What are you looking for?"
              />
            </form>
            <ul className="navbar-nav my-2 my-lg-0 navbar-nav-scroll gap-3 align-items-center">
              <li className="nav-item">
                <Link
                  className="text-decoration-none d-flex gap-2 text-dark"
                  to="/"
                >
                  <i className="ri-shopping-cart-line"></i> Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="text-decoration-none d-flex gap-2 text-dark"
                  to="/"
                >
                  <i className="ri-heart-line"></i> Wishlist
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="text-decoration-none d-flex gap-2 text-dark"
                  to="/"
                >
                  <i className="ri-phone-line"></i> Support
                </Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <SubHeader />
    </header>
  );
};

export default Header;
