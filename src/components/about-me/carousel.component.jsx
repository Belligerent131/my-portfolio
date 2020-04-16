import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Row, Col } from "react-bootstrap";
import { CSharpIcon, PgSqlIcon, JavascriptIcon, PythonIcon, ReactIcon, DjangoIcon, FirebaseIcon,
    BootstrapIcon, ReduxIcon, CppIcon, AzureIcon } from '../svg/icon-images.component';




class AboutSlider extends React.Component {

    render() {

        var settings = {
            dots: false,
            infinite: true,
            accessibility: true,
            arrows: false,
            speed: 5500,
            autoplay: true,
            autoplaySpeed: 2500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (


            <Slider {...settings}>

                 <div>
                    <Row className="language-section">
                        <Col>
                            <Row className="language-item">
                                <Col>
                                    <CSharpIcon />
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row className="language-item">
                                <Col>
                                    <PythonIcon />
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row className="language-item">
                                <Col>
                                    <PgSqlIcon />
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row className="language-item">
                                <Col>
                                    <JavascriptIcon />
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </div>
                <div>
                    <Row className="language-section">
                        <Col>
                            <Row className="language-item">
                                <Col>
                                    <AzureIcon />
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row className="language-item">
                                <Col>
                                    <ReactIcon />
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row className="language-item">
                                <Col>
                                    <ReduxIcon />
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row className="language-item">
                                <Col>
                                    <DjangoIcon />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row className="language-section">
                        <Col>
                            <Row className="language-item">
                                <Col>
                                    <BootstrapIcon />
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row className="language-item">
                                <Col>
                                    <FirebaseIcon />
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row className="language-item">
                                <Col>
                                    <CppIcon />
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row className="language-item">
                                <Col>
                                    <DjangoIcon />
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </div>
            </Slider>
        );
    }
}

export default AboutSlider;