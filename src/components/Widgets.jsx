import React from "react";

const Widgets = () => {
  return (
    <div>
      <h2 className="fw-bold px-2 px-md-5 mt-4 mx-2">HOTS WIDGETS</h2>
      <div className="row text-white row-cols-1 row-cols-lg-2 g-3 px-2 px-md-5 mx-0">
        <div className="col">
          <div className="row h-100 mx-0">
            <div className="col-6 ps-0 pe-2">
              <div className="p-2 h-100 p-md-4 h-100 widget-img-1 rounded-5 shadow-sm d-flex flex-column justify-content-between">
                <div>
                  <h3>VEEAM</h3>
                  <p>View all avaibility products</p>
                </div>
                <div>
                <button className="btn btn-primary" type="submit">
                  Explore
                </button>
              </div>
              </div>
            </div>
            <div className="col-6 ps-2 pe-0">
              <div className="p-2 h-100 p-md-4 h-100 widget-img-2 rounded-5 shadow-sm d-flex flex-column justify-content-between">
                <div>
                  <h3>SOLARWINDS</h3>
                  <p>View All Network Management products</p>
                </div>
                <div>

                <button className="btn btn-primary" type="submit">
                  Explore
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="p-2 p-md-4 h-100 widget-img-3 rounded-5 shadow-sm">
            <h3>
              KEYBOARDS AND <br />
              ACCESSORIES
            </h3>
            <p>UPTO 80% Off</p>
            <button className="btn btn-primary" type="submit">
              Explore
            </button>
          </div>
        </div>
        <div className="col">
          <div className="p-2 p-md-4 h-100 widget-img-4 rounded-5 shadow-sm">
            <h3>BENQ</h3>
            <p>Increase Digital Productivity And Workspace</p>
            <button className="btn btn-primary" type="submit">
              Explore
            </button>
          </div>
        </div>
        <div className="col">
          <div className="p-2 p-md-4 h-100 widget-img-5 rounded-5 shadow-sm">
            <h3>BENQ</h3>
            <p>
              Perfect 4K Projectors for Infinite <br /> Entertainment
            </p>
            <button className="btn btn-primary" type="submit">
              Explore
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-4 mx-0">
        <div className="col px-0">
          <div className="p-2 p-md-5 h-100 widget-img-6 shadow-sm">
            <h2 className="text-white mt-3 mb-2">
              Save Upto 65% on BenQ
              <br /> Products
            </h2>
            <button className="btn btn-primary mb-3" type="submit">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
