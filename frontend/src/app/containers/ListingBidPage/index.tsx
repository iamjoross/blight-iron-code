import React from 'react';
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components/macro';
import { PageWrapper } from 'app/components/PageWrapper';
import ListingDetailCard from 'app/components/ListingDetailCard';
import ListingDB from 'app/database/listings';
import { Row, Col, Badge, Container } from 'react-bootstrap';

export function ListingBidPage() {
  const {listingId} = useParams();
  if(typeof ListingDB['listings'][listingId] === 'undefined'){
    alert('Please use /listing/bids/3')
  }
  const listing = ListingDB['listings'][listingId];
  const bids = listing['bids'];
  return (
    <Wrapper className="pt-4 px-2">
      <Container>
        <Row >
          <Col xs="12" md="4">
            <ListingDetailCard listingId={listingId} />
          </Col>
          <Col xs="12" md="8">
            <h2>Bids</h2>
            <Row className="text-center font-weight-bold mb-1">
              <Col xs="4" className="d-none d-md-block">Bidder</Col>
              <Col xs="2" className="d-none d-md-block">Price</Col>
              <Col xs="2" className="d-none d-md-block">Qty</Col>
              <Col xs="2" className="d-none d-md-block">Status</Col>
              <Col xs="2" className="d-none d-md-block"></Col>
            </Row>
            {bids.map((bid, index) => {
              let priceColor = '';
              let bidStatus = {
                1: {
                  description: 'Bidding',
                  color: 'light',
                },
                2: {
                  description: 'Accepted',
                  color: 'success',
                },
                3: {
                  description: 'Declined',
                  color: 'light',
                },
              };
              if (bid['offered_price'] > listing['initial_price']) {
                priceColor = 'text-danger';
              } else if (bid['offered_price'] < listing['initial_price']) {
                priceColor = 'text-success';
              }
              return (
                <Row className="border p-2 mb-2 bg-light" key={index}>
                  <Col xs="12" md="4" className="text-center pb-1">
                    {bid['bidder']} <br />
                    <small>{bid['bidder_address']}</small>
                  </Col>
                  <Col xs="6" md="2" className="text-center">
                    <span className={priceColor}>
                      PhP {bid['offered_price'].toFixed(2)}
                    </span>{' '}
                    <br />{' '}
                    <small>PhP {listing['initial_price'].toFixed(2)}</small>
                  </Col>
                  <Col xs="6" md="2" className="text-center mb-1">
                    {bid['offered_quantity']} kg <br />{' '}
                    <small>{listing['quantity']}kg</small>
                  </Col>
                  <Col className="text-center">
                    <Badge variant={bidStatus[bid['status']]['color']}>
                      {bidStatus[bid['status']]['description']}
                    </Badge>
                  </Col>
                  <Col xs="12" md="2" className="text-center">
                    
                    <Link to={'/bid/manage/' + bid['id']} >
                      <button className="btn btn-primary">View</button>
                    </Link>
                  </Col>
                </Row>
              );
            })}
          </Col>
        </Row>
      </Container>
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