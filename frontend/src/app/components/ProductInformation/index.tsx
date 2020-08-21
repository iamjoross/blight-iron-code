import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

export default function ProductInformation() {
  return (
    <div>
      <div>
        <h3 className="text-center mb-4">Dragon Fruit</h3>
        <div className="row">
          <div className="col-12 col-md-4">
            <img
              alt="veg-pic"
              className="w-100"
              src="/assets/images/dragonfruit.png"
            />
          </div>
          <div className="col-12 col-md-8">
            <p>Dragon fruit, also known as pitahaya or strawberry pear, is a tropical fruit known for its vibrant red skin and sweet, seed-speckled pulp. Its unique look and acclaimed superfood powers have made it popular among foodies and the health-conscious</p>
            <p>Dragon Fruit is an expensive fruit in the market that is popular in middle and high income individuals</p>
          </div>
          <div className="col-12">
            <h4>How to Plant Dragon Fruit</h4>
            <p>Dragon usually bares fruit 5-7 months in a year. Its flowering season is from May to December. Being a family of cactus, it is not high maintenance requires less watering. It can also grow in any type of soil. There are two way to grow a dragon fruit: Planting from seed or from a cutting.</p>
            <h5>Planting from Seeds</h5>
            <p>Planting dragon fruit from seed is not recommend because it takes too long. Instead we suggest you to plant from cuttings</p>
            <h5>Planting from Cuttings</h5>
            <p>It would only take six to nine months to grow and starts baring fruits if you choose cutting method. Just follow the steps below</p>
            <ol>
              <li>Cut at least 1-2 inches off the bottom of each piece</li>
              <li>Leave the treated stem segment to dry for 7-8 days in a dry, shaded area</li>
              <li>Place cuttings 2 inches deep in soil</li>
              <li>Cover with soil and firm around the edges</li>
            </ol>
          </div>
          <div className="col-12 col-md-6 p-2">
            <h5>Other Information</h5>
            <p>This information would help you in dragon fruit farming</p>
            <table className="table table-sm">
              <tbody>
                <tr>
                  <td className="font-weight-bold">Soil</td>
                  <td>Any</td>
                </tr>
                <tr>
                  <td className="font-weight-bold">Watering</td>
                  <td>at least once a week</td>
                </tr>
                <tr>
                  <td className="font-weight-bold">Harvest Per Yer</td>
                  <td>100-150kg</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-12 col-md-6 p-2">
            <h5>Fertilizer</h5>
            <p>Dragon fruit doesnt need fertilizer but there are fertilizer that can make your fruits takes better</p>
            <table className="table table-sm">
              <thead>
                <tr>
                  <th className="font-weight-bold">Description </th>
                  <th>Cost <small>Php/kg</small></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Steer Manure</td>
                  <td>Unknown</td>
                </tr>
                <tr>
                  <td>Miracle Grow All Purpose Plant Food</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td>G & B Organice Chiken Manure</td>
                  <td>60</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
