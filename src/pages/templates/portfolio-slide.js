import React from "react"
import Carousel from 'react-bootstrap/Carousel'

import { Col, Row, Container } from 'react-bootstrap/';

import ex1 from "../../images/screenshots/annie.png"
import ex2 from "../../images/screenshots/happy.png"
import ex3 from "../../images/screenshots/make.png"

function PortfolioSlider(props) {
    return (
        <div>
            <Container className="carousel my-auto mx-auto">
                <Row>
                    <Col id="car-display" lg={10} className="pl-0 pr-2">
                        <Carousel fade indicators={false} className="w-100">
                            <Carousel.Item>
                                <img className="w-100 car-border"
                                    src={ex1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="w-100 car-border"
                                    src={ex2}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="w-100 car-border"
                                    src={ex3}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col id="port-sidebar" lg={2} className="portfolio-panel">
                        fjnsf
                    </Col>
                </Row>
                <Row className="portfolio-panel my-2 text-center">
                    placeholder
                </Row>
            </Container>
        </div>
    )
}

export default PortfolioSlider