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
      <Row className='text-center py-5'>
        <Col xs={12} lg={6} className='text-lg-left'>
          <Image src={logo}/>
        </Col>
        <Col xs={12} lg={4} className='py-xs-5'>
          <Image src={applestore} />
          <Image src={googleplay} className='ml-2'/>
        </Col>
        <Col xs={12} lg={2} className='d-flex algin-items-center justify-content-center'>
          <FaFacebookSquare color="#7c7c7c" size={'2.5rem'} />
          <FaTwitterSquare color="#7c7c7c" size={'2.5rem'} className='ml-2'/>
          <FaYoutubeSquare color="#7c7c7c" size={'2.5rem'} className='ml-2'/>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;