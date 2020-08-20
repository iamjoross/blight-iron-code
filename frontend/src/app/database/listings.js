let listings = {
  1: {
    image: '/assets/images/dragonfruit.png',
    product_id: 1,
    product: 'Dragon Fruit',
    date_needed: 'September 3, 2020',
    bidding_closing_date: 'August 30, 2020',
    initial_price: 8,
    quantity: 100,
    fulfilled_quantity: 30,
    bids: [1, 2, 3],
  },
};
const bids = {
  1: {
    bidder: 'Manong Pedro',
    offered_price: 11,
    offered_quantity: 30,
    status: 2,
  },
  2: {
    bidder: 'Nicanor Dela Cruz',
    offered_price: 8,
    offered_quantity: 70,
    status: 1,
  },
  3: {
    bidder: 'Mang Juan',
    bidder_address: 'Tuburan, Cebu, Central Visayas',
    offered_price: 7,
    offered_quantity: 46,
    status: 1,
  },
};
for (let listingId in listings) {
  let listing = listings[listingId];
  for (let bidIndex in listing['bids']) {
    const bidId = listing['bids'][bidIndex];
    listing['bids'][bidIndex] = bids[bidId];
    listing['bids'][bidIndex]['id'] = bidId;
  }
}

export default {
  listings: listings,
  bids: bids,
};
