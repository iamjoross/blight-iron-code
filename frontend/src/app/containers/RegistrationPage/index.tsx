import React from 'react';
import styled from 'styled-components/macro';
import { PageWrapper } from 'app/components/PageWrapper';
import {Form, Row, Col, Container, Button, DropdownButton} from 'react-bootstrap';

export const RegistrationPage = () => {
  const handleClick = () => {
  }
}
  return (
    <Wrapper>
      <Container className="pt-4">
        <div className="border rounded p-2 mb-4" style={{width: '20em'}}>
          <Form className="mb-4">
            <Form.Group>
              <Form.Label className="font-weight-bold">Username</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form>
        </div>
        <form>
          <Container>
            <Row>
              <Form.Group controlId= "formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type= "Username" placeholder="Username"/>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group controlId= "formPhoneNo.">
              <Form.Label>Phone No.</Form.Label>
              <Form.Control type= "numeric" placeholder="Phone No."/>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group controlId= "formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type= "password" placeholder="Password"/>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group controlId= "formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type= "password" placeholder="Confirm Password"/>
              </Form.Group>
            </Row>
          <Button variant ="Primary"onClick={handleClick}>Register</Button>
          <Row>  
            <DropdownButton  title= "Select Language" id="bg-vertical-dropdown-1">
            <Dropdown.Item eventKey="1">English</Dropdown.Item>
            <Dropdown.Item eventKey="2">Tagalog</Dropdown.Item>
            <Dropdown.Item eventKey="3">Aklanon</Dropdown.Item>
            <Dropdown.Item eventKey="4">Cebuano</Dropdown.Item>
            <Dropdown.Item eventKey="5">Waray</Dropdown.Item>
            <Dropdown.Item eventKey="6">Ilocano</Dropdown.Item>
            <Dropdown.Item eventKey="7">Chavacano</Dropdown.Item>
            <Dropdown.Item eventKey="8">Yakan</Dropdown.Item>
            <Dropdown.Item eventKey="9">Tausug</Dropdown.Item>
            <Dropdown.Item eventKey="10">Ivatan</Dropdown.Item>
          </DropdownButton>
          </Row>
          </Container>
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
