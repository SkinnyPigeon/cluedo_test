var Player = function( name ) {
  this.name = name;
  this.cards = [];
};

Player.prototype = {

  playerName: function() {
    return this.name;
  },

  noOfCards: function() {
    return this.cards.length;
  },

  addCard: function( card ) {
    this.cards.push( card );
  }
};

module.exports = Player;