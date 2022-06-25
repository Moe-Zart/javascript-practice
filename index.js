//
//BEGINNER CHALLENGES
//

/*Challenge 1
//function that returns he sum of two arguments
function addition (a,b){
    return a+b;
}
console.log(addition(-3,-6));
*/

/*Challenge 2
//function that converts hours into seconds

function hoursIntoSeconds(hours){
return hours*3600
}

console.log(hoursIntoSeconds(10))
*/

/*Challenge 3
//calculate the perimeter of a rectangle

function calcPerimeter(width, length) {
  return width * 2 + length * 2;
}
console.log(calcPerimeter(20, 10));
*/

/*Challenge 4
//calculate the area of a triangle

function calcTriangleArea(base,height){
return (base*height)/2
}
console.log(calcTriangleArea(10,10));
*/

/*Challenge 5
//add 'Frontend' to the end of an inputted string
function appendFrontend(x){
    return x+"Frontend"
}
console.log(appendFrontend('Apple'));
*/

/*Challenge 6
//return true if the sum of 2 numbers is greater than 100, otherwise false
function sumGreaterThan100(x,y) {
 return x+y > 100 ? 'true' : 'false';
}
console.log(sumGreaterThan100(20,10));
*/

/*Challenge 7
//returns true if less than or equal to 0, otherwise return false
function lessThanOrEqualToZero(x){
return x<=0;
}
console.log(lessThanOrEqualToZero(-3));
*/

/*Challenge 8
//create an opposite Boolean
function oppositeBoolean(tf){
return !tf;
}
console.log(oppositeBoolean(false));
*/

/*Challenge 9
//return true if not 0, otherwise return false
function isNotZero(x){
return x!==0
}
console.log(isNotZero(0));
*/

/*Challenge 10
//return the remainder
function calcRemainder(x, y) {
  return x % y;
}
console.log(calcRemainder(9, 2));
*/

/*Challenge 11
//return true if odd number
function isOdd(x){
return x%2 !== 0;
}
console.log(isOdd(8));
*/

/*Challenge 12
//if even, return 1, otherwise -1
function booleanInteger(x){
    return x%2===0 ? 1 : -1;
}
console.log(booleanInteger(7));
*/

/*Challenge 13
//if first string = 'LOGGED_IN' and second string = 'SUBSCRIBED' return true, otherwise false
function isLoggedInAndSubscribed(log, sub) {
 return (log === "LOGGED_IN" && sub === "SUBSCRIBED");
}
console.log(isLoggedInAndSubscribed("LOGGED_IN","SUBSCRIBED"));
*/

/*Challenge 14
//if first string = 'LOGGED_IN' or second string = 'SUBSCRIBED' return true, otherwise false
function isLoggedInAndSubscribed(log, sub) {
 return (log === "LOGGED_IN" || sub === "SUBSCRIBED");
}
console.log(isLoggedInAndSubscribed("LOGGED_IN","SUBSCRIBED"));
*/

//
//MEDIUM CHALLENGES
//

/*Challenge 1
//return first value if falsy, otherwise return the second one
function filterOutFalsy(x,y){
  return !x ? x : y;
}
console.log(filterOutFalsy(0,100))
*/

/*Challenge 2
//return the lengths of any given array
function arrLength(arr){
return arr.length;
}
console.log(arrLength([3,5]))
*/

/*Challenge 3
//return the last element in an array
function lastElem(arr) {
  return arr[arr.length - 1]; //just like if you were to return arr[3], this is arr.length, which is 4 in this case, minus 1 which will give arr[3].
}
console.log(lastElem([2, 4, 6, "Ball"]));
*/

/*Challenge 4
//return the sum of every element in the array
function arrSum(arr) {
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(arrSum([1, 2,3]));
*/

/*Challenge 5
//add up all the numbers less than or equal to an iputted number
function progressiveSum(num){
  let sum = 0;
for (let i=1; i<=num; i++){
sum += i;
}
return sum;
}
console.log(progressiveSum(3));
*/

/*
//Challenge 6 My attempt (Still correct)
// return mm:ss format for inputted seconds
function calcTime(sec) {
  let seconds = sec % 60;
  let minutes = Math.floor(sec / 60);

  //if minutes<10, + "0"
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return minutes + ":" + seconds;
}
console.log(calcTime(5));

//Challenge 6 Better Method
function calcTime(sec) {
  let seconds = sec % 60;
  let minutes = Math.floor(sec / 60);

  if (minutes.toString().length === 1) {
    //here, it is saying that if the minute length is 1 digit, then add the 0.
    //note: the toString() converts the minutes to string, so that we can use the .length method.
    minutes = "0" + minutes;
  }
  if (seconds.toString().length === 1) {
    //here, it is saying that if the second length is 1 digit, then add the 0
    seconds = "0" + seconds;
  }
  return minutes + ":" + seconds;
}
console.log(calcTime(5));
*/

