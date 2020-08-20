import React from 'react';
import styled from 'styled-components/macro';
import { PageWrapper } from 'app/components/PageWrapper';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export function ListingBidPage() {
  return (
    <Wrapper>
      <PageWrapper>
        <MainWrapper className="w-100">
          <h1>Listing Bids</h1>
          <Row className="text-center font-weight-bold">
            <Col xs="3">Listing</Col>
            <Col xs="3">Bidder</Col>
            <Col xs="2" >Price</Col>
            <Col xs="2" >Qty</Col>
          </Row>
          <Row className="border p-2">
            <Col xs="3" className="text-center">
              <strong>Dragon Fruit</strong><br /><small>09/03/2020</small>
            </Col>
            <Col xs="3" className="text-center">
              Mang Juan Farm
            </Col>
            <Col xs="2" className="text-center">
              <span className="text-success">PhP 10.00</span> <br /> <small>8.00</small>
            </Col>
            <Col xs="2" className="text-center">46 kg <br /> <small>100kg</small></Col>
          </Row>
        </MainWrapper>
      </PageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  > ${PageWrapper} {
    min-height: calc(100vh - 80px);
    width: 100%;
    display: flex;
  }
`;

const MainWrapper = styled.div`
  position: relative;
  min-height: calc(100vh - 80px);
`;
