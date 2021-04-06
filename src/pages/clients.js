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

import favicon from "../images/favicon.jpg"


function ClientsPage(props) {

  return (<>
    <Row className="sidebar">
      <Helmet>
        <meta charSet="utf-8" />
        <title>OLTO CONCEPTS: CLIENTS</title>
        <link rel="shortcut icon" type="image/jpg" href={favicon} />
      </Helmet>
      <SmallHeader></SmallHeader>
      <Col sm={9} dismissible variant="danger">
        <div className="main-content d-flex flex-row flex-wrap align-content-center justify-content-center">
          <a href="https://www.who.int/" target="_blank" rel="noopener noreferrer">
            <Logoicon link={who} ></Logoicon>
          </a>
          <a href="https://varfaj.com/" target="_blank" rel="noopener noreferrer">
            <Logoicon link={varfaj}></Logoicon>
          </a>
          <a href="https://happyendings917.com/" target="_blank" rel="noopener noreferrer">
            <Logoicon link={he}></Logoicon>
          </a>
          <a href="https://roughsimmons.jp/" target="_blank" rel="noopener noreferrer">
            <Logoicon link={rough}></Logoicon>
          </a>
          <a href="http://wrbbradio.org/" target="_blank" rel="noopener noreferrer">
            <Logoicon link={wrbb}></Logoicon>
          </a>
          <a href="https://themakegroup.com/" target="_blank" rel="noopener noreferrer">
            <Logoicon link={maker}></Logoicon>
          </a>
          <a href="https://www.aratikreibich.com/" target="_blank" rel="noopener noreferrer">
            <Logoicon link={arati}></Logoicon>
          </a>
        </div>
      </Col>
    </Row>
  </>)
}


export default ClientsPage