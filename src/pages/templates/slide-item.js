import React from "react"

import { Col, Row, Container } from 'react-bootstrap/';

function SlideItem(props) {
  return (
    <>
      {/* ROW ONE */}
      <Container className="carousel my-auto mx-auto">
        <Row>
          <Col id="car-display" className="px-0">
            <img className="w-100 car-border"
              src={props.src}
              alt={props.alt}
            />
          </Col>
        </Row>
        <Row className="portfolio-panel my-2 text-center">
          <Col lg={5} className="my-auto">
            <h3 className="mb-0 portfolio-title">{props.title}</h3>
          </Col>
          <Col lg={7} className="my-auto">
            <p className="mb-0">{props.desc}</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default SlideItem