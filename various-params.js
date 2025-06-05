/**
 * for a given string tell me wether it has even numbers of characters or not
 *
 */
function evenSizedString(str) {
  const size = str.length;
  console.log(str, size);
  if (size % 2 === 0) {
    console.log("even sized");
    return true;
  } else {
    console.log("Odd Sized");
    return false;
  }
}
// evenSizedString("Dhaka");
// evenSizedString("Faka");
function doubleOrTriple(number, doDouble) {
  if (doDouble) {
    const result = number * 2;
    return result;
  } else {
    const result = number * 3;
    return result;
  }
}
// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(6, true));

function numberOfElements(numbers) {
  const len = numbers.length;
  return len;
}
console.log(numberOfElements([12, 54, 75, 96, 35]));
