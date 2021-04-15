import React from "react"
import Carousel from 'react-bootstrap/Carousel'

import SlideItem from './slide-item';

import ex1 from "../../images/screenshots/annie.png"
import ex2 from "../../images/screenshots/happy.png"
import ex3 from "../../images/screenshots/make.png"

function PortfolioSlider(props) {

    return (
        <div>
            <Carousel fade indicators={false} className="w-100 transition1">
                <Carousel.Item>
                    <SlideItem
                        mission={props.mission}
                        src={ex1}
                        alt="Annie's Tommorrow Project website screenshot"
                        title="Annie's Tomorrow Project"
                        desc="Developed a webfront for the Annie IP holding group, Annie's Tomorrow Project, a hub for the organization's philanthropic and general Annie content."
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <SlideItem
                        mission={props.mission}
                        src={ex2}
                        alt="Happyendings917 screenshot"
                        title="Happyendings917"
                        desc="Developed a web store for the fashion collective Happyendings917 to showcase pieces from their archive as well as upcoming artistic ventures from the team."
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <SlideItem
                        mission={props.mission}
                        src={ex3}
                        alt="Make Group website screenshot"
                        title="The Make Group"
                        desc="Reoptimization and cleanup of The Make Group's Wordpress website, to be used as a portfolio of their past clients."
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default PortfolioSlider