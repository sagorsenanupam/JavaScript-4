/**
 * Objective: write a function to give me the sum of all numbers of array
 * step 1: declare a function
 * step 2: call check wether the function is running or not
 * step3: set a parameter(s)
 * pass the parameter(s), check wether the parameter passed in proper format
 */
function sumOfNumbers(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}
const numbs = [54, 28, 65, 95];
const sum = sumOfNumbers(numbs);
console.log("Sum of Number is", sum);
