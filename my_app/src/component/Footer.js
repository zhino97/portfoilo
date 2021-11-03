//import "./css/bootstrapt.main.css";
import React from "react";

function Footer() {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 text-lg-start">&copy; 2021</div>
          <div className="col-lg-4 my-3 my-lg-0">
            <a
              className="btn btn-dark btn-social mx-2"
              href="https://codepen.io/your-work"
            >
              <i className="fab fa-codepen" />
            </a>
            <a
              className="btn btn-dark btn-social mx-2"
              href="https://github.com/zhino97"
            >
              <i className="fab fa-github" />
            </a>
            <a className="btn btn-dark btn-social mx-2" href="#!">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
