import html from "../../image/html.png";
import css from "../../image/css.png";
import js from "../../image/js.png";
import react from "../../image/react.png";
import nodejs from "../../image/nodejs.png";
import sql from "../../image/sql.png";
import docker from "../../image/docker.png";
import python from "../../image/python.png";
import bootstrap from "../../image/bootstrap.png";
import "./skills.css";

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="text-center">
        <h1>SKILLS</h1>
      </div>

      <div className="skill-logo">
        <div className="">
          <img src={html} alt="html" />
        </div>
        <div className="">
          <img src={css} alt="css" />
        </div>
        <div className="">
          <img src={js} alt="js" />
        </div>
        <div className="">
          <img src={react} alt="react" />
        </div>
        <div className="">
          <img src={nodejs} alt="nodejs" />
        </div>
        <div className="">
          <img src={sql} alt="sql" />
        </div>
        <div className="">
          <img src={docker} alt="docker" />
        </div>
        <div className="">
          <img src={python} alt="python" />
        </div>
        <div className="">
          <img src={bootstrap} alt="bootstrap" />
        </div>
      </div>
    </section>
  );
};