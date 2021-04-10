import React from "react"
import Carousel from 'react-bootstrap/Carousel'

import SlideItem from './slide-item';

import ex1 from "../../images/screenshots/annie.png"
import ex2 from "../../images/screenshots/happy.png"
import ex3 from "../../images/screenshots/make.png"

function PortfolioSlider(props) {

    return (
        <div>
            <Carousel fade indicators={false} className="w-100">
                <Carousel.Item>
                    <SlideItem
                        src={ex1}
                        alt="Annie's Tommorrow Project website screenshot"
                        title="Annie's Tomorrow Project"
                        desc="Website creation, brand identity"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <SlideItem
                        src={ex2}
                        alt="Happyendings917 screenshot"
                        title="Happyendings917"
                        desc="Website creation, ecommerce setup, SEO"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <SlideItem
                        src={ex3}
                        alt="Make Group website screenshot"
                        title="The Make Group"
                        desc="Wordpress style cleanup, web optimization"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default PortfolioSlider