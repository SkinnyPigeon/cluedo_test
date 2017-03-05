var assert = require( 'chai' ).assert;
var Player = require( '../player' );

describe( "The player: ", function() {

  beforeEach( function() {
    p1 = new Player( "Euan" );
    p2 = new Player( "Euan" );
  });

  it( "Should start with a player name", function() {
    assert.equal( "Euan", p1.playerName() );
  });

  it( "Should start with no cards", function() {
    assert.equal( 0, p2.noOfCards() );
  });

});