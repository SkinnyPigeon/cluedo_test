var Dice = function() {
  this.sides = 7;
}

Dice.prototype = {

  roll: function() {
    var number = Math.floor( Math.random() * ( this.sides - 1) + 1 );
    return number;
  }
}

module.exports = Dice;