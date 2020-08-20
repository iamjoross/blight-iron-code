import React from 'react';
import styled from 'styled-components/macro';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import BButton from 'react-bootstrap/Button'
import { PageWrapper } from 'app/components/PageWrapper';
import ProductMarketInformation from 'app/components/ProductMarketInformation'


export function CreateListingPage() {
  return (
    <Wrapper>
      <PageWrapper>
        <MainWrapper>
          <div className="mb-4">
            <h1>Listing Details</h1>
            Add in the details of your demand
          </div>
          <Form className="mb-4">
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="font-weight-bold">Product</Form.Label>
              <select className="form-control">
                <option>Select Product</option>
                <option>Palay</option>
                <option>Mais</option>
              </select>
              <Form.Text className="text-muted">
                Select the product you are looking for
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="font-weight-bold">Date Needed</Form.Label>
              <Form.Control type="date" />
              <Form.Text className="text-muted">
                The Date you want to product to be ready
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
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
              type="checkbox"
              className="mb-2 mr-sm-2"
              id="inlineFormCheck"
              label="I accept multiple farmers to supply my needs"
            />
            <Form.Check
              value="true"
              type="checkbox"
              className="mb-2 mr-sm-2"
              id="inlineFormCheck"
              label="I can pick up the products from the farmer"
            />
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="font-weight-bold">Message to the bidders</Form.Label>
              <Form.Control type="textarea" />
              <Form.Text className="text-muted">
                Write the message you want to tell your bidders such as the taste, fertilizer, etc.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="font-weight-bold">Bidding Closing Date</Form.Label>
              <Form.Control type="date" />
              <Form.Text className="text-muted">
                When will you stop accepting offers or bids.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="font-weight-bold">Initial Price</Form.Label>
              <Form.Control type="number" />
              <Form.Text className="text-muted">
                The price per kilo you are willing spend. The higher the price you can offer, the more bidder will be intereted in giving you the products. Please check the market information below to help you decide the best price for you.
              </Form.Text>
            </Form.Group>
            <div className="text-center">
              <BButton variant="primary">Place Listing</BButton>
            </div>
          </Form>
          
          <ProductMarketInformation />
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
