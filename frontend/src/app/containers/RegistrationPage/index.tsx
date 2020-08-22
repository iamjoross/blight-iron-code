import React, { useState } from 'react';
import { Icon } from '@iconify/react-with-api';
import {Link} from 'react-router-dom'
import styled from 'styled-components/macro';
import { PageWrapper } from 'app/components/PageWrapper';
import {Form, Row, Col, Container, Button, DropdownButton, Dropdown} from 'react-bootstrap';

export const RegistrationPage = () => {
  let [isRegistered, setIsRegistered] = useState(0)
  const register = () => {
    setIsRegistered(1)
    setTimeout(() => {
      setIsRegistered(2)
    }, 1000)
  }
  const logoContainerStyle = {paddingTop: "30vh"}
  return (
    <Wrapper>
      <Container className="pt-4">
        <Row>
          <Col className="text-center" style={logoContainerStyle}>
            <Icon icon="carbon:wheat" style={{fontSize: '4em'}} />
            <h5 className="text-weight-bold mt-2">SINACO.PH</h5>
            Empowering Farmer and making Agri Business Sexy
          </Col>
          <Col>
          <div className="border rounded pt-4 p-2 mb-4" style={{width: '30em'}}>
          <div className="text-center pb-1">
            <Form.Group controlId= "formUsername">
              <Form.Label>Select a Language</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option >English</option>
                <option >Tagalog</option>
                <option >Aklanon</option>
                <option >Cebuano</option>
                <option >Waray</option>
                <option >Ilocano</option>
                <option >Chavacano</option>
                <option >Yakan</option>
                <option >Tausug</option>
                <option >Ivatan</option>
              </Form.Control>
            </Form.Group>
          </div>
          <Form className="mb-4">
            <div className="text-center mb-2">
              <img className="img rounded" src="/assets/images/profile.png" style={{width: '8em'}} />
            </div>
            <Form.Group controlId= "formUsername">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type= "Username" placeholder="Full Name"/>
            </Form.Group>
            <Form.Group controlId= "formPhoneNo.">
              <Form.Label>Phone No.</Form.Label>
              <Form.Control type= "numeric" placeholder="Phone No."/>
            </Form.Group>
            <Form.Group controlId= "formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type= "password" placeholder="Password"/>
            </Form.Group>
            <Form.Group controlId= "formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type= "password" placeholder="Confirm Password"/>
            </Form.Group>
            <Form.Group controlId= "formUsername">
              <Form.Label>Registered Business Name</Form.Label>
              <Form.Control type="text" placeholder="Registered Business Name"/>
            </Form.Group>
            <Form.Group controlId="formUsername" className="mt-3">
              <Form.Control className="font-weight-bold" as="select" defaultValue="Choose...">
                <option>I am a farmer</option>
                <option>I am a businessman</option>
              </Form.Control>
            </Form.Group>
            {isRegistered === 0 &&
              <Button variant="primary" onClick={register} className="mt-2 w-100">Register</Button>
            }
            {isRegistered === 1 &&
              'Please wait...'
            }
            {isRegistered === 2 &&
              <div className="text-center text-success">
                Your account has been created! <br />
                <Link to="/listings">
                  <Button variant="outline-success" onClick={register} className="mt-2">Login to your Account -></Button>
                </Link>
              </div>
            }
          </Form>
        </div>
          </Col>
        </Row>
        
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  > ${PageWrapper} {
    min-height: calc(100vh - 80px);
    width: 100%;
    display: flex;
  }
`;
