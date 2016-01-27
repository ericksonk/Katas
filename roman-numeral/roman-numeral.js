function toRoman(input) {
  var converted = '';
  var number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  for (var i = 0; i <= number.length; i++) {
    if (input >= number[i]) {
      input = input - number[i];
      converted = roman[i];
      return converted + (toRoman(input));
    }
  }
  return converted;
}
