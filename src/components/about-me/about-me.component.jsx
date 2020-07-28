import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './about-me.styles.scss';
import AboutSlider from '../../components/about-me/carousel.component';
import QandA from './q-and-a.component';
import PageHeader from '../page-header/page-header.component';

class HomepageComponent extends React.Component {
  render() {
    return (
      <Container>
        <PageHeader title="About Me" icon="user" />
        <Row className="article-info">
          <Col lg={8} style={{ padding: '0' }}>
            <span className="article-title">
              <h3>Software Developer Student</h3>
            </span>
            <p>
              <b>1. Why did you want to work in software development?</b>
              <br />
              I started delving into programming when I was around the age of
              14. I never really thought I would point my career path into the
              the direction of software development. However, after working
              Corrections for six years I kept finding myself working on
              projects and helping friends. I quickly found that I had more
              passion in the field of development than law enforcement.
              <br />
              <br />
              <b>
                2. What skills do you think are important for a Junior Software
                Developer?
              </b>
              <br />
              In my belief, traits such as adaptability, perseverance,
              communications, and self-management are all crucial traits for
              successful developers. For one to be adaptable with differnt
              project requirements and needs of specific tasks; the evolution of
              software development is constently evolving, with that, those need
              to ensure to adapt to new technologies as they become available to
              the industry. Followed with having the perseverance to work
              through frustration and overcome obstacles to see projects to the
              end. Communication is a must for any standard work place. However,
              communication for teams of developers is unique, because of the
              technical cross-communication between supervisors, co-workers, and
              customers take differnt shapes to mold with projects. And one of
              the most important traits would be self-management; for developers
              are not supervised 24/7, have the self control to make the right
              decisions and follow the given process so that it doesn't hurt the
              team and project in the long term.
              <br />
              <br />
              <b>3. What programming languages are you most familiar with?</b>
              <br />I have a very well rounded understanding of Object Oriented
              Proamming and Markdown languages. However, I posses fluency in
              Typescript, Javascript, C#, and Java. Also, formarkdown languages,
              I have extensive experience working with HTML5, XHTML, Razor, and
              XML; followed with CSS, SCSS, and GraphQL expertise. For
              frameworks, I enjoy working with many differnt enviroments such as
              ReactJS, AngularJS, and those are just some examples.
              <br />
              <br />
              <b>
                4. What part of software development do you think is the most
                difficult?
              </b>
              The difficult part of software development is communication:
              between you and your team members, business partners, customers,
              and other stakeholders. It has the biggest impact on the final
              output. These will take the form of written and oral requirements,
              best practice communication, etc.
              <br />
              <br />
              <b>5. Explain the GitHub Workflow?</b>
              <br />
              GIT provides three key areas that are uniquely designed, to give
              developers lots of control over workflow: 1.Working directory:
              <br /> It contains all the current states of files. Numerous
              developers can access directory when they are logged in, so
              collaboration is extremely easy.
              <br /> 2.Staging Area: It indexes everything for the next commit
              and any files that have been added or edited since the previous
              save.
              <br /> 3.GIT repository is a dedicated space where new commits are
              added: GIT repository maintains all the metadata, the files, and a
              dedicated database that tracks versions of the project.
            </p>
          </Col>
          <Col>
            <span className="article-personal">
              <h3>Personal Info</h3>
            </span>
            <div className="q-and-a">
              <QandA question="Name" answer="Bradley Bentow" />
              <QandA
                question="Age"
                answer={new Date().getFullYear() - 1991 + ' years old'}
              />
              <QandA question="Residence" answer="Montesano, WA" />
              <QandA question="Email" answer="bentow131@gmail.com" />
              <QandA question="Phone" answer="+1 (360) 584-0037" />

              <div className="btn-retainer">
                <Button
                  varient="primary"
                  href="./stash/Bradley_Bentow_Resume.docx"
                  download
                  className="download-btn"
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 5, offset: 3 }} className="language-badge">
            <h2>Knowledge</h2>
          </Col>
        </Row>
        <AboutSlider />
      </Container>
    );
  }
}

export default HomepageComponent;
