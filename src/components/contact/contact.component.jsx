import React from 'react';
import PageHeader from '../page-header/page-header.component';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPaperPlane, FaPhone } from 'react-icons/fa';
import { IoIosPin } from 'react-icons/io';
import { IconContext } from 'react-icons';
import './contact.styles.scss';

const footerIcons = {
    className: "footer-icons",
    size: "3.5em",
    fill: 'red'
}

class ContactComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <Container>
                <PageHeader title="Contact Me" icon="contact" />
                <Row className="d-flex justify-content-center section-title">
                    <h2 style={{ textAlign: 'center' }}>Lets Talk</h2>
                </Row>
                <Row className="contact-form-wrapper">
                    <Container>
                        <Form className="contact-form">
                            <Row className="d-flex justify-content-center">
                                <Form.Group as={Col} lg={4} className="input-text">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control required placeholder="Name" onChange={this.handleChange} />
                                </Form.Group>
                                <Form.Group as={Col} lg={4} className="input-text">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control required type="email" placeholder="Email Address" onChange={this.handleChange} />
                                </Form.Group>
                            </Row>
                            <Row className="d-flex justify-content-center">
                                <Form.Group as={Col} lg={8}>
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control required as="textarea" rows="5" placeholder="Your message..." className="textarea-message" />
                                </Form.Group>
                            </Row>
                            <Row className="d-flex justify-content-center">
                                <Form.Group as={Col} lg={8} className="d-flex justify-content-center">
                                    <Button className="send-message-btn" type="submit">Send Message</Button>
                                </Form.Group>
                            </Row>
                        </Form>
                    </Container>
                    <Row className="d-flex justify-content-between additions-container">
                        <IconContext.Provider value={footerIcons}>
                            <div className="add-item">
                                <div><FaPaperPlane /></div>
                                <span>bentow131@gmail.com</span>
                            </div>
                            <div className="add-item">
                                <div><IoIosPin /></div>
                                <span>822 E Pioneer Ave. #311<br />Montesano, WA 98563</span>
                            </div>
                            <div className="add-item">
                                <div><FaPhone /></div>
                                <span>
                                    +1 (360) 584-0037
                            </span>
                            </div>
                        </IconContext.Provider>
                    </Row>
                </Row>
            </Container>
        )
    }
}

export default ContactComponent;