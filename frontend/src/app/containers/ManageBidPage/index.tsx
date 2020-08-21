import React, {useState}  from 'react';
import styled from 'styled-components/macro';
import { PageWrapper } from 'app/components/PageWrapper';
import ListingDB from 'app/database/listings.js'
import ProductMarketInformation from 'app/components/ProductMarketInformation';
import ProductInformation from 'app/components/ProductInformation';
import Conversation from './components/Conversation'
import ViewOffer from './components/ViewOffer'
import YourOffer from './components/YourOffer'
import { Link, useParams } from 'react-router-dom'
import {Row, Col, Form, Button, Tabs, Tab} from 'react-bootstrap';
import ListingDetailCard from 'app/components/ListingDetailCard';

export const ManageBidPage = (props) => {
  const {listingBidId = null} = useParams()
  let {listingId = null} = useParams()
  const bid = listingBidId ? ListingDB.bids[listingBidId] : null
  listingId = listingBidId ? bid['listing_id'] : listingId
  if(typeof ListingDB.listings[listingId] === 'undefined'){
    alert('Listing is undefined')
  }
  const listing = ListingDB.listings[listingId]
  
  const [tabKey, setTabKey] = useState(bid ? 'messages' : 'productMarketInformaiton');
  
  return (
    <Wrapper className="p-4">
      <Link to={'/listing/bids/' + listingId} >{'<-'} Go Back to the List of Bids</Link>
      <Row className="mt-2">
        <Col xs="12" md="4">
          <ListingDetailCard listingId={listingId} />
        </Col>
        <Col xs="12" md="8">
          {listingBidId !== null &&
            <ViewOffer bid={bid} listing={listing}/>
          }
          {listingBidId === null &&
            <YourOffer bid={bid} listing={listing}/>
          }
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
              <ProductInformation />
            </Tab>
            {bid !== null &&
              <Tab eventKey="messages" title="Messages" className="pt-4">
                <Conversation />
              </Tab>
            }
            
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
