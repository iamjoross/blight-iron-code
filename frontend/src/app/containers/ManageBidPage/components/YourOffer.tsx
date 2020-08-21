import React, {useState} from 'react';
import styled from 'styled-components/macro';
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap';

export default function ViewOffer(props){
  let {listing, bid = null} = props
  let [isResponding, setIsResponding] = useState(false)
  let [status, setStatus] = useState(bid ? bid['status'] : 0)
  let [editMode, setEditMode] = useState(status === 0 ? true : false)
  if(bid === null){
    bid = {
      offered_quantity: 0,
      offered_price: listing['initial_price'],
    }
  }
  let makeOffer = () => {
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
      <h3>Your Offer</h3>
          <div className="border rounded p-2 px-4 mb-4">
            <Form >
              <Form.Group as={Row} className="mb-2">
                <Form.Label className="font-weight-bold mb-0" column xs="5">
                  Offer Quantity
                </Form.Label>
                <Col xs="7">
                  <InputGroup className="mb-2 mr-sm-2">
                    <Form.Control
                      plaintext={status === 1}
                      defaultValue={bid['offered_quantity']}
                    />
                    <InputGroup.Prepend>
                      <InputGroup.Text>kilo</InputGroup.Text>
                    </InputGroup.Prepend>
                  </InputGroup>
                  
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-0">
                <Form.Label className="font-weight-bold mb-0" column xs="5">
                  Offer Price
                </Form.Label>
                <Col xs="7">
                  <InputGroup className="mb-2 mr-sm-2">
                    <Form.Control
                      plaintext={status === 1}
                      defaultValue={bid['offered_price']}
                    />
                    <InputGroup.Prepend>
                      <InputGroup.Text>pesos per kilo</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Text className="text-muted">
                      Please check the market information at the bottom before deciding for the price
                    </Form.Text>
                  </InputGroup>
                </Col>
              </Form.Group>
            </Form>
          </div>
          { status === 0 && !isResponding &&
            <div className="text-center">
              <Button onClick={makeOffer} variant="success">Submit Offer</Button> {' '}
            </div>
          }
          { status === 2 && !isResponding &&
            <div className="text-success text-center font-weight-bold">
              Your offer has been sent! <br />
              <Button variant="outline-success" className="mt-2">Change Offer</Button> {' '}
            </div>

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
