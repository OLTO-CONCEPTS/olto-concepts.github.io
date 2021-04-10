import React from "react"

import SmallHeader from "./templates/smallheader"
import PortfolioSlider from "./templates/portfolio-slide"
import { Helmet } from "react-helmet"

import { Col, Row} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.css';

import favicon from "../images/favicon.jpg"

// markup
function PortfolioPage(props) {
  return (<>
    {/* ROW ONE */}
    <Row id="iosHeight" className="sidebar">
      <Helmet>
        <title>OLTO CONCEPTS: Portfolio</title>
        <meta name="title" content="OLTO CONCEPTS: Portfolio" />
        <meta name="description" content="A portfolio overview of past OLTO CONCEPTS work." />

        <meta property="og:title" content="OLTO CONCEPTS: Portfolio" />
        <meta property="og:description" content="A portfolio overview of past OLTO CONCEPTS work." />
        <meta property="twitter:title" content="OLTO CONCEPTS: Portfolio" />
        <meta property="twitter:description" content="A portfolio overview of past OLTO CONCEPTS work." />
      </Helmet>
      <SmallHeader></SmallHeader>
      <Col sm={9} dismissible variant="danger">
        <div className="d-flex flex-column my-auto main-content">
        <div className="my-auto"><PortfolioSlider></PortfolioSlider></div>     
        </div>
      </Col>
    </Row>
  </>
  )
}

export default PortfolioPage
