var assert = require( 'chai' ).assert;
var characterCards = require( '../characterCards' );

describe( "The Character Cards: ", function() {

  beforeEach( function() {
    cards = new characterCards();
  });

  it( "Should start with 6 cards in the deck", function() {
    assert.equal( 6, cards.numberOfCards() );
  });

  it( "Should be able to deal a card", function() {
    assert.equal( "Professor Plum", cards.deal() );
  });

  it( "Should be able to shuffle the deck", function() {
    cards.shuffle();
    assert.equal( "Professor Plum", cards.deal() );
  })

});