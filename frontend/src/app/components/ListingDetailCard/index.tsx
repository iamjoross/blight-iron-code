import React from 'react';
import ListingDB from 'app/database/listings';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ListDetailCard(props) {
  console.log('props', props);
  const { productId = 0 } = props;
  let listings = ListingDB.listings;
  return (
    <div>
      <Card border="light">
        <Card.Img variant="top" src={listings[productId]['image']} />
        <Card.Body>
          <Card.Title className="text-center">
            {listings[productId]['product']}
          </Card.Title>
          <Form className="mb-4">
            <Form.Group as={Row} className="mb-0">
              <Form.Label className="font-weight-bold mb-0" column xs="5">
                Date Needed
              </Form.Label>
              <Col xs="7">
                <Form.Control
                  plaintext
                  readOnly
                  defaultValue={listings[productId]['date_needed']}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-0">
              <Form.Label className="font-weight-bold mb-0" column xs="5">
                Closing Date
              </Form.Label>
              <Col xs="7">
                <Form.Control
                  plaintext
                  readOnly
                  defaultValue={listings[productId]['bidding_closing_date']}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-0">
              <Form.Label className="font-weight-bold mb-0" column xs="5">
                Initial Price
              </Form.Label>
              <Col xs="7">
                <Form.Control
                  className="text-right"
                  plaintext
                  readOnly
                  defaultValue={
                    'PhP ' + listings[productId]['initial_price'].toFixed(2)
                  }
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-0">
              <Form.Label className="font-weight-bold mb-0" column xs="5">
                Quantity
              </Form.Label>
              <Col xs="7">
                <Form.Control
                  className="text-right"
                  plaintext
                  readOnly
                  defaultValue={listings[productId]['quantity'] + ' kg'}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-0">
              <Form.Label className="font-weight-bold mb-0" column xs="6">
                Fulfilled Quantity
              </Form.Label>
              <Col xs="6" className="text-right">
                <Form.Control
                  className={
                    'text-right font-weight-bold ' +
                    (listings[productId]['fulfilled_quantity'] <
                    listings[productId]['quantity']
                      ? 'text-warning'
                      : 'text-success')
                  }
                  plaintext
                  readOnly
                  defaultValue={
                    listings[productId]['fulfilled_quantity'] + ' kg'
                  }
                />
              </Col>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
