/* eslint-disable jsx-a11y/alt-text */
//import "react-bootstrapt";
//import "./css/bootstrapt.main.css";
import React from "react";

function Skills() {
  return (
    <section id="skill">
      <div className="sep">
        <h2 className="section-heading text-uppercase">Skill</h2>
        <br />
        <br />
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174854.png"
          className="image-hover img-shadow-1"
          // eslint-disable-next-line react/style-prop-object
          style={{ marginRight: "50px" }}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
          className="image-hover img-shadow-1"
        />
        <img
          src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
          className="image-hover img-shadow-1"
        />
        <img
          src="https://raw.githubusercontent.com/themedotid/bootstrap-icon/HEAD/docs/bootstrap-icon-css.png"
          className="image-hover img-shadow-1"
        />
      </div>
    </section>
  );
}

export default Skills;
