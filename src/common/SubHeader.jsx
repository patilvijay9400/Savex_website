import React, { useState } from "react";
import { useHref } from "react-router-dom";

const SubHeader = () => {
  const [megaMenuVisible, setMegaMenuVisible] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const handleProductMenuHover = () => {
    setMegaMenuVisible(true);
  };

  const handleProductMenuLeave = () => {
    setMegaMenuVisible(false);
    setOpenSubMenu(false)
  };

  return (
    <div>
      <ul className="d-none d-lg-flex my-3 gap-4 align-items-center list-unstyled justify-content-center">
        <li className="nav-item">
          <a
            href="#"
            className="product-menu text-decoration-none text-dark"
            onMouseEnter={handleProductMenuHover}
          >
            <h4>Product</h4>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="text-decoration-none text-dark">
            <h4>Join as a Partner</h4>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="text-decoration-none text-dark">
            <h4>Digital Collaboration</h4>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="text-decoration-none text-dark">
            <h4>My Account</h4>
          </a>
        </li>
      </ul>
      {megaMenuVisible && (
        <div className="mega-menu-container d-flex p-3 p-md-5 position-absolute top-0 start-0 end-0 bottom-0">
          <div
            className="mega-menu position-relative p-2 p-md-4 rounded-10 bg-white shadow overflow-auto"
            onMouseLeave={handleProductMenuLeave}
          >
            <h5>All Categories</h5>
            <div className="d-flex">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 w-75 mt-3">
                <div className="col mb-2">
                  <h6>HP</h6>
                  <div className="list-group position-relative">
                    <button
                      type="button"
                      onClick={() => setOpenSubMenu(true)}
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>PC</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>Print</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>HP Networking</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>Consumer Desktop</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>Consumer Accessories</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action fw-bold bg-transparent border-0"
                    >
                      View all
                    </button>
                    {openSubMenu && (
                      <div
                        className="drop-content position-absolute top-0 start-100 bg-light py-2 ps-2 pe-5 w-100 rounded-3"
                        style={{ zIndex: "20" }}
                      >
                        <div className="list-group">
                          <button
                            type="button"
                            className="list-group-item list-group-item-action rounded-3 border-0 bg-transparent"
                          >
                            Desktops
                          </button>
                          <button
                            type="button"
                            className="list-group-item list-group-item-action rounded-3 border-0 bg-transparent"
                          >
                            Laptops
                          </button>
                          <button
                            type="button"
                            className="list-group-item list-group-item-action rounded-3 border-0 bg-transparent"
                          >
                            Workstations
                          </button>
                          <button
                            type="button"
                            className="list-group-item list-group-item-action rounded-3 border-0 bg-transparent"
                          >
                            Gaming PCs
                          </button>
                          <button
                            type="button"
                            className="list-group-item list-group-item-action rounded-3 border-0 bg-transparent"
                          >
                            All in-One PCs
                          </button>
                          <button
                            type="button"
                            className="list-group-item list-group-item-action rounded-3 border-0 bg-transparent"
                          >
                            Mini PCs
                          </button>
                          <button
                            type="button"
                            className="list-group-item list-group-item-action rounded-3 border-0 bg-transparent"
                          >
                            Barebone PCs
                          </button>
                          <button
                            type="button"
                            className="list-group-item list-group-item-action rounded-3 border-0 bg-transparent"
                          >
                            Home Theater PCs (HTPCs)
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col mb-2">
                  <h6>Vertiv</h6>
                  <div className="list-group">
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>Static Transfer Switches</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>Swtichgear</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>Switch Board</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>Buway</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action fw-bold bg-transparent border-0"
                    >
                      View all
                    </button>
                  </div>
                </div>
                <div className="col mb-2">
                  <h6>Ubiquiti</h6>
                  <div className="list-group">
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>Switch Flex XG</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>Access Point U6 Long-Range</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>Switch Pro</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>Access Point U6 lite</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action fw-bold bg-transparent border-0"
                    >
                      View all
                    </button>
                  </div>
                </div>
                <div className="col mb-2">
                  <h6>Hewlett Packyard</h6>
                  <div className="list-group">
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>Laptops</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>Printers</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>Monitors</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>Desktops</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action fw-bold bg-transparent border-0"
                    >
                      View all
                    </button>
                  </div>
                </div>
                <div className="col mb-2">
                  <h6>Lenovo</h6>
                  <div className="list-group">
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>PC</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>Print</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>Hp Networking</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>Consumer Desktop</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action fw-bold bg-transparent border-0"
                    >
                      View all
                    </button>
                  </div>
                </div>
                <div className="col mb-2">
                  <h6>Lenovo</h6>
                  <div className="list-group">
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>PC</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>Print</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>Hp Networking</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>Consumer Desktop</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action fw-bold bg-transparent border-0"
                    >
                      View all
                    </button>
                  </div>
                </div>
                <div className="col mb-2">
                  <h6>Lenovo</h6>
                  <div className="list-group">
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>PC</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>Print</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>Hp Networking</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>Consumer Desktop</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action fw-bold bg-transparent border-0"
                    >
                      View all
                    </button>
                  </div>
                </div>
                <div className="col mb-2">
                  <h6>Lenovo</h6>
                  <div className="list-group">
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>PC</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>Print</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>Hp Networking</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action d-flex justify-content-between rounded-3 border-0"
                    >
                      <span>Consumer Desktop</span>
                      <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action fw-bold bg-transparent border-0"
                    >
                      View all
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-25">
                <img
                  src={process.env.PUBLIC_URL + "/images/menu-bg.svg"}
                  className="position-absolute top-0 end-0"
                  style={{ maxWidth: "25%" }}
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubHeader;
