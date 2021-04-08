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
        <meta charSet="utf-8" />
        <title>OLTO CONCEPTS</title>
        <link rel="shortcut icon" type="image/jpg" href={favicon}/>
      </Helmet>
      <SmallHeader></SmallHeader>
      <Col sm={9} dismissible variant="danger">
        <div className="d-flex flex-column my-auto main-content">
            <PortfolioSlider></PortfolioSlider>
        </div>
      </Col>
    </Row>
  </>
  )
}

export default PortfolioPage
