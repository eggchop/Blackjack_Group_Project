const Hand = require('../hand.js');
const assert = require('assert');

describe('Hand', function() {

  let card1;
  let card2;
  let hand;

  beforeEach(function(){
    card1 = { value: 5};
    card2 = { value: 10};

    hand = new Hand(card1, card2);
  });

  it('should have with 2 cards', function(){
    assert.deepStrictEqual(hand.cards, [card1, card2]);
  });

  it('should be able to calculate the total value of the hand', function(){
    assert.strictEqual(hand.totalValue(), 15);
  });

});