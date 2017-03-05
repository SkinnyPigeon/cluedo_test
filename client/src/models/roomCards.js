var _ = require( 'lodash' )

var roomCards = function() {
  this.cards = [ "Kitchen", "Ballroom", "Conservatory", "Dining Room", "Cellar", "Billiard Room", "Library", "Lounge", "Hall", "Study" ];
};

roomCards.prototype = {

  numberOfCards: function() {
    return this.cards.length;
  },

  deal: function() {
    return this.cards.pop();
  },

  shuffle: function() {
    this.cards = _.shuffle( this.cards );
  }
};

module.exports = roomCards;