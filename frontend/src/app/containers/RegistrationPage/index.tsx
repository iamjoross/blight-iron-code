import React from 'react';
import styled from 'styled-components/macro';
import { PageWrapper } from 'app/components/PageWrapper';
import {Form, Container} from 'react-bootstrap';

export const RegistrationPage = () => {
  const handleClick = () => {

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

          <label htmlFor= "username">Username</label>
          <input type="text" name="username" placeholder= "Username"/>
          <br/>
          <label htmlFor= "password">Phone No.</label>
          <input type="numeric" name="phone no." placeholder= "Phone No."/>
          <br/>
          <label htmlFor= "password">Password</label>
          <input type="password" name="password" placeholder= "Password"/>
          <br/>
          <label htmlFor= "password">Confirm Password</label>
          <input type="password" name="password" placeholder= "Confirm Password"/>
          <footer> 
              <button onClick={handleClick}> Register </button>
          </footer>
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
