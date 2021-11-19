import React from "react";

import { ImGithub, ImLinkedin2, ImCodepen } from "react-icons/im";

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
              <i />
              <ImCodepen />
            </a>
            <a
              className="btn btn-dark btn-social mx-2"
              href="https://github.com/zhino97"
            >
              <i />
              <ImGithub />
            </a>
            <a className="btn btn-dark btn-social mx-2" href="#!">
              <i />
              <ImLinkedin2 />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
