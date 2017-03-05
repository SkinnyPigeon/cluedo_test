var assert = require( 'chai' ).assert;
var Game = require( '../game' );
var Characters = require( '../characterCards' );
var Weapons = require( '../weaponCards' );

describe( "The Game: ", function() {

  beforeEach( function() {

    game = new Game();
    characterCards = new Characters();
    weaponCards = new Weapons();
  });

  it( "Should start with no players", function() {
    assert.equal( 0, game.noOfPlayers() );
  });

  it( "Should start with no cards in the secret file", function() {
    assert.equal( 0, game.noOfCards() );
  });

  it( "Should be able to add a card to the secret file", function() {
    var character = characterCards.deal();
    game.addCard( character );
    assert.equal( 1, game.noOfCards() );
  });

  it( "Should be able to check which suspect is in the secret file", function() {
    var character = characterCards.deal();
    game.addCard( character );
    var suspect = game.checkSuspect();
    assert.equal( "Professor Plum", suspect );
  }); 

  it( "Should be able to check which weapon is in the secret file", function() {
    var character = characterCards.deal();
    var weapon = weaponCards.deal();
    game.addCard( character );
    game.addCard( weapon );
    var murderWeapon = game.checkWeapon();
    assert.equal( "Spanner", murderWeapon );
  });

});