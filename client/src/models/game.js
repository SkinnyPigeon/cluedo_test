var _ = require( 'lodash' );

var Game = function() {
  this.players = [];
  this.secretFile = [];
  this.cardsToDeal = [];
};

Game.prototype = {

  noOfPlayers: function() {
    return this.players.length;
  },

  addPlayer: function( player ) {
    this.players.push( player );
  },

  checkPlayer: function() {
    return this.players[0].playerName();
  },

  nextTurn: function() {
    this.players.push(this.players.shift())
  },

  noOfCards: function() {
    return this.secretFile.length;
  },

  addCard: function( card ) {
    this.secretFile.push( card );
  },

  checkSuspect: function() {
    return this.secretFile[0];
  },

  checkWeapon: function() {
    return this.secretFile[1];
  },

  checkRoom: function() {
    return this.secretFile[2];
  },

  checkSuspectGuess: function( suspect ) {
    if( this.checkSuspect() === suspect ) {
      return true;
    } else {
      return false;
    }
  },

  checkWeaponGuess: function( weapon ) {
    if( this.checkWeapon() === weapon ) {
      return true;
    } else {
      return false;
    }
  },

  checkRoomGuess: function( room ) {
    if( this.checkRoom() === room ) {
      return true;
    } else {
      return false;
    }
  },

  addRestOfCards: function( pileOfCards ) {
    var cards = pileOfCards.numberOfCards() ;
    for( var i = 0; i < cards; i++ ) {
      this.cardsToDeal.push( pileOfCards.deal() );
    }
  },

  noOfCardsToDeal: function() {
    return this.cardsToDeal.length;
  },

  deal: function() {
    return this.cardsToDeal.pop();
  }

};

module.exports = Game;