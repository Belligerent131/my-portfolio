import React from 'react';
import { Container, CardColumns, Card, Row, Col } from 'react-bootstrap';
import PageHeader from '../page-header/page-header.component';
import {
  JavascriptIcon,
  TypescriptIcon,
  CSharpIcon,
} from '../svg/icon-images.component';
import { Link } from 'react-router-dom';
import './portfolio.styles.scss';

class PortfolioComponent extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <PageHeader title="Portfolio" icon="portfolio" />
        </Container>
        <Container
          fluid
          style={{ marginTop: '20px' }}
          className="portfolio-container"
        >
          <Row>
            <Col
              lg={{ span: 6, offset: 3 }}
              className="d-flex justify-content-center"
            >
              <CardColumns>
                <a href="https://github.com/Belligerent131/Crown-Clothing">
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        <JavascriptIcon />
                      </Card.Title>
                      <Card.Text>
                        <h4>Crown Clothing</h4>
                        <p>
                          A great project that is a E-Commerice website that
                          shows off my knowledge with full-stack work using a
                          ReactJS App. This project demostrates the use of Redux
                          and Async Redux actions, Stripe payment integration,
                          NoSQL, Cloud infrastructure, and so much more!
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </a>
                <a href="https://github.com/Belligerent131/MC-Apollo-API">
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        <TypescriptIcon />
                      </Card.Title>
                      <Card.Text>
                        <h4>Minecraft GraphlQL Middleware Server</h4>
                        <p>
                          This is a two three product. The first parth which is
                          this product, handles a Postgress ORM and GraphQL
                          calls that accepts Queries, Mutations, and
                          Subscriptions between a React App and Minecraft
                          servers. What is unique about this project is that
                          this server leverages NodeJS Child_Processes to
                          controll the actual servers by restarting, stoping,
                          and starting them individually through a react app.
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </a>
                <a href="https://github.com/Belligerent131/Advantage.API">
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        <CSharpIcon />
                      </Card.Title>
                      <Card.Text>
                        <h4>Restful API and Postgres Server</h4>
                        <p>
                          The goal of this project is to server as a reusable
                          (self-made boiler plate) that handles restful API's
                          and is attached to a Postgres Database using MVC
                          capabilities.
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </a>
                <a href="https://github.com/Belligerent131/NgSight">
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        <TypescriptIcon />
                      </Card.Title>
                      <Card.Text>
                        <h4>NGSight | An Awesome Angular Dashboard</h4>
                        <p>
                          This is my first project using Angular. And a rather
                          successful one. This project is very simple but
                          demostrates many key aspects of software development
                          under the hood. Take a look!
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </a>
                <a href="https://github.com/Belligerent131/ghfd5">
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        <TypescriptIcon />
                      </Card.Title>
                      <Card.Text>
                        <h4>Grays Harbor Fire District 5</h4>
                        <p>
                          Grays Harbor Fire District 5, a local fire station
                          asked if I could provide a newer and appealing website
                          for them, that is easy to update and maintain. But to
                          also later on provide inner department tools to assist
                          them with administrative tasks such as roster
                          management and employee digital forms like shift
                          trades. The goal is to move the department into a more
                          digital ecosystem and use less paper in the long run
                          for better organization.
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </CardColumns>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PortfolioComponent;
