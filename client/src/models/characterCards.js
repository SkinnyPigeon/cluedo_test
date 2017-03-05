var characterCards = function() {
  this.cards = [ "Miss Scarlet", "Colonel Mustard", "Mrs White", "Reverand Green", "Mrs Peacock", "Professor Plum" ];
};

characterCards.prototype = {
  numberOfCards: function() {
    return this.cards.length;
  }
};

module.exports = characterCards;