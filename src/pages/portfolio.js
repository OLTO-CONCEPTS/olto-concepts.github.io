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
    <Helmet
        title="OLTO CONCEPTS"
        meta={[
          { name: 'description', content: "OLTO CONCEPTS work portfolio." },
          { name: 'keywords', content: 'web development, design' },
        ]}
        link={[
          { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
        ]}
      />
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
