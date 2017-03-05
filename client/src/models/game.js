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