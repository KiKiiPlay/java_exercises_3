/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
console.log("------------------exercise_1-------------------------");
function area(l1, l2) {
  const calcArea = l1 * l2;
  return calcArea;
}

let rectangleArea = area(10, 5);
console.log("The area is:", rectangleArea);
console.log("-----------------------------------------------------\n");
/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

console.log("------------------exercise_2-------------------------");
function crazySum(int1, int2) {
  let totalInt = null;
  if (int1 === int2) {
    totalInt = (int1 + int2) * 3;
  } else {
    totalInt = int1 + int2;
  }
  return totalInt;
}

let checkInt = crazySum(6, 5);
console.log("Total is:", checkInt);
console.log("-----------------------------------------------------\n");

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

console.log("------------------exercise_3-------------------------");
function crazyDiff(num) {
  let result = null;
  if (num > 19) {
    result = (num - 19) * 3;
  } else if (num < 19) {
    result = (num - 19) * -1;
  } else if (num === 19) {
    result = num - 19;
  }
  return result;
}

let absoluteDiff = crazyDiff(20);
console.log("Absolute difference is:", absoluteDiff);
console.log("-----------------------------------------------------");

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

console.log("------------------exercise_4-------------------------");
function boundary(n) {
  if (n >= 20 && n <= 100) {
    return true;
  } else if (n === 400) {
    return true;
  } else {
    return false;
  }
}

let check = boundary(400);
console.log("The result is:", check);
console.log("-----------------------------------------------------");

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

console.log("------------------exercise_5-------------------------");
console.log("-----------------------------------------------------");

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

console.log("------------------exercise_6-------------------------");
console.log("-----------------------------------------------------");

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

console.log("------------------exercise_7-------------------------");
console.log("-----------------------------------------------------");

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

console.log("------------------exercise_8-------------------------");
console.log("-----------------------------------------------------");

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

console.log("------------------exercise_9-------------------------");
console.log("-----------------------------------------------------");

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

console.log("------------------exercise_10------------------------");
console.log("-----------------------------------------------------");

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
