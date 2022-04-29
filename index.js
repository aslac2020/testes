const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (acc, currentValue) => acc + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10