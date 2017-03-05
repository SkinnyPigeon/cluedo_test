var Player = function( name ) {
  this.name = name;
};

Player.prototype = {

  playerName: function() {
    return this.name;
  }
};

module.exports = Player;