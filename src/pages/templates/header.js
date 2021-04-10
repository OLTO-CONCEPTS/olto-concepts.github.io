import React from "react"

import { Col, Row, Container, Modal } from 'react-bootstrap/';
import { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import { Helmet } from "react-helmet"


import AniLink from "gatsby-plugin-transition-link/AniLink"

import hqicon from "../../images/hqlogo.jpg"
import favicon from "../../images/favicon.jpg"


function Header(props) {

  const [state, handleSubmit] = useForm("mvodogzk");


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* ROW ONE */}


      <Col sm={3} id="iosHeight" dismissible variant="danger" className="sidebar-content big-header w-10">

        <Helmet>
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://oltoconcepts.com/" />
          <meta property="og:image" content={hqicon} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://oltoconcepts.com/" />
          <meta property="twitter:image" content={hqicon} />
          <link rel="shortcut icon" type="image/jpg" href={favicon}/>
          <script type="application/ld+json">
            {
              `{
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "http://www.oltoconcepts.com",
              "logo": "https://oltoconcepts.com/static/hqlogo-b48d379513a459dce58e7bdaf5c3c877.jpg",
              "name": "OLTO CONCEPTS"
            }`
            }
          </script>
        </Helmet>

        <Container>
          <br></br>
          <h1><AniLink fade to="/" className="logo-redirect"><div className="logo slatt">OLTO CONCEPTS</div></AniLink></h1>
          <br></br>

          <h3><AniLink fade to="/clients" className="text-white text-decoration-none"><div className="slatt">CLIENTS</div></AniLink></h3>
          <h3><AniLink fade to="/portfolio" className="text-white text-decoration-none"><div className="slatt">PORTFOLIO</div></AniLink></h3>
          <h3><AniLink fade to="/about" className="text-white text-decoration-none"><div className="slatt">ABOUT</div></AniLink></h3>
          <h3><a className="text-white text-decoration-none"><div className="slatt" onClick={handleShow}>CONTACT</div></a></h3>



          <div className="fixed-bottom">
            <p id="bottom-text" className="text-white">© OLTO CONCEPTS, 2021</p>
          </div>

          <>

            <Container>

              <Modal className="contact_form" show={show} onHide={handleClose} animation={false}  >
                <Container className="formModal">
                  <form onSubmit={handleSubmit} >

                    <h3 className="text-white py-2">CONTACT US</h3>


                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />



                    <Row>
                      <br></br>
                      <br></br>
                      <Container>

                        <br></br>

                        <textarea className="w-100"
                          id="message"
                          name="message"
                          placeholder="Message"
                        >


                        </textarea>
                        <ValidationError
                          prefix="Message"
                          field="message"
                          errors={state.errors}
                          className="Content-Form"
                        />
                      </Container>

                    </Row>


                    <div onClick={handleClose} type="submit" disabled={state.submitting} className="logo-redirect logo slatt">
                      <h3 className="submit-button">
                        SUBMIT</h3></div>


                  </form>

                </Container>
              </Modal>
            </Container>

          </>


        </Container>

      </Col>

    </>
  )
}
export default Header