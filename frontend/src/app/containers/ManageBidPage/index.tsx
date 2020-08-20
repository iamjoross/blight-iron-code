import React from 'react';
import styled from 'styled-components/macro';

import { PageWrapper } from 'app/components/PageWrapper';
import ListingDB from 'app/database/listings.js'
import ListingDetailCard from 'app/components/ListingDetailCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const ManageBidPage = (props) => {
  console.log('props', props.match.params.listingBidId)
  const bid = ListingDB.bids[props.match.params.listingBidId]
  const listing = ListingDB.listings[bid['listing_id']]
  console.log('manage', bid, listing)
  return (
    <Wrapper className="p-4">
      <Row>
        <Col xs="12" md="4">
          <ListingDetailCard listingId={bid['listing_id']} />
        </Col>
        <Col xs="12" md="8"></Col>
      </Row>
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
