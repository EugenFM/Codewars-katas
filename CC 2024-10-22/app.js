// Write a program that finds the summation of every number from 1 to num.
//  The number will always be a positive integer greater than 0.
// Your function only needs to return the result, what is shown between
// parentheses in the example below is how you reach that result and
// it's not part of it, see the sample tests.
// function addEveryNum(n) {
//   let numsArr = [];
//   for (let i = 1; i <= n; i++) {
//     numsArr.push(i);
//   }
//   let result = numsArr.reduce(function (acc, num) {
//     return (acc += num);
//   }, 0);
//   console.log(result);
// }
// addEveryNum(8);

// var summation = function (num) {
//   // Code here
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// };
// console.log(summation(8));

// var summation = function (num) {
//   return (num * (num + 1)) / 2;
// };
// console.log(summation(8));

function doubled(arr) {
  return arr.map((num) => num * 2);
}
let result = doubled([1, 2, 3]);
console.log(result);

console.log(doubled([2, 3, 4]), [4, 6, 8]);
