/**
 * create a function that will return the only the even numbers
 * or return sum of the even numbers
 */

function evenNumbersOnly(numbers) {
  const evens = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      evens.push(number);
    }
  }
  return evens;
}
const numbers = [5, 9, 8, 6, 12, 85];
const result = evenNumbersOnly(numbers);
console.log(result);
