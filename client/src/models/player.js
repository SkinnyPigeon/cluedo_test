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
  }
};

module.exports = Player;