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
  }

};

module.exports = Game;