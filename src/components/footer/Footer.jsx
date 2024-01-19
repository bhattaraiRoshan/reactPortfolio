import "./footer.css";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
// import white_logo from "../../assets/logoWhitePhary.png";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        {/* <img src={white_logo} /> */}
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://github.com/rosh021" rel="noreferrer" target="_blank">
          <FaGithubSquare />
        </a>
        <a href="https://twitter.com/ROSHAN68220413" rel="noreferrer" target="_blank">
          <BsTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/roshan--bhattarai/"
          rel="noreferrer"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>

      <div className="footer_copyright">
        <h5 className="footer_copyright">
          Make it with Your 😘 &copy; 2024. All rights reserved.
        </h5>
      </div>
    </footer>
  );
};

export default Footer;