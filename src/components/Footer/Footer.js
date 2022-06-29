import React from "react";
import {FaFacebook} from "react-icons/fa";
import {RiInstagramFill} from "react-icons/ri";
import "./Footer.css";

function Footer(){
return(
    <div className="footer-content">
        <div className="information">
        Tel:123 456 789 <br />
        C\ antonio berendi lefi <br/>
        nº 12 calle 19
        </div>
        <div className="social-media">
        <a href="https://auroravega.com/bayti-cafe-un-restaurante-en-palmanova-de-visita-obligada/"><FaFacebook/></a>
        <a href="https://www.instagram.com/bayticafe/?hl=es"><RiInstagramFill /></a>
        </div>
    </div>
);
}

export default Footer;