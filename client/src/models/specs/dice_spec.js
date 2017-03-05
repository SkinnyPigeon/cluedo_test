var assert = require( 'chai' ).assert;
var Dice = require( '../dice' );

describe( "The Dice: ", function() {

  beforeEach( function() {
    dice = new Dice();
  });

  it( "Should pick a random number", function() {
    assert.equal( 1, dice.roll() );
  });

});