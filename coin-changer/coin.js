function giveChange(value) {
  var change = [];
  var coins = [25, 10, 5, 1];
  // run through each item in coins
  for (var i = 0; i <= coins.length; i++) {
    var times = Math.floor(value / coins[i]);
      // Number of times to push into `change`
      for (var j = 0; j < times; j++) {
        change.push(coins[i]);
      }
      value = value - (coins[i] * times);
  }
  return change;
}

$('#coin-changer').on('submit', function(ev) {
  ev.preventDefault();
  var amount = $('#convert').val();
  var change = giveChange(amount);
  console.log(change);
  $('#show-change').html();
});

// The coin changer is a simple kata. Build a function that will return an array of USD change [Quarters, Dimes, Nickels, Pennies] for any given integer.
//
// make_change(145) #=> [25, 25, 25, 25, 25, 10, 10]
// make_change(100) #=> [25, 25, 25, 25]
// make_change(75)  #=> [25, 25, 25]
// make_change(80)  #=> [25, 25, 25, 5]
// make_change(70)  #=> [25, 25, 10, 10]
// make_change(62)  #=> [25, 25, 10, 1, 1]
// make_change(4)   #=> [1, 1, 1, 1]
// make_change(0)   #=> []
