import React from 'react';
import PageHeader from '../page-header/page-header.component';
import './resume.styles.scss';
import { Container, Col, Row } from 'react-bootstrap';
import InfoBlock from './info-block.component';

class ResumeComponent extends React.Component {
  render() {
    return (
      <Container>
        <PageHeader title="Resume" icon="resume" />
        <Container fluid style={{ padding: '0' }}>
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
        <Container className="experiences" fluid style={{ padding: '0' }}>
          <Row>
            {/*Start Experience*/}
            <Col
              lg={{ span: 5, offset: 1 }}
              className="d-flex justify-content-start"
            >
              <Container>
                <InfoBlock
                  name="Lanfest National"
                  start="June, 2020"
                  end="Present"
                  city="Olympia"
                  state="WA"
                  country="USA"
                >
                  • Volunteer Service directed towards Gamers for charitable
                  causes
                  <br /> • Organize and direct the team for website development
                  <br />• Assist with implementing new content mainly using PHP,
                  JS, and HTML
                  <br /> • Liaison for events as a National Representative, and
                  assist with technical aspects
                </InfoBlock>
                <InfoBlock
                  name="Capital Business Machines, Inc"
                  start="Oct, 2019"
                  end="Present"
                  city="Olympia"
                  state="WA"
                  country="USA"
                >
                  • Reassemble machines after making repairs or replacing parts.
                  <br />• Travel to customers' stores or offices to service
                  machines or to provide emergency repair service.
                  <br />• Install and configure new equipment, including
                  operating software or peripheral equipment.
                  <br />• Reinstall software programs or adjust settings on
                  existing software to fix machine malfunctions.
                </InfoBlock>
                <InfoBlock
                  name="Corrections Officer at Washington State Dept. of Corrections"
                  start="July, 2013"
                  end="Sept, 2019"
                  city="Aberdeen"
                  state="WA"
                  country="USA"
                >
                  • Assisted with recruitment and training of new employees,
                  while also monitoring the safety of current employees.
                  <br />
                  <br />• Use weapons, handcuffs, and physical force to maintain
                  discipline and order among prisoners.
                  <br />• Conduct fire, safety, and sanitation inspections.
                  <br />• Monitor conduct of prisoners in housing unit, or
                  during work or recreational activities, according to
                  established policies, regulations, and procedures, to prevent
                  escape or violence.
                  <br />• Settle disputes between inmates.
                </InfoBlock>
                <InfoBlock
                  name="Westport Shipyard LLC"
                  start="March, 2012"
                  end="May, 2013"
                  city="Westport"
                  state="WA"
                  country="USA"
                >
                  • Install equipment and accessories such as stereos,
                  navigation equipment, communication equipment, and security
                  systems.
                  <br />• Installed in-wall and ceiling speakers for a great
                  surround-sound experience.
                  <br />• Maintained systems and provided trouble-shooting
                  services when needed
                </InfoBlock>
              </Container>
            </Col>
            {/*Start Education*/}
            <Col
              lg={{ span: 5, offset: 1 }}
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
