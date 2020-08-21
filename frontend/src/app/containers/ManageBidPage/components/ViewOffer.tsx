import React, {useState} from 'react';
import styled from 'styled-components/macro';
import { Form, Button, Row, Col } from 'react-bootstrap';

export default function ViewOffer(props){
  let bid = props.bid
  const listing = props.listing
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
  const messages = [
    {
      user_id: 1,
      user: 'You',
      message: 'Hello, what you are offering is quite hight, may I know the reason?',
      created_at: ''
    }, {
      user_id: 2,
      user: 'Manong Pedro',
      message: 'It is actually a premium quality fruit',
      created_at: ''
    }
  ]
  return (
    <div>
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
      
    </div>
  );
};

const Wrapper = styled.div`
  position: relative !important;
  .bolder {
    font-weight: bold;
  }
`;
