import React from "react"
import { Row, Col, Alert, Container } from 'react-bootstrap/'
import { Helmet } from "react-helmet"
import SmallHeader from "./templates/smallheader"

import frontBack from "../images/backandforthcolor.gif"

import favicon from "../images/favicon.jpg"

function AboutPage(props) {
  return (
  <Row id="iosHeight" className="sidebar about-back">
      <Helmet>
        <title>OLTO CONCEPTS: About</title>
        <meta name="title" content="OLTO CONCEPTS: About" />
        <meta name="description" content="About the freelance creative partnership OLTO CONCEPTS." />

        <meta property="og:title" content="OLTO CONCEPTS: About" />
        <meta property="og:description" content="About the freelance creative partnership OLTO CONCEPTS." />
        <meta property="twitter:title" content="OLTO CONCEPTS: Portfolio" />
        <meta property="twitter:description" content="About the freelance creative partnership OLTO CONCEPTS." />
      </Helmet>
    <SmallHeader></SmallHeader>

    <Col sm={9} dismissible variant="danger">
      <div>
        <div class="main-content about-grey text-justify d-flex flex-column" >
          <div class="my-auto">
            <div class="face-imgs">
              <img class="mx-auto p-2" src={frontBack} alt="Morphing image of Oliver Buckley and Tomás Carlson."></img>
            </div>
            <div className="p-4 about-box text-white mx-auto my-auto content-box">
              <h1 className="logo">OLTO CONCEPTS</h1>
              <p>is a creative partnership between <a className="link text-white" target="_blank" rel="noopener noreferrer" href="https://blucksy.com/">Oliver Buckley</a> and <a className="link text-white" target="_blank" rel="noopener noreferrer" href="https://tomascarlson.com/">Tomás Carlson</a>, working with brands and artists alike to provide creative tech solutions for every clients specific needs and aesthetics.</p>
            </div>
          </div>
        </div>
      </div>
    </Col>

  </Row>)
}


export default AboutPage