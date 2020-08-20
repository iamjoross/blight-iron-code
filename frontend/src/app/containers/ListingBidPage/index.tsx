import React from 'react';
import styled from 'styled-components/macro'
import { PageWrapper } from 'app/components/PageWrapper'
import ListingDetailCard from 'app/components/ListingDetailCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'

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
      bidder_address: 'Tuburan, Cebu, Central Visayas',
      offered_price: 7,
      offered_quantity: 46,
      status: 1
    },
    {
      listing: {
        product: 'Dragon Fruit',
        date_needed: '09/03/2020',
        initial_price: 8,
        quantity: 100
      },
      bidder: 'Manong Pedro',
      offered_price: 11,
      offered_quantity: 30,
      status: 2
    }
  ]
  return (
    <Wrapper>
      <PageWrapper>
        <MainWrapper className="w-100 p-4">
          <Row>
            <Col xs="12" md="4">
              <ListingDetailCard productId={1} />
            </Col>
            <Col xs="12" md="8">
            <h2>Bids</h2>
            <Row className="text-center font-weight-bold mb-1">
              <Col xs="4">Bidder</Col>
              <Col xs="2" >Price</Col>
              <Col xs="2" >Qty</Col>
              <Col xs="2" >Status</Col>
              <Col xs="2" ></Col>
            </Row>
            {
              bids.map((bid, index) => {
                let priceColor = ''
                let bidStatus = {
                  1: {
                    description: 'Bidding',
                    color: 'light'
                  },
                  2: {
                    description: 'Accepted',
                    color: 'success'
                  },
                  3: {
                    description: 'Declined',
                    color: 'light'
                  }
                }
                console.log(bid['offered_price'],)
                if(bid['offered_price'] > bid['listing']['initial_price']){
                  priceColor = 'text-success'
                }else if(bid['offered_price'] < bid['listing']['initial_price']){
                  priceColor = 'text-danger'
                }
                return (
                  <Row className="border p-2 mb-2 bg-light" key={index}>
                    <Col xs="12" md="4" className="text-center pb-1">
                      {bid['bidder']} <br/>
                      <small>{bid['bidder_address']}</small>
                    </Col>
                    <Col xs="6" md="2" className="text-center">
                      <span className={priceColor}>PhP {(bid['offered_price']).toFixed(2)}</span> <br /> <small>PhP {(bid['listing']['initial_price'].toFixed(2))}</small>
                    </Col>
                    <Col xs="6" md="2" className="text-center mb-1">{bid['offered_quantity']} kg <br /> <small>{bid['listing']['quantity']}kg</small></Col>
                    <Col className="text-center">
                      <Badge variant={bidStatus[bid['status']]['color']}>{bidStatus[bid['status']]['description']}</Badge>
                    </Col>
                    <Col xs="12" md="2" className="text-center"><button className="btn btn-primary">View</button></Col>
                  </Row>
                )
              })
            }
            </Col>
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
