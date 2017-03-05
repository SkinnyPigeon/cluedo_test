var characterCards = function() {
  this.cards = [ "Miss Scarlet", "Colonel Mustard", "Mrs White", "Reverand Green", "Mrs Peacock", "Professor Plum" ];
};

characterCards.prototype = {

  numberOfCards: function() {
    return this.cards.length;
  },

  deal: function() {
    return this.cards.pop();
  }
};

module.exports = characterCards;