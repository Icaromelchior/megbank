import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa';

import logo from '../essets/MAGbank.png';
import applestore from '../essets/applestore.png';
import googleplay from '../essets/googleplay.png';
import './Footer.scss';


const Footer = () =>(
<footer className='footer'>
    <Container>
      <Row Col xs={12} lg={4} className='text-lg-left mb-5 mb-lg-0'>
        <Col xs={12} lg={6} className='text-lg-left'>
          <Image src={logo} className="logo"/>
        </Col>
        <Col xs={12} lg={4} className='mb-5 mb-lg-0 '>
            <Image src={applestore} />
            <Image src={googleplay} />
        </Col>
        <Col xs={12} lg={2} className='d-flex align-items-center justify-content-center'>
          <FaFacebookSquare color="#7c7c7c" size={'2.5rem'} />
          <FaTwitterSquare color="#7c7c7c" size={'2.5rem'} className='ml-2'/>
          <FaYoutubeSquare color="#7c7c7c" size={'2.5rem'} className='ml-2'/>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;