/*Challenge 7
//Return the largest number of an inputted array
function getMax(arr) {
  let max = arr[0]; //let max equal to the first value of the array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) { 
      max = arr[i]; //if the next element is bigger than the first value, then make that equal to the new max
    }
  }
  return max;
}
console.log(getMax([1, 5, 3, 7, 3, 99]));
*/

/*Challenge 8 My attempt
//return the reverse of an iputted string
function reverseString(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}
console.log(reverseString("CowArd"));

//Challenge 8 Better Method
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("CowArd"));
*/

/*Challenge 9 My Attempt
//turn all elements in inputted array into 0
function convertToZeros(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i]=0;
  }
  return arr;
}
console.log(convertToZeros([4, 7, 2, 6]));

//Challenge 9 Better Method
function convertToZeros(arr) {
  return arr.map(elem => 0);
}
console.log(convertToZeros([4, 7, 2, 6]));
*/

/*Challenge 10 My Attempt
// remove 'apple' element from an array of fruits
function removeApples(arr) {
  let noApples = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== "apple") {
      noApples.push(arr[i]);
    }
  }
  return noApples;
}
console.log(removeApples(["banana", "apple", "orange", "apple"]));

//Challenge 10 Better Method
function removeApples(arr) {
  return arr.filter((elem) => elem !== "apple"); //return element to arr if not equal to 'apple'
}
console.log(removeApples(["banana", "apple", "orange", "apple"]));
*/

/*Challenge 11
//filter out falsy values of given array
function filterOutFlasy(arr) {
  return arr.filter(elem => !!elem);
}
console.log(filterOutFlasy([4, false, 6, "dog", 0, null, "0"]));
*/

/*Challenge 12
//return each element in an array to its boolean value
function covertToBoolean(arr){
  return arr.map(elem => !!elem);
}
console.log(covertToBoolean([500, 0, "", "cat"]));
*/

//
//HARD CHALLENGES
//

/*Challenge 1 My Attempt
//display a * for each inputted full rating and a . for each half rating
function showRating(inpRating) {
  let arr = [];
  for (let i = 0; i < Math.floor(inpRating); i++) {
    arr += "*";
    if (i != Math.floor(inpRating)) {
      arr += " ";
    }
  }
  if (inpRating !== Math.floor(inpRating)) {
    return arr + ".";
  }
  return arr;
}
console.log(showRating(5));

//Challenge 1 Better Method
function showRating(inpRating) {
  let arr = [];
  for (let i = 0; i < Math.floor(inpRating); i++) {
    arr += "*";
    if (i != Math.floor(inpRating)) {
      arr += " ";
    }
  }
  if (!Number.isInteger(inpRating)) {
    return arr + ".";
  }
  return arr;
}
console.log(showRating(5));
*/

//return the prices sorted by low to high

/*Challenge 2
function sortLowToHigh(arr) {
  return arr.sort((a,b) => a-b);
}
console.log(sortLowToHigh([3, 2, 1, 0]));
*/

/*Challenge 3
function sortHighToLow(obj) {
  return obj.sort((a, b) => b.price - a.price);
}
console.log(
  sortHighToLow([
    { id: 1, price: 50 },
    { id: 2, price: 30 },
    { id: 3, price: 60 },
    { id: 4, price: 10 },
  ])
);
*/

/*Challenge 4 + 5

//json is a common way of sending data from a server to our browser

//allows updates without actually clicking on something. dynamic data sends request to a server and 
//the server gets back the information from a format called json, in which whe parse into javascript 
//code usable code and update the information on the screen

//synchronous javascript code
//where javascript functions are executed in the sequence they are called.
//e.g all the normal functions you have executed


//asynchronous code

async function postsByUser(userId) {  //async goes next to the function where u want to control asynchronous code
  const promise = await fetch ("https://jsonplaceholder.typicode.com/posts"); // fetch returns you a promise. therefore you need .then
  const result = await promise.json(); //the await above goes next to the promise you want to wait for.
//the .json above also returns you a promise, so u need to await it

//the once the await functions above are finished processing, we are now able to filter through the json


      //before filtering through to just get userId 4, you have to identify what the elements of the 
      //array are. Looking through the json, you can see that the elements are objects and the userId
      //is the property of each object. so to call the userId, you do element.userId and make it equal
      //to the inputted userId
      const posts = result.filter(elem => elem.userId === userId);
      console.log(posts);
      
    }
postsByUser(4);
*/