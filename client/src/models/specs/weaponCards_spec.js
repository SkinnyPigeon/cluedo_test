var assert = require( 'chai' ).assert;
var weaponCards = require( '../weaponCards' );

describe( "The Weapon Cards: ", function() {

  beforeEach( function() {
    cards = new weaponCards();
  });

  it( "Should start with 6 cards in the deck", function() {
    assert.equal( 6, cards.numberOfCards() );
  });

  it( "Should be able to deal a card", function() {
    assert.equal( "Spanner", cards.deal() );
  });

  it( "Should be able to shuffle the deck", function() {
    cards.shuffle();
    assert.equal( "Spanner", cards.deal() );
  })

});