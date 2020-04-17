import React from "react";
import PageHeader from "../page-header/page-header.component";
import "./resume.styles.scss";
import { Container, Col, Row } from "react-bootstrap";
import InfoBlock from "./info-block.component";

class ResumeComponent extends React.Component {
  render() {
    return (
      <Container>
        <PageHeader title="Resume" icon="resume" />
        <Container>
          <Row className="resume-container">
            <Col lg={6} className="d-flex justify-content-center">
              <Row>
                <h4>Experiences</h4>
              </Row>
            </Col>
            <Col lg={5} className="d-flex justify-content-center">
              <Row>
                <h4>Education</h4>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container className="experiences">
          <Row>
              {/*Start Experience*/}
            <Col
              lg={{ span: 4, offset: 1 }}
              className="d-flex justify-content-start"
            >
              <Container>
                <InfoBlock
                  name="Capital Business Machines, Inc"
                  start="Oct, 2019"
                  end="Present"
                  city="Olympia"
                  state="WA"
                  country="USA"
                >
                  Sit cupiditate praesentium ex esse nulla Facere fuga
                  perspiciatis eveniet provident neque Ea ratione non minus
                  temporibus ipsum Sunt minima
                </InfoBlock>
                <InfoBlock
                  name="Stafford Creek Corrections Center"
                  start="July, 2013"
                  end="Sept, 2019"
                  city="Aberdeen"
                  state="WA"
                  country="USA"
                >
                  Sit cupiditate praesentium ex esse nulla Facere fuga
                  perspiciatis eveniet provident neque Ea ratione non minus
                  temporibus ipsum Sunt minima
                </InfoBlock>
              </Container>
            </Col>
            {/*Start Education*/}
            <Col
              lg={{ span: 4, offset: 2 }}
              className="d-flex justify-content-start"
            >
              <Container>
                <InfoBlock
                  name="Liberty University"
                  start="Sept, 2019"
                  end="Present"
                  city="Lynchburg"
                  state="VA"
                  country="USA"
                >
                  Sit cupiditate praesentium ex esse nulla Facere fuga
                  perspiciatis eveniet provident neque Ea ratione non minus
                  temporibus ipsum Sunt minima
                </InfoBlock>
                <InfoBlock
                  name="Grays Harbor Community College"
                  start="Jan, 2017"
                  end="June, 2019"
                  city="Aberdeen"
                  state="WA"
                  country="USA"
                >
                  Sit cupiditate praesentium ex esse nulla Facere fuga
                  perspiciatis eveniet provident neque Ea ratione non minus
                  temporibus ipsum Sunt minima
                </InfoBlock>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default ResumeComponent;
