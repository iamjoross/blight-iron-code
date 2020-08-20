import React from 'react';
import styled from 'styled-components/macro';
import { PageWrapper } from 'app/components/PageWrapper';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export function ListingBidPage() {
  const bids = [
    {
      listing: {
        product: 'Dragon Fruit',
        date_needed: '09/03/2020',
        initial_price: 8,
        quantity: 100
      },
      bidder: 'Mang Juan',
      offered_price: 11,
      offered_quantity: 46,
    },
    {
      listing: {
        product: 'Dragon Fruit',
        date_needed: '09/03/2020',
        initial_price: 8,
        quantity: 100
      },
      bidder: 'Manong Pedro',
      offered_price: 7,
      offered_quantity: 30,
    }
  ]
  return (
    <Wrapper>
      <PageWrapper>
        <MainWrapper className="w-100 p-4">
          <h1>Listing Bids</h1>
          <Row className="text-center font-weight-bold mb-1">
            <Col xs="3">Listing</Col>
            <Col xs="3">Bidder</Col>
            <Col xs="2" >Price</Col>
            <Col xs="2" >Qty</Col>
            <Col xs="2" ></Col>
          </Row>
          {
            bids.map((bid) => {
              let priceColor = ''
              console.log(bid['offered_price'],)
              if(bid['offered_price'] > bid['listing']['initial_price']){
                priceColor = 'text-success'
              }else if(bid['offered_price'] < bid['listing']['initial_price']){
                priceColor = 'text-danger'
              }
              return (
                <Row className="border p-2 mb- bg-light">
                  <Col xs="12" md="3" className="text-center">
                    <strong>{bid['listing']['product']}</strong><br /><small>{bid['listing']['date_needed']}</small>
                  </Col>
                  <Col xs="12" md="3" className="text-center pb-1">{bid['bidder']}</Col>
                  <Col xs="6" md="2" className="text-center">
                    <span className={priceColor}>PhP {(bid['offered_price']).toFixed(2)}</span> <br /> <small>PhP {(bid['listing']['initial_price'].toFixed(2))}</small>
                  </Col>
                  <Col xs="6" md="2" className="text-center mb-1">{bid['offered_quantity']} kg <br /> <small>{bid['listing']['quantity']}kg</small></Col>
                  <Col xs="12" className="text-center"><button className="btn btn-primary">View</button></Col>
                </Row>
              )
            })
          }
          
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
