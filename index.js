const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (acc, currentValue) => acc + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10


var num1 = [1, 2, 3];
var num2 = [4, 5, 6];
var num3 = [7, 8, 9];

var nums = num1.concat(num2, num3);
console.log(nums);


