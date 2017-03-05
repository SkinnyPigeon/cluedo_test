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

  it( "Should be able to rotate player turns", function() {
    game.nextTurn();
    assert.equal( "Laura", game.checkPlayer() );
  });

  it( "Should rotate in order", function() {
    p3 = new Player( "Jeff" );
    game.addPlayer( p3 );
    game.nextTurn();
    assert.equal( "Laura", game.checkPlayer() );
  });

  it( "Should return true to correct guess on character", function() {
    var guess = p1.guessCharacter( "Professor Plum" );
    var answer = game.checkSuspectGuess( guess );
    assert.equal( true, answer );
  });

  it( "Should return false to incorrect guess on character", function() {
    var guess = p1.guessCharacter( "Mrs White" );
    var answer = game.checkSuspectGuess( guess );
    assert.equal( false, answer );
  });

  it( "Should return true to correct guess on weapon", function() {
    var guess = p1.guessWeapon( "Spanner" );
    var answer = game.checkWeaponGuess( guess );
    assert.equal( true, answer );
  });

  it( "Should return false to incorrect guess on weapon", function() {
    var guess = p1.guessWeapon( "Powersaw" );
    var answer = game.checkWeaponGuess( guess );
    assert.equal( false, answer );
  });

  it( "Should return true to correct guess on room", function() {
    var guess = p1.guessRoom( "Study" );
    var answer = game.checkRoomGuess( guess );
    assert.equal( true, answer );
  });

  it( "Should return false to incorrect guess on room", function() {
    var guess = p1.guessRoom( "Balcony" );
    var answer = game.checkRoomGuess( guess );
    assert.equal( false, answer );
  });



});