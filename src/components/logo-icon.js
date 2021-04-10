import React from "react"
 
import {Image} from 'react-bootstrap/';



function logoicon(props) {
  return (
    <>
   {/* ROW ONE */}
   <div className="client-box d-flex align-items-center justify-content-center m-2"><Image alt={props.alt} src={props.link} fluid></Image></div>   
   </>
  )
}

export default logoicon