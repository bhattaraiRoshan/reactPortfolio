
import "./about.css";
import { Container, Row, Col } from "react-bootstrap";
import roshan from "../../image/roshan.png";

export const About = () => {
  return (
    <section id="about">
      <h1 className="text-center">About Me</h1>
      <Container>
        <Row className="p-5">
          <Col className="about-me-img" md="6">
            <img
              src={roshan}
              alt="roshan"
              className="text-center mb-5 roshan "
              //   width="80%"
            />
          </Col>
          <Col md="6" className=" container describe">
            <div className="mt-5">
              Exceptionally focused and motivated Programmer individual seeking
              position in dynamic and growth-oriented company, focused on
              cultivating exceptional customer experience and a positive work
              environment. I have experience making frontend using the HTML,
              CSS, JS, React, Next. Backend using NodeJs and using database
              Firebase, MySQL, Mongdb. <br />I don’t like to define myself by
              the work I’ve done. I define myself by the work I want to do.🏋️
              Skills can be taught, personality is inherent. I prefer to keep
              learning,📗 continue challenging myself, and do interesting things
              that matter.
            </div>
            <br />
            <div>
              I’ve found this process to be extremely rewarding and applying my
              strong attention to detail and results-driven mindset has been
              complimentary to the process. After several months of intense
              learning and creating my own projects, I’ve decided to make the
              leap from education into IT, specifically web development, I am
              thrilled to take this next step!
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};