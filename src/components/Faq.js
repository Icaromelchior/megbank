import React,{useState,useEffect} from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import IconText from './IconText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCreditCard,
  faWallet,
  faShieldAlt,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons';
import './Faq.scss';
import { icon } from '@fortawesome/fontawesome-svg-core';

const Faq = () => { 
   const options = [
    { icon: faCreditCard, text: 'Cartão de crédito' },
    { icon: faWallet, text: 'Conta e abertura' },
    { icon: faShieldAlt, text: 'Token digital' },
    { icon: faUserTie, text: 'Produtos e Serviços' },
  ];
  const [index,setIndex] = useState(0);

  const handleClick = (key) => {
    setIndex(key);
  };

  useEffect(()=> {
    console.log(index);
  },[index]);

  return(
  <section className='faq'>
    <Container  className=' py-5'>
      <h2 className='faq-title  my-5 max-auto'>Dúvidas Frequentes</h2>

      <Row className='d-flex algin-items-center justify-items-center '>
    
        <Col className='d-lg-none mb-5' xs={12}>

          <Row>
              {options.map(({ icon },key) => (
                <Col className='d-flex justify-content-center'ket={key}>
                  <FontAwesomeIcon
                    icon={icon} size='2x' color={key === index ? '#FFF': '#BBB'} onClick={()=> handleClick(key)}/>
                </Col>
              ))}
            </Row>
            <Row className='faq-cel mt-5'>
              <p className='lead'>{options[index].text}</p>
            </Row>   
        </Col>

        <Col className='d-none d-lg-block'>
            {options.map(({ icon, text },key) => (
              <IconText
                icon={icon}
                size={3}
                className='faq-clicklabe mb-3'
                textClassName='lead'
                color= {key === index ? '#FFF': '#BBB'} onClick={()=> handleClick(key)} key={key}>
                {text}
              </IconText>
            ))}
          </Col>


        <Col>
          <Accordion  defaultActiveKey='0' activeKey={`${index}`}>
                <Accordion.Item  eventKey="0">
                  <Accordion.Header >Lorem ipsum dolor sit amet</Accordion.Header>
                  <Accordion.Body className='faq__body'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Exercitation ullamco </Accordion.Header>
                  <Accordion.Body className='faq__body'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Duis aute irure dolor in, adipiscing</Accordion.Header>
                  <Accordion.Body className='faq__body'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Consectetur adipiscing </Accordion.Header>
                  <Accordion.Body className='faq__body'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </Accordion.Body>
                </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  </section>
)
};

export default Faq;
