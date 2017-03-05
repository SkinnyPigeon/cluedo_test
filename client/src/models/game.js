var Game = function() {

  this.players = [];
  this.secretFile = [];

};

Game.prototype = {

  noOfPlayers: function() {
    return this.players.length;
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

  

};

module.exports = Game;