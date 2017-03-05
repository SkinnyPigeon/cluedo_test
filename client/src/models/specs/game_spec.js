var assert = require( 'chai' ).assert;
var Game = require( '../game' );

describe( "The Game: ", function() {

  beforeEach( function() {

    game = new Game();

  });

  it( "Should start with no players", function() {
    assert.equal( 0, game.noOfPlayers() );
  });

});