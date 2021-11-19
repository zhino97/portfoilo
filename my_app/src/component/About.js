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
                  className=" img-fluid2"
                  src="https://cdn-icons.flaticon.com/png/512/566/premium/566387.png?token=exp=1637356475~hmac=7423a8d5ef2fbe3e96c4173e6b20250f"
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
                  className=" img-fluid2"
                  src="https://cdn-icons.flaticon.com/png/512/5465/premium/5465991.png?token=exp=1637356613~hmac=971d4ac31ff196a2979761afcbea1564"
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
                  className=" img-fluid2"
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
