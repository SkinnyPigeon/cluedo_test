var assert = require( 'chai' ).assert;
var characterCards = require( '../characterCards' );

describe( "The Character Cards: ", function() {

  beforeEach( function() {
    cards = new characterCards();
  });

  it( "Should start with 6 cards in the deck", function() {
    assert.equal( 6, cards.numberOfCards() );
  });

});