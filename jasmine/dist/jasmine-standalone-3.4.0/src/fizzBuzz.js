function fizzBuzz () {
}
fizzBuzz.prototype.list = function() {
  var numbers = new Array(100);
  for (var i = 0; i < 100; i++) {
    var number = i + 1;
    if (number % 3 === 0) {
      numbers[i] = "fizz";
    } else if (number % 5 === 0) {
      numbers[i] = "buzz";
    } else {
      numbers[i] = number;
    }
    console.log(numbers[i]);
  }
};
