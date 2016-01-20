function makeRoman(number) {
  var int = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  // run through each item in `int` array
  for (var i = 0; i < int.length; i++) {
    // if the number is greater than the integer in position `i`
    if (number >= int[i]) {

    }
  }

}

$('#romanize').on('submit', function(ev) {
  ev.preventDefault();
  var number = $('#num-input').val();
  var result = makeRoman(number);

});

$('#num-input').change(function(){
  var number = $('#num-input').val();
  var result = makeRoman(number);
  $('#show-roman').html($('#num-input').val(result));
});
