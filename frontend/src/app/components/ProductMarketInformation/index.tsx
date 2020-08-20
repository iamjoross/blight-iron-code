import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

export default function ProductMarketInformation() {
  return (
    <div>
      <h3>Market Information</h3>
      <div>
        <div className="row">
          <div className="col-12 col-md-4">
            <img
              alt="veg-pic"
              className="w-100"
              src="https://dummyimage.com/300x200/000/fff"
            />
          </div>
          <div className="col-12 col-md-8 pt-4">
            <h5 className="text-center mb-4">Dragon Fruit</h5>
            <p>
              The information that we provided was based on the prices set by
              the goverment or the pricing history. We also take into
              consideration if the product is seasonal or not and the prices of
              neighbhoring localities
            </p>
            <div className="row">
              <Col className="text-center mb-3" xs="12" md="4">
                <big className="font-weight-bold w-100">PhP 10.00</big>
                <br />
                <small className="w-100">Recommended Price</small>
              </Col>
              <Col className="text-center mb-3" xs="12" md="4">
                <span className="font-weight-bold w-100">PhP 20.00</span>
                <br />
                <small className="w-100">Highest Price</small>
              </Col>
              <Col className="text-center mb-3" xs="12" md="4">
                <span className="font-weight-bold w-100">PhP 5.00</span>
                <br />
                <small className="w-100">Lowest Price</small>
              </Col>
            </div>
          </div>
          <div className="col-12 col-md-6 p-2">
            <p>
              The pricing history shows the prices from the accepted bids and
              price regulated by the government
            </p>
            <div className="text-center mb-2">
              <ButtonGroup aria-label="Basic example">
                <Button variant="outline-dark">Left</Button>
                <Button variant="outline-dark">Middle</Button>
                <Button variant="outline-dark">Right</Button>
              </ButtonGroup>
            </div>
            <Image
              className="w-100"
              src={require('./assets/area-chart.png') + ''}
              thumbnail
            />
          </div>
          <div className="col-12 col-md-6 p-2">
            <p>The table shows the average price closed within the day</p>
            <table className="table table-sm">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Price per Kilo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>August 14, 2020</td>
                  <td className="text-right">9.00</td>
                </tr>
                <tr>
                  <td>August 15, 2020</td>
                  <td className="text-right">9.00</td>
                </tr>
                <tr>
                  <td>August 16, 2020</td>
                  <td className="text-right">9.00</td>
                </tr>
                <tr>
                  <td>August 17, 2020</td>
                  <td className="text-right">9.00</td>
                </tr>
                <tr>
                  <td>August 18, 2020</td>
                  <td className="text-right">9.00</td>
                </tr>
                <tr>
                  <td>August 19, 2020</td>
                  <td className="text-right">9.00</td>
                </tr>
                <tr>
                  <td>August 20, 2020</td>
                  <td className="text-right">9.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
