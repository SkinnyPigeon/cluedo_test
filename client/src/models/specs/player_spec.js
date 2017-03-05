var assert = require( 'chai' ).assert;
var Player = require( '../player' );

describe( "The player: ", function() {

  beforeEach( function() {
    p1 = new Player( "Euan" );
  });

  it( "Should start with a player name", function() {
    assert.equal( "Euan", p1.playerName() );
  });

});