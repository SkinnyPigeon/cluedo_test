var _ = require( 'lodash' );

var Game = function() {

  this.players = [];
  this.secretFile = [];

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
  }

};

module.exports = Game;