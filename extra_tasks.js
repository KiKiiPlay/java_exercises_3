// Additional assignments for Day 5

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/

console.log("------------------exercise_1-------------------------");
function giveMeRandom(n) {
  let randomArr = [];
  for (let i = 0; i < n; i++) {
    randomArr.push(Math.floor(Math.random() * 10));
  }
  return randomArr;
}

function checkArray(arr) {
  let sumOfBiggerPart = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > 5) {
      console.log("This number is bigger then 5:", arr[i]);
      sumOfBiggerPart += arr[i];
    }
  }
  return sumOfBiggerPart;
}

let randomArray = giveMeRandom(5);
console.log("Random array:", randomArray);
let sumOfRandArray = checkArray(randomArray);
console.log(sumOfRandArray);
console.log("-----------------------------------------------------\n");

/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/

console.log("------------------exercise_2-------------------------");

let shoppingCart = [
  { price: 1000, name: "Iphone", id: 22075, quantity: 2 },

  { price: 500, name: "Airpods", id: 22075, quantity: 1 },

  { price: 1800, name: "MacBook", id: 22075, quantity: 1 },
];

function shoppingCartTotal(arr) {
  let totalSum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    totalSum += arr[i].price * arr[i].quantity;
  }
  return totalSum;
}

let myShopping = shoppingCartTotal(
  shoppingCart,
  shoppingCart.price,
  shoppingCart.quantity
);

console.log("Total amount is:", myShopping);
console.log("-----------------------------------------------------\n");

/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

console.log("------------------exercise_3-------------------------");
console.log("-----------------------------------------------------\n");

/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/

console.log("------------------exercise_4-------------------------");
console.log("-----------------------------------------------------\n");

/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

console.log("------------------exercise_5-------------------------");
console.log("-----------------------------------------------------\n");

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

console.log("------------------exercise_6-------------------------");
console.log("-----------------------------------------------------\n");

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

console.log("------------------exercise_7-------------------------");
console.log("-----------------------------------------------------\n");

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

console.log("------------------exercise_8-------------------------");
console.log("-----------------------------------------------------\n");

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

console.log("------------------exercise_9-------------------------");
console.log("-----------------------------------------------------\n");

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

console.log("------------------exercise_10-------------------------");
console.log("-----------------------------------------------------\n");

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

console.log("------------------exercise_11-------------------------");
console.log("-----------------------------------------------------\n");

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
