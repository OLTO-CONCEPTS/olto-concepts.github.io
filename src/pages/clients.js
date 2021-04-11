import React from "react"
import { Row, Col } from 'react-bootstrap/'
import SmallHeader from "./templates/smallheader"
import { Helmet } from "react-helmet"

import who from "../images/clients/who.png"
import varfaj from "../images/clients/varfaj.png"
import he from "../images/clients/happyendings.png"
import rough from "../images/clients/roughsimmons.png"
import wrbb from "../images/clients/wrbb.png"
import maker from "../images/clients/makegroup.png"
import arati from "../images/clients/arati.png"

import Logoicon from "../components/logo-icon"


function ClientsPage(props) {

  return (<>
    <Row className="sidebar">
      <Helmet>
        <title>OLTO CONCEPTS: Clients</title>
        <meta name="title" content="OLTO CONCEPTS: Clients" />
        <meta name="description" content="A summary of past OLTO CONCEPTS clients." />

        <meta property="og:title" content="OLTO CONCEPTS: Clients" />
        <meta property="og:description" content="A summary of past OLTO CONCEPTS clients." />
        <meta property="twitter:title" content="OLTO CONCEPTS: Clients" />
        <meta property="twitter:description" content="A summary of past OLTO CONCEPTS clients." />
      </Helmet>
      <SmallHeader></SmallHeader>
      <Col sm={9} dismissible variant="danger">
        <div id="need-scroll" className="main-content transition1 d-flex flex-row flex-wrap align-content-center justify-content-center">
          <a href="https://www.who.int/" target="_blank" rel="noopener noreferrer">
            <Logoicon link={who} alt="WHO logo"></Logoicon>
          </a>
          <a href="https://varfaj.com/" target="_blank" rel="noopener noreferrer">
            <Logoicon link={varfaj} alt="Varfaj Partners logo"></Logoicon>
          </a>
          <a href="https://happyendings917.com/" target="_blank" rel="noopener noreferrer">
            <Logoicon link={he} alt="Happyendings917 logo"></Logoicon>
          </a>
          <a href="https://roughsimmons.jp/" target="_blank" rel="noopener noreferrer">
            <Logoicon link={rough} alt="Rough Simmons logo"></Logoicon>
          </a>
          <a href="http://wrbbradio.org/" target="_blank" rel="noopener noreferrer">
            <Logoicon link={wrbb} alt="WRBB 104.9FM logo"></Logoicon>
          </a>
          <a href="https://themakegroup.com/" target="_blank" rel="noopener noreferrer">
            <Logoicon link={maker} alt="The Make Group logo"></Logoicon>
          </a>
          <a href="https://www.aratikreibich.com/" target="_blank" rel="noopener noreferrer">
            <Logoicon link={arati} alt="Arati For Congress logo"></Logoicon>
          </a>
        </div>
      </Col>
    </Row>
  </>)
}


export default ClientsPage