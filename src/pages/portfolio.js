import React from "react"
import Carousel from 'react-bootstrap/Carousel'

import SmallHeader from "./templates/smallheader"
import { Helmet } from "react-helmet"

import { Col, Row} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.css';

import ex1 from "../images/screenshots/1.png"
import ex2 from "../images/screenshots/2.png"
import ex3 from "../images/screenshots/3.jpg"

import favicon from "../images/favicon.jpg"

// markup
function PortfolioPage(props) {
  return (<>
    {/* ROW ONE */}
    <Row className="sidebar">
      <Helmet>
        <meta charSet="utf-8" />
        <title>OLTO CONCEPTS</title>
        <link rel="shortcut icon" type="image/jpg" href={favicon}/>
      </Helmet>
      <SmallHeader></SmallHeader>
      <Col sm={9} dismissible variant="danger">
        <div className="d-flex flex-column my-auto">
            <Carousel fade className="carousel mx-auto">
              <Carousel.Item>
                <img className="d-block w-100 car-border"
                  src={ex1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 car-border"
                  src={ex2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 car-border"
                  src={ex3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
        </div>
      </Col>
    </Row>
  </>
  )
}

export default PortfolioPage
