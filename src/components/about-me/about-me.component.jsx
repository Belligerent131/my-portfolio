import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaRegUser } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./about-me.styles.scss";

const headerIcons = {
  className: "header-icons",
  size: "2.8em",
  color: "#a50810",
};

const HomepageComponent = () => (
  <Container>
    <Row className="header-container d-flex justify-content-center">
      <IconContext.Provider value={headerIcons}>
        <Col lg={true} md={true} sm={true} xs={true} className="header">
          <span className="title">
            <h1>About Me.</h1>
          </span>
        </Col>
        <Col lg={true} md={true} sm={true} xs={true} className="header">
          <span className="icon">
            <FaRegUser />
          </span>
        </Col>
      </IconContext.Provider>
    </Row>
    <Row className="article-info">
      <Col lg={8} style={{ padding: "0" }}>
        <span className="article-title">
          <h3>Software Developer Student</h3>
        </span>
        <p>
          Dolor reprehenderit aut repudiandae maiores recusandae. Consequatur
          dolor nisi labore commodi ipsa? Excepturi velit laboriosam at
          voluptatibus cupiditate est vel. Dolorem praesentium itaque fugiat
          placeat quas consequatur? Obcaecati natus rerum
        </p>
        <p>
          {" "}
          Consectetur consectetur nesciunt nesciunt blanditiis amet? Quod quis
          unde aliquid excepturi laudantium? Illo architecto aliquam velit illo
          magnam neque perferendis sint Incidunt eius ipsa inventore labore eos
          velit. Minus hic magni reiciendis necessitatibus ex Quidem officia
          deleniti accusamus obcaecati dolores. Porro culpa quibusdam impedit
          porro praesentium excepturi. Alias ab consequatur?
        </p>
      </Col>
      <Col>
        <span className="article-personal">
          <h3>Personal Info</h3>
        </span>
        <div className="q-and-a">
          <div className="retainer">
            <span className="question">Name</span>
            <span className="seperator"> : </span>
            <span className="answer">Bradley "Brad" Bentow</span>
          </div>

          <div className="retainer">
            <span className="question">Age</span>
            <span className="seperator"> : </span>
            <span className="answer">{new Date().getFullYear() - 1991} years old</span>
          </div>

          <div className="retainer">
            <span className="question">Residence</span>
            <span className="seperator"> : </span>
            <span className="answer">Montesano, WA</span>
          </div>

          <div className="retainer">
            <span className="question">Email</span>
            <span className="seperator"> : </span>
            <span className="answer">bentow131@gmail.com</span>
          </div>

          <div className="retainer">
            <span className="question">Phone</span>
            <span className="seperator"> : </span>
            <span className="answer">+1 (360) 584-0037</span>
          </div>
          <div className="btn-retainer">
            <Button varient="primary">Download Resume</Button>  
        </div>
        </div>
      </Col>
    </Row>
    <Row>
    <Col lg={{span: 5, offset: 3}} className="language-badge"><h2>Computer Languages</h2></Col>
    </Row>
    <Row>
        
        <Col>
            test
        </Col>
    </Row>
  </Container>
);

export default HomepageComponent;
