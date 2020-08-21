import React from 'react';
import styled from 'styled-components/macro';
import { Container, Row, Col } from 'react-bootstrap';

export const MainContent: React.FC<any> = () => {
  const ListItems: any[] = [];

  return (
    <Wrapper>
      <Container>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative !important;
  .bolder {
    font-weight: bold;
  }
`;
