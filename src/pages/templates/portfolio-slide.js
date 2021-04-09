import React from "react"
import Carousel from 'react-bootstrap/Carousel'

import { Col, Row, Container } from 'react-bootstrap/';

import ex1 from "../../images/screenshots/annie.png"
import ex2 from "../../images/screenshots/happy.png"
import ex3 from "../../images/screenshots/make.png"

function PortfolioSlider(props) {

    return (
        <div>
            <Carousel fade indicators={false} className="w-100">
                <Carousel.Item>
                    <Container className="carousel my-auto mx-auto">
                        <Row>
                            <Col id="car-display" className="px-0">
                                <img className="w-100 car-border"
                                    src={ex1}
                                    alt="First slide"
                                />
                            </Col>
                        </Row>
                        <Row className="portfolio-panel my-2 text-center">
                            <Col lg={6} className="my-auto">
                                <h3 className="mb-0 py-2  portfolio-title">Annie's Tomorrow Project</h3>
                            </Col>
                            <Col lg={6} className="my-auto">
                                <p className="mb-0">Website creation, brand identity</p>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container className="carousel my-auto mx-auto">
                        <Row>
                            <Col id="car-display" className="px-0">
                                <img className="w-100 car-border"
                                    src={ex2}
                                    alt="Second slide"
                                />
                            </Col>
                        </Row>
                        <Row className="portfolio-panel my-2 text-center">
                            <Col lg={6} className="my-auto">
                                <h3 className="mb-0 py-2  portfolio-title">Happyendings917</h3>
                            </Col>
                            <Col lg={6} className="my-auto">
                                <p className="mb-0">Website creation, ecommerce setup, SEO</p>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container className="carousel my-auto mx-auto">
                        <Row>
                            <Col id="car-display" className="px-0">
                                <img className="w-100 car-border"
                                    src={ex3}
                                    alt="Third slide"
                                />
                            </Col>
                        </Row>
                        <Row className="portfolio-panel my-2 text-center ">
                            <Col lg={6} className="my-auto">
                                <h3 className="mb-0 py-2 portfolio-title">The Make Group</h3>
                            </Col>
                            <Col lg={6} className="my-auto">
                                <p className="mb-0">Wordpress style cleanup, web optimization</p>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
            </Carousel>



        </div>
    )
}

export default PortfolioSlider