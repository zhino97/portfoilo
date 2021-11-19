
import React from "react";

function Project() {
  return (
    <section className="page-section bg-light" id="portfolio">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Project</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a
                className="portfolio-link"
                data-bs-toggle="modal"
                href="#portfolioModal1"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="..."
                />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Project_1</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a
                className="portfolio-link"
                data-bs-toggle="modal"
                href="#portfolioModal2"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="https://images.pexels.com/photos/1910225/pexels-photo-1910225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="..."
                />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Project_2</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a
                className="portfolio-link"
                data-bs-toggle="modal"
                href="#portfolioModal3"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src={
                    "https://images.pexels.com/photos/6063622/pexels-photo-6063622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  }
                  alt="..."
                />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Project_3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
