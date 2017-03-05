var assert = require( 'chai' ).assert;
var Game = require( '../game' );
var Player = require( '../player' );
var Characters = require( '../characterCards' );
var Weapons = require( '../weaponCards' );
var Rooms = require( '../roomCards' );

describe( "The Game: ", function() {

  beforeEach( function() {
    game = new Game();
    game2 = new Game();
    characterCards = new Characters();
    weaponCards = new Weapons();
    roomCards = new Rooms();
    var character = characterCards.deal();
    var weapon = weaponCards.deal();
    var room = roomCards.deal();
    game.addCard( character );
    game.addCard( weapon );
    game.addCard( room );
    p1 = new Player( "Euan" );
    p2 = new Player( "Laura" );
    game.addPlayer( p1 );
    game.addPlayer( p2 );
  });

  it( "Should start with no players", function() {
    assert.equal( 0, game2.noOfPlayers() );
  });

  it( "Should start with no cards in the secret file", function() {
    assert.equal( 0, game2.noOfCards() );
  });

  it( "Should be able to add a card to the secret file", function() {
    var character = characterCards.deal();
    game2.addCard( character );
    assert.equal( 1, game2.noOfCards() );
  });

  it( "Should be able to check which suspect is in the secret file", function() {
    var suspect = game.checkSuspect();
    assert.equal( "Professor Plum", suspect );
  }); 

  it( "Should be able to check which weapon is in the secret file", function() {
    var murderWeapon = game.checkWeapon();
    assert.equal( "Spanner", murderWeapon );
  });

  it( "Should be able to check which room is in the secret file", function() {
    var murderRoom = game.checkRoom();
    assert.equal( "Study", murderRoom );
  });

  it( "Should be able to add players to the game", function() {
    assert.equal( 2, game.noOfPlayers() );
  });

  it( "Should be able to check which player's turn it is", function() {
    assert.equal( "Euan", game.checkPlayer() ); 
  });

  // it( "Should be able to rotate player turns", function() {
  //   game.nextTurn();
  //   assert.equal( 2, game.checkPlayer() );
  // });

});