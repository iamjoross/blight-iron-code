import React, {useState}  from 'react';
import styled from 'styled-components/macro';
import { PageWrapper } from 'app/components/PageWrapper';
import ListingDB from 'app/database/listings.js'
import ListingDetailCard from 'app/components/ListingDetailCard';
import Conversation from './components/Conversation'
import { Link, useParams } from 'react-router-dom'
import {Row, Col, Form, Button} from 'react-bootstrap';


export const ManageBidPage = (props) => {
  const {listingBidId} = useParams()
  const bid = ListingDB.bids[listingBidId]
  const listing = ListingDB.listings[bid['listing_id']]
  let [isResponding, setIsResponding] = useState(false)
  let [status, setStatus] = useState(bid['status'])
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
          <h3>{bid['bidder']} 's Offer</h3>
          <div className="border rounded p-2 px-4 mb-4">
            <Form >
              <Form.Group as={Row} className="mb-0">
                <Form.Label className="font-weight-bold mb-0" column xs="5">
                  Quantity
                </Form.Label>
                <Col xs="7">
                  <Form.Control
                    plaintext
                    readOnly
                    defaultValue={bid['offered_quantity'] + ' kg out of ' + (listing['quantity'] - listing['fulfilled_quantity']) + ' kg needed'}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-0">
                <Form.Label className="font-weight-bold mb-0" column xs="5">
                  Price
                </Form.Label>
                <Col xs="7">
                  <Form.Control
                    plaintext
                    readOnly
                    defaultValue={'PhP ' + (bid['offered_price']).toFixed(2)}
                  />
                </Col>
              </Form.Group>
            </Form>
            
          </div>
          { status === 1 && !isResponding &&
            <div className="text-center">
              <Button onClick={acceptOffer} variant="success">Accept Offer</Button> {' '}
              <Button variant="danger">Decline Offer</Button>
            </div>
          }
          { status === 2 && !isResponding &&
            <div className="text-success text-center font-weight-bold"> Thank you for accepting this offer!</div>
          }
          { isResponding &&
            <div className="text-center font-weight-bold"> Please wait...</div>
          }
          <Conversation />
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
