var _ = require( 'lodash' )

var characterCards = function() {
  this.cards = [ "Miss Scarlet", "Colonel Mustard", "Mrs White", "Reverand Green", "Mrs Peacock", "Professor Plum" ];
};

characterCards.prototype = {

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

module.exports = characterCards;