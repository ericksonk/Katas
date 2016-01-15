(function() {
  function makeChange (cents) {
    var change = [];
    var coins = [25, 10, 5, 1];

    coins.forEach(function(coin){
      var numTimes = Math.floor(cents / coin);

      for (var i = 0; i < numTimes; i++) {
        change.push(coin);
      }

      cents = cents - (coin * numTimes);
    });

    return change;
  }
  $('#mkchng').on('submit', function(ev) {
    ev.preventDefault();
    var amount = $('#amount').val();
    var change = makeChange(amount);
    console.log(change);
  });
})();
