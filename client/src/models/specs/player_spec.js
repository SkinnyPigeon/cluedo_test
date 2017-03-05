var assert = require( 'chai' ).assert;
var Player = require( '../player' );
var Characters = require( '../characterCards' );
var Weapons = require( '../weaponCards' );
var Rooms = require( '../roomCards' );

describe( "The player: ", function() {

  beforeEach( function() {
    p1 = new Player( "Euan" );
    p2 = new Player( "Euan" );
    characterCards = new Characters();
    weaponCards = new Weapons();
    roomCards = new Rooms();
    var character = characterCards.deal();
    var weapon = weaponCards.deal();
    var room = roomCards.deal();
    p1.addCard( character );
    p1.addCard( weapon );
    p1.addCard( room );
  });

  it( "Should start with a player name", function() {
    assert.equal( "Euan", p1.playerName() );
  });

  it( "Should start with no cards", function() {
    assert.equal( 0, p2.noOfCards() );
  });

  it( "Should be able to take a card", function() {
    var character = characterCards.deal();
    p2.addCard( character );
    assert.equal( 1, p2.noOfCards() );
  });

});