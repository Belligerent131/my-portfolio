import React from "react";
import { Row, Col } from "react-bootstrap";

const InfoBlock = ({ name, start, end, city, state, country, children }, ...otherProps) => (
  <Row>
    <div className="item">
      <div className="start">{start}</div>
      <span className="company-name">{name}</span>
      <span className="company-location">{city}, {state}, {country}</span>
      <span className="company-description">
       {children}
      </span>
      <div className="stop">{end}</div>
    </div>
  </Row>
);

export default InfoBlock;
