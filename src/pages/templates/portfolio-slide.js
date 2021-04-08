import React from "react"
import Carousel from 'react-bootstrap/Carousel'

import ex1 from "../../images/screenshots/annie.png"
import ex2 from "../../images/screenshots/happy.png"
import ex3 from "../../images/screenshots/make.png"

function PortfolioSlider(props) {
    return (
        <div>
            <Carousel fade className="carousel mx-auto" indicators={false}>
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
            <div className="portfolio-tag px-2 text-center">PAST PROJECTS</div>
        </div>
    )
}

export default PortfolioSlider