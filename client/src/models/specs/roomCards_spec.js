var assert = require( 'chai' ).assert;
var roomCards = require( '../roomCards' );

describe( "The Room Cards: ", function() {

  beforeEach( function() {
    cards = new roomCards();
  });

  it( "Should start with 9 cards in the deck", function() {
    assert.equal( 9, cards.numberOfCards() );
  });

  it( "Should be able to deal a card", function() {
    assert.equal( "Study", cards.deal() );
  });

  it( "Should be able to shuffle the deck", function() {
    cards.shuffle();
    assert.equal( "Study", cards.deal() );
  })

});