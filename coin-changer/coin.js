function makeChange(value) {
  var change = [];
  var coins = [25, 10, 5, 1];

  for (var i = 0; i <= coins.length; i++) {
    var numCoins = Math.floor(value / coins[i]);

    if (value >= coins[i]) {
      for (var j = 0; j < numCoins; j++) {
        change.push(coins[i]);
      }
    }
    value = value - (numCoins * coins[i]);
  }
  return change;
}

$('#give-change').on('submit', function(ev) {
  ev.preventDefault();
  var value = $('#amount').val();
  var change = makeChange(value);
  console.log(change);
  var show = $('#show-change').html(change + '');
});
