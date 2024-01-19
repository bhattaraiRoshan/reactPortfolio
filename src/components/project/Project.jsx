
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import project1 from "../../image/project1.png";
import project2 from "../../image/project2.png";
import project3 from "../../image/project3.png";
import project4 from "../../image/project4.png";
import "./project.css";

export const Project = () => {
  return (
    <div className="project">
      <section id="projects" className="project-section  pb-5 ">
        <Container>
          <h1 className="text-center heading">PROJECTS</h1>
          {/* project 1 movie */} {/* project 1 movie */}{" "}
          {/* project 1 movie */} {/* project 1 movie */}{" "}
          {/* project 1 movie */}

          <Row>
          <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={project1} />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
            </Card.Text>
            <Button variant="danger">Go somewhere</Button>
            </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={project1} />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
            </Card.Text>
            <Button variant="danger">Go somewhere</Button>
            </Card.Body>
            </Card>
          </Col>
          <Col>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={project1} />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
            </Card.Text>
            <Button variant="danger">Go somewhere</Button>
            </Card.Body>
            </Card>
          
          </Col>

            
          


          </Row>


        </Container>
      </section>
    </div>
  );
};