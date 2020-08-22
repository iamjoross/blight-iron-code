let listings = {
  1: {
    user: 'Mr. Michael Makiling',
    message: 'Urgently need corn!',
    image: '/assets/images/corn.jpeg',
    product_id: 1,
    product: 'Corn',
    date_needed: 'September 1, 2020',
    bidding_closing_date: 'August 30, 2020',
    initial_price: 5,
    quantity: 50,
    fulfilled_quantity: 30,
    bids: [1, 2, 3],
  },
  2: {
    user: 'Mr. Andress Mabini',
    message: 'Any wheat. The nearer the better',
    image: '/assets/images/wheat.jpg',
    product_id: 1,
    product: 'Wheat',
    date_needed: 'September 30, 2020',
    bidding_closing_date: 'August 30, 2020',
    initial_price: 10,
    quantity: 30,
    fulfilled_quantity: 30,
    bids: [1, 2, 3],
  },
  3: {
    user: 'Mr. Pedro Manolito',
    message: 'I am looking for sweet dragon fruit',
    image: '/assets/images/dragonfruit.png',
    product_id: 1,
    product: 'Dragon Fruit',
    date_needed: 'September 3, 2020',
    bidding_closing_date: 'August 30, 2020',
    initial_price: 60,
    quantity: 100,
    fulfilled_quantity: 30,
    bids: [1, 2, 3],
  },
};
const bids = {
  1: {
    bidder: 'Manong Pedro',
    offered_price: 70,
    offered_quantity: 30,
    status: 1,
  },
  2: {
    bidder: 'Nicanor Dela Cruz',
    offered_price: 60,
    offered_quantity: 70,
    status: 1,
  },
  3: {
    bidder: 'Mang Juan',
    bidder_address: 'Tuburan, Cebu, Central Visayas',
    offered_price: 50,
    offered_quantity: 46,
    status: 2,
  },
};
for (let listingId in listings) {
  listings[listingId]['id'] = parseInt(listingId);
  let listing = listings[listingId];
  for (let bidIndex in listing['bids']) {
    const bidId = listing['bids'][bidIndex];
    listing['bids'][bidIndex] = bids[bidId];
    listing['bids'][bidIndex]['id'] = bidId;
    bids[bidId]['listing_id'] = listingId * 1;
  }
}

export default {
  listings: listings,
  bids: bids,
};
