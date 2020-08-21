import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import BButton from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PageWrapper } from 'app/components/PageWrapper';
import ProductMarketInformation from 'app/components/ProductMarketInformation';

export function CreateListingPage() {
  let [productId, setProductId] = useState("0")
  let [isSubmitting, setIsSubmitting] = useState(false)
  let [hasSubmitted, setHasSubmitted] = useState(false)
  const placeListing = () => {
    console.log('test')
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setHasSubmitted(true)
    }, 2000)
  }
  return (
    <Wrapper className="p-4">
      <Row>
        <Col xs="12" md="5">
          <div className="p-2 border rounded">
            <div className="mb-4">
              <h3>Listing Details</h3>
              Add in the details of your demand
            </div>
            <Form className="mb-4">
              <Form.Group>
                <Form.Label className="font-weight-bold">Product</Form.Label>
                <select onChange={event => setProductId(event.target.value)} className="form-control">
                  <option value="0" >Select Product</option>
                  <option value="1" >Dragon Fruit</option>
                  <option value="2" >Yellow Corn</option>
                  <option value="2" >Wheat</option>
                  <option value="2" >Pineapple</option>
                  <option value="2" >Banana</option>
                </select>
                <Form.Text className="text-muted">
                  Select the product you are looking for
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label className="font-weight-bold">Date Needed</Form.Label>
                <Form.Control type="date" />
                <Form.Text className="text-muted">
                  The Date you want to product to be ready
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label className="font-weight-bold">Quantity</Form.Label>
                <InputGroup className="mb-2 mr-sm-2">
                  <Form.Control type="number" />
                  <InputGroup.Prepend>
                    <InputGroup.Text>kg</InputGroup.Text>
                  </InputGroup.Prepend>
                </InputGroup>
                <Form.Text className="text-muted">
                  The number of kilos you need
                </Form.Text>
              </Form.Group>
              <Form.Check
                checked
                type="checkbox"
                className="mb-2 mr-sm-2"
                label="I accept multiple farmers to supply my needs"
              />
              <Form.Check
                checked
                type="checkbox"
                className="mb-2 mr-sm-2"
                label="I can pick up the products from the farmer"
              />
              <Form.Group>
                <Form.Label className="font-weight-bold">
                  Message to the bidders
                </Form.Label>
                <Form.Control type="textarea" />
                <Form.Text className="text-muted">
                  Write the message you want to tell your bidders such as the
                  taste, fertilizer, etc.
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label className="font-weight-bold">
                  Bidding Closing Date
                </Form.Label>
                <Form.Control type="date" />
                <Form.Text className="text-muted">
                  When will you stop accepting offers or bids.
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label className="font-weight-bold">
                  Initial Price
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Suggested Price: 60.00"
                />
                <Form.Text className="text-muted">
                  The price per kilo you are willing spend. The higher the price
                  you can offer, the more bidder will be intereted in giving you
                  the products. Please check the market information below to help
                  you decide the best price for you.
                </Form.Text>
              </Form.Group>
              <div className="text-center">
                {!isSubmitting && !hasSubmitted &&
                  <BButton onClick={placeListing} variant="primary">Place Listing</BButton>
                }
                {isSubmitting &&
                  'Please wait...'
                }
                {hasSubmitted &&
                  <div>
                    <div className="text-success mb-1">Your listing has been placed!</div>
                    <Link to={'/listing/bids/3'} >
                      <BButton variant="success">View Bids</BButton>
                    </Link>
                  </div>
                }
              </div>
            </Form>
          </div>
        </Col>
        <Col xs="12" md="7">
          { parseInt(productId) > 0 &&
           <ProductMarketInformation />
          }
        </Col>
      </Row>
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