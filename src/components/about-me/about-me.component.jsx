import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./about-me.styles.scss";
import AboutSlider from '../../components/about-me/carousel.component';
import QandA from './q-and-a.component';
import PageHeader from '../page-header/page-header.component';



class HomepageComponent extends React.Component {

  render() {
    return (
      <Container>
        <PageHeader title="About Me" icon='user' />
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

              <QandA question="Name" answer="Bradley Bentow" />
              <QandA question="Age" answer={(new Date().getFullYear() - 1991) + " years old"} />
              <QandA question="Residence" answer="Montesano, WA" />
              <QandA question="Email" answer="bentow131@gmail.com" />
              <QandA question="Phone" answer="+1 (360) 584-0037" />

              <div className="btn-retainer">
                <Button varient="primary" href="./stash/Bradley_Bentow_Resume.pdf" download className="download-btn">Download Resume</Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 5, offset: 3 }} className="language-badge"><h2>Knowledge</h2></Col>
        </Row>
        <AboutSlider />
      </Container>
    )
  }
};

export default HomepageComponent;
