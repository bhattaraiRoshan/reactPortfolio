

import "./header.css";
import roshan from "../../image/roshan.png";
import { Contact } from "./Contact";
import { Social } from "./Social";

export const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Roshan Bhattarai</h1>
        <Contact />
        <Social />
        <div className="me">
          <img src={roshan} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};