import React, {useState}  from 'react';
import styled from 'styled-components/macro';
import { PageWrapper } from 'app/components/PageWrapper';
import ListingDB from 'app/database/listings.js'
import ProductMarketInformation from 'app/components/ProductMarketInformation';
import Conversation from './components/Conversation'
import ViewOffer from './components/ViewOffer'
import { Link, useParams } from 'react-router-dom'
import {Row, Col, Form, Button, Tabs, Tab} from 'react-bootstrap';
import ListingDetailCard from 'app/components/ListingDetailCard';

export const ManageBidPage = (props) => {
  const {listingBidId = null} = useParams()
  let {listingId = null} = useParams()
  const bid = listingBidId ? ListingDB.bids[listingBidId] : null
  listingId = listingBidId ? bid['listing_id'] : null
  const listing = ListingDB.listings[listingId]
  let [isResponding, setIsResponding] = useState(false)
  let [status, setStatus] = useState(bid['status'])
  const [tabKey, setTabKey] = useState('messages');
  let acceptOffer = () => {
    setIsResponding(true)
    setTimeout(() => {
      setIsResponding(false)
      bid['status'] = 2
      setStatus(bid['status'])
    }, 2000)
  }
  return (
    <Wrapper className="p-4">
      <Link to={'/listing/bids/' + bid['listing_id']} >{'<-'} Go Back to the List of Bids</Link>
      <Row className="mt-2">
        <Col xs="12" md="4">
          <ListingDetailCard listingId={bid['listing_id']} />
        </Col>
        <Col xs="12" md="8">
          <ViewOffer bid={bid} listing={listing}/>
          <div className="mb-4" >{' '}</div>
          <Tabs
            className="mt-4"
            activeKey={tabKey}
            onSelect={(key) => setTabKey(key + '')}
          >
            <Tab eventKey="productMarketInformaiton" title="Market Information" className="pt-4">
              <ProductMarketInformation />
            </Tab>
            <Tab eventKey="productInformation" title="Product Information" className="pt-4">
              Product Information
            </Tab>
            <Tab eventKey="messages" title="Messages" className="pt-4">
              <Conversation />
            </Tab>
          </Tabs>
          
        </Col>
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
