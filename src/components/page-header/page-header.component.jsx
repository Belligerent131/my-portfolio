import React from 'react';
import { Row, Col } from "react-bootstrap";
import { FaRegUser, FaRegNewspaper } from "react-icons/fa";
import { IconContext } from "react-icons";
import {GoGithubAction, GoMail} from 'react-icons/go';
import './page-header.styles.scss';

const headerIcons = {
    className: "header-icons",
    size: "2.8em",
    color: "#a50810",
  };

const setIcon = (icon) => {
    switch(icon) {
        case 'user':
        default:
            return <FaRegUser />;
        case 'resume':
            return <FaRegNewspaper />
        case 'portfolio':
            return <GoGithubAction />
        case 'contact':
            return <GoMail />
    }
}

const PageHeader = ({title, icon}, ...otherProps) => {

    return(
        <Row className="header-container d-flex justify-content-center">
            <IconContext.Provider value={headerIcons}>
                <Col lg={true} md={true} sm={true} xs={true} className="header">
                    <span className="title">
                        <h1>{title}.</h1>
                    </span>
                </Col>
                <Col lg={true} md={true} sm={true} xs={true} className="header">
                    <span className="icon">
                        {setIcon(icon)}
                    </span>
                </Col>
            </IconContext.Provider>
        </Row>
    )
};

export default PageHeader;