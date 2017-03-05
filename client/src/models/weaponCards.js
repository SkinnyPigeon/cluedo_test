var _ = require( 'lodash' )

var weaponCards = function() {
  this.cards = [ "Candle Stick", "Dagger", "Lead Pipe", "Revolver", "Rope", "Spanner" ];
};

weaponCards.prototype = {

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

module.exports = weaponCards;