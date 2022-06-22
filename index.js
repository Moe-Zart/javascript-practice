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

