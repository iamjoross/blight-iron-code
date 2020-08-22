import React from 'react';
import styled from 'styled-components/macro';
import { PageWrapper } from 'app/components/PageWrapper';
import {Form, Row, Col, Container, Button, DropdownButton, Dropdown} from 'react-bootstrap';

export const RegistrationPage = () => {
  const handleClick = () => {
  }
  return (
    <Wrapper>
      <Container className="pt-4">
        <div className="border rounded pt-4 p-2 mb-4" style={{width: '30em'}}>
          <div className="text-center pb-3">
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
            
            <Button variant="primary" onClick={handleClick} className="mt-2 w-100">Register</Button>
          </Form>
        </div>
        <form>
              
        </form>
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
