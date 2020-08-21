import React, {useState} from 'react';
import ListingDB from 'app/database/listings';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

export default function ListDetailCard(props) {
  const { listingId = 0 } = props
  let {addNewQuantity = 0} = props
  let listings = ListingDB.listings
  console.log(listings[listingId])
  let [fulfilledQuantity, setFulfilledQuantity] = useState(parseInt(listings[listingId]['fulfilled_quantity']))
  const addQuantity = (quantity) => {
    setFulfilledQuantity(fulfilledQuantity + quantity)
  }
  return (
    <div>
      <Card border="light">
        <Card.Img variant="top" src={listings[listingId]['image']} />
        <Card.Body>
          <Card.Title className="text-center">
            {listings[listingId]['product']}
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
                  defaultValue={listings[listingId]['date_needed']}
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
                  defaultValue={listings[listingId]['bidding_closing_date']}
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
                    'PhP ' + listings[listingId]['initial_price'].toFixed(2)
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
                  defaultValue={listings[listingId]['quantity'] + ' kg'}
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
                    ((fulfilledQuantity + addNewQuantity) <
                    listings[listingId]['quantity']
                      ? 'text-warning'
                      : 'text-success')
                  }
                  plaintext
                  readOnly
                  value={(fulfilledQuantity + addNewQuantity) + ' kg'}
                />
              </Col>
            </Form.Group>
          </Form>
          {(fulfilledQuantity + addNewQuantity) === listings[listingId]['quantity'] &&
            <div className="text-center"><big><Badge variant="success">Listing Fulfilled!</Badge></big></div>
          }
        </Card.Body>
      </Card>
    </div>
  );
}
