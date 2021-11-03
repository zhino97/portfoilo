//import "react-bootstrapt";
//import "./css/bootstrapt.main.css";

import React from "react";

function About() {
  return (
    <>
      <section classNameName="page-section" id="about">
        <div classNameName="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">Hi,I'm Zhino.</h3>
          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid2"
                  src="https://cdn-icons.flaticon.com/png/512/566/premium/566387.png?token=exp=1635108156~hmac=beb042c3b918e781f75337c2bf8e48b9"
                  alt="..."
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2016-2020</h4>
                  <h4 className="subheading">Certificate</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    I graduated Computer Science at University Of Human
                    Development
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid2"
                  src="https://cdn-icons.flaticon.com/png/512/5465/premium/5465982.png?token=exp=1635108258~hmac=f4439b19a6b471eac58cc9b45b6fb3a6"
                  alt="..."
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2019</h4>
                  <h4 className="subheading">Practical Training</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    - Tishknet(Halabja Group) <br />- Human Resource Managment &
                    Economy of Business and Evaluation
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid2"
                  src="https://cdn-icons-png.flaticon.com/512/2726/2726537.png"
                  alt="..."
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2020-2021</h4>
                  <h4 className="subheading">Work Experience</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    I worked at National Institute Of Technology
                  </p>
                </div>
              </div>
            </li>

            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>
                  Part
                  <br />
                  Of My
                  <br />
                  Story!
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default About;
