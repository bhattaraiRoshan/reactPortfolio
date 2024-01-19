
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import "./header.css";

export const Social = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/roshan--bhattarai/" rel="noreferrer" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://twitter.com/ROSHAN68220413" rel="noreferrer" target="_blank">
        <BsTwitter />
      </a>
      <a href="https://github.com/rosh021" rel="noreferrer" target="_blank">
        <FaGithubSquare />
      </a>
    </div>
  );
};