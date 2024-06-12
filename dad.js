// var a = 7;
// var b = 2;
// console.log(a)
// a = 7;
// b = a;
// console.log(a)
// var a = 9;

//   // initialize these three variables
//   var a = 5;
//   var b = 10;
//   var c = 'I am a';

//   a = a + 1;
//   b = b + 5;
//   c = c + 'String!';
//   var sum = 20 + 20;
//   console.log(sum)
//   var quotient = 20 / 2;
//   console.log(quotient);
//    //incrementing numbers
//    var myVar = 87;
//    myVar++;
//    console.log(myVar) 
//    //decrementing numbers
//    var myVar = 87;
//    myVar--;
//    console.log(myVar)

//   // decimal
//   var ourDecimal = 5.7;

//   var product = 2.0 * 2.5;
//   console.log(product)
//   //reaminder
//   var reaminder;
//   reaminder = 11 % 3;
//   console.log(reaminder)
// // compound assignment with augumented addition
// var a = 3;
// var b = 17;
// var  c = 12;
//     a += 12;
//     b += 9;
//     c += 7;
//     console.log(a)
//     console.log(b)
//     console.log(c)
// // compound assignment with augumented substraction
// var a = 3;
// var b = 17;
// var  c = 12;
// a -= 12;
//     b -= 9;
//     c -= 7;
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     // compound assignment with augumented substraction
// var a = 3;
// var b = 17;
// var  c = 12;
// a /= 12;
//     b /= 9;
//     c /= 7;
//     console.log(a)
//     console.log(b)
//     console.log(c)
// //declaring string variables
// var firstName = "Alan"
// var lastName = "Beau"
// var myLastName = "Chukwudi"
// var myFirstName = "Confidence"
// console.log(firstName + myLastName)
// //escaping literal quotes in strings
// var myStr = "I am a \"double quoted\" string inside \"double quotes\" "
// console.log(myStr)
// //quoting strings with single quotes
// var myStr = "<a href=\"http://www.example.com\" target=\"_blank\">link</a>";
// var myStr = '<a href=\"http://www.example.com\" target=\"_blank\">link</a>';
// console.log(myStr)
// var myStri = `'<a href=\"http://www.example.com\" target=\"_blank\">link</a>'`
// console.log(myStri)

// //escaping sequences in strings
// /****
// CODE OUTPUT
// \' single quote
// \" double quote
// \\ backslash
// \n newline
// \r carriage return
// \t tab
// \b backspace
// \f form feed
// ****/
// var myStr = "FirstLine\n\t\\SecondLine\n\t\tThirdLine"
// console.log(myStr)
// //concatenating strings with plus operator
// var myStr = "This is the start. " + " This is the middle. " + " This is the end."
// console.log(myStr)
// //concatenate strings with plus equals operator
// var ourStr = "I come first. "
// ourStr += "I come second."
// console.log(ourStr);
// //constructing strings with variables
// var myName = "chukwudi."
// var myStr = "my name is " + myName + " And i am well!"
// console.log(myStr)
// //appending variables with strings
// var anAdjective = "awesome"
// var myName = "confidence is "
// myName += anAdjective;
// console.log(myName)
// //find length of string
//  var firstNameLength = "";
//  var firstName = "Confidence"
// firstNameLength = firstName.length
// console.log(firstName.length)
// //bracket notation to find first character in string
// var firstLetterofFirstName= ""
// var firstName = "Promise"
// firstLetterOfFirstName = firstName[0]
// console.log(firstLetterOfFirstName)
// //bracket notation to find nth character in string
// var fourthLetterofFirstName= ""
// var firstName = "Promise"
// fourthLetterOfFirstName = firstName[5]
// console.log(fourthLetterOfFirstName)
// // STRING IMMUTABILITY
// var myName = "jello world"
// myName = "hello world";
// //bracket notation to find last character in string
// var lastLetterOfFirstName =""
// var firstName = "Confidence";
// var lastLetterOfFirstName = firstName[firstName.length - 1]
// console.log(lastLetterOfFirstName)
// //word blanks
// function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
// var result = "";
// result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb
// return result;
// }
// console.log(wordBlanks("dog", "big", "ran", "slowly"));
// console.log(wordBlanks("man", "tall", "walked", "slowly"));
// //store multiple values with arrays
// var myArray = ["Confidence", 21];
// //nested array
// var myArray = [["Bulls", 23], ["white sox", 45]]
// //access array data with indexes
// var myArray = [50, 60, 70, 80]
// var myData = myArray[0]
// console.log(myData)
// //modify array data with indexes
// var myArray =[18,64,99];
// myArray[2] = 45;
// console.log(myArray)
// // access multi-dimensional arrays with indexes
// var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
// var myData = myArray[3][0][1]
// console.log(myData)
// //manipulate arrays with push()
// //push add to the back of our array
// var myArray = [["john", 23],["cat", 2]];
// myArray.push(["dog", 3])
// console.log(myArray)
// /*var myArray = [["john", 23],["cat", 2]];
// myArray.push([1]) = ["dog", 3]
// console.log(myArray)*/
// //our array is now [["john", 23],["cat", 2], ["dog", 3]]
// //manipulate arrays with pop()
// //pop array removes from the back of our array
// var myArray = [["john", 23],["cat", 2]];
// var removeFromMyArray = myArray.pop()
// console.log(myArray)
// //our array is now [["john", 23]]
// //manipulate arrays with shift()
// //shift array removes from the front of our array 
// var myArray = ["chukwudi", "john",["savage"]]
// var removeFromMyArray = myArray.shift()
// console.log(myArray)
// //our array is now [ "john, ["savage"]]
// var myArray = [[["confidence"], "collins"],["promise, uche"]]
// var removeFromMyArray = myArray.shift()
// console.log(myArray)
// //manipulate arrays with unshift()
// //unshift interchanges with the very first variable of our array
// var myArray = ["chukwudi", "john","savage"];
// myArray.shift();
// myArray.unshift("paul");
// console.log(myArray)
// myArray = [["john", 23],["cat", 2]];
// myArray.shift();
// myArray.unshift(["dog", 3])
// console.log(myArray)
// // write reusuable code with functions 
// function ourReusableFunction() {
//     console.log("Heyya, world");
// }
// ourReusableFunction();  
// //passing values to functions with arguments
// function ourFunctionWithArgs(a, b){
//     console.log(a - b);
// }
// ourFunctionWithArgs(10, 5);

// //scope refers to the visibility of variables

// //global scope and functions
// var myGlobal = 10;
// oppsGlobal = 5;
// function fun1() {

// }
// function fun2(){
//     var output = "";
//     if (typeof myGlobal != "undefined") {
//         output += "myGlobal: " + oopsGlobal;
//     }
//     console.log(output);
// }
// //local scope and functions
// function myLocalScope() {
//     var myVar = 5;
//     console.log(myVar);
// }
// myLocalScope()
// //global vs. local variable scope in functions
// var outerWear = "T-Shirt";
// function myOutfit() {
//     var outerWear = "sweater";
//     return outerWear;
// }
//  console.log(myOutfit());
// console.log(outerWear);
//return a value from a function with return
// function minusSeven(num) {
//     return num - 7;
// }
// console.log(timesFive(10));
    // function timesFive(num) {
    //     return num * 5;
    // }

    // console.log(timesFive(10));
//understanding undefined value returned from a function
// var sum = 3;
// function addThree() {
//     sum += 3;
// }
// console.log(addThree())
// assignment with a returned value
// var changed = 0
// function change(num){
//    var changed = 0
//     return (num * 5) / 3;
// }
// changed = change(10);
// console.log(change(10))
// var changed = 0
// function change(num){
//     return (num + 50) * 10
//  }
// changed = change(2)
// console.log(change(2))
//stand in line
// function nextInLine(arr, item) {
//     arr.push(item);
//     return arr.shift();
// }
// var testArr = [1,2,3,4,5]
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));

// function nextInLine(arr,item) {
//     arr.push(item);
//     return arr.shift();
// }
// var testArr = [1,2,3,4,5,6,7,8,9,10];

// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 11));
// console.log("After: " + JSON.stringify(testArr));
// //BOOLEAN
// function trueOrFalse(wasThatTrue){
// if(wasThatTrue){
//     return "Yes,that was true"
// }
//     return "No,that was false"
// }
//     console.log(trueOrFalse(true))

// function trueOrFalse(thatIsTrue){
//     if (thatIsTrue){
//         return "Yes,that was true"
//     }
//         return "No,that was false"
// }
// console.log(trueOrFalse(false))
// //comparison with the equality operator
// function testEqual(val){
//     if (val == 10) {
//         return "equal";
//     }
//         return "not equal"
// }
// console.log(testEqual(10))
// // comparison with strictly equality operator
// function strictEqual(val){
//     if (val===10){
//         return "equal"
//     }
//         return "not equal"
// }
// console.log(strictEqual('10'))
// //PRACTICE COMPARING DIFFERENT VALUES
// function compareEquality(a,b){
//     if (a === b){
//         return "equal"
//     }
//     return "not equal"
// }
// console.log(compareEquality(10, '10'))
// //comparison with the inequality operator
// function compareInequality(val){
// if (val != 99){
//     return "not equal"
//     }
//     return "equal"
// }
// console.log(compareInequality('10'))
// //comparison with the  strict inequality operator
// function testStrictInequality(val){
//     if (val !== 17){
//         return "not equal"
//     }
//         return "equal"
// }
// console.log(testStrictInequality(17))
// //comparison with the logical and operator
// function testGreaterThan(val){
//     if (val > 100){
//         return "over 100"
//     }
//     if (val > 10){
//         return "over 10"
//     }
//     return " under 10"
// }
// console.log(testGreaterThan(101))
// //comparison with the greater or equal to operator
// function testGreaterThanOrEqualTo(val){
//     if (val >= 100){
//     return "greater than or equal to 100"
// }
// if (val >= 10){
// return "greater than or equal to 10"
// }
// return "less than 10"
// }
// console.log(testGreaterThanOrEqualTo(100))
// //apply same principle to less than and less or equalto operator

// //comparisons with the logical operator
// //AND
// function testLogicalAnd(val) {
//     if (val <= 50 && val >= 25){
//         return "Yes";
//     }
//     return "No"
// }
// console.log(testLogicalAnd(50))
// //OR
// function testLogicalOr(val){
//     if (val > 10 || val < 20 ){
//         return "Outside";
//     }
//     return "inside" ;
// }
// console.log(testLogicalOr(15))
// //else statement
// function testElse(val) {
//     var result = ""
//     if (val > 5){
//         result ="bigger than 5"
//     }
//     else{
//         result = "5 or smaller"
//     }
//     return result;
// }
// console.log(testElse(4))
// //else if statement
// function testElseIf(val){
//     var result =""
//     if (val > 10){
//         result = " bigger than 10"
//     } else if(val < 10){
//         result = "less than 10"
//     } else{
//         result = "between 5 and 10"
//     }
//     return result
// }
//  console.log(testElseIf(7))
// //logical order in else if  statements
// function testElseIf(val){
//     var result =""
//     if (val < 5){
//         result = " less than 5"
//     } else if(val < 10){
//         result = "less than 10"
//     } else{
//         result = "between 5 and 10"
//     }
//     return result
// }
//  console.log(testElseIf(3))
//  //chaining if else statements
//  function testSize(num){
//     if (num < 5) {
//         return "Tiny"
//     } else if (num < 10){
//         return "small"
//     } else if (num < 15){
//         return "medium"
//     } else if (num < 20){
//         return "large"
//     } else {
//         return "huge"
//     }
//  }
//  console.log(testSize(17))
//  var classGrades =["A", "B", "C", "D", "E", "F"]
// function scoreRule(grades){
//    if (grades >= 75){
//     return classGrades[0]
//    } else if (grades > 65 && grades == 74){
//     return classGrades[1]
//    } else if (grades > 55 && grades == 64){
//     return classGrades[2]
//    } else if (grades > 45 && grades == 54){
//     return classGrades[3]
//    }else if (grades > 40 && grades == 44){
//     return classGrades[4]
//    } else {
//     return classGrades[5]
//    }
// }
// console.log(scoreRule(90))
// //switch statements
// function GreekRating(val){
//     var answer ="";
//     switch(val){
//         case 1:
//             answer = "alpha";
//             break;
//         case 2:
//             answer = "beta";
//             break;
//         case 3:
//             answer = "gamma";
//             break;
//         case 4:
//             answer = "delta";
//             break;     
//         default:
//             answer = "stuff";                
//     }
//     return answer;
// }
// console.log(GreekRating(1))
// //default option in switch statements
// function GreekRating(val){
//     var answer ="";
//     switch(val){
//         case 1:
//             answer = "alpha";
//             break;
//         case 2:
//             answer = "beta";
//             break;
//         case 3:
//             answer = "gamma";
//             break;
//         case 4:
//             answer = "delta";
//             break;     
//         default:
//             answer = "stuff"; 
//             break;               
//     }
//     return answer;
// }
// console.log(GreekRating(6))
// //multiple identical options in switch statements
// function numberLevel(val){
// var answer = "";
// switch(val){
//     case 1:
//     case 2:
//     case 3:  
//       answer = "low"; 
//       break;
//     case 4:
//     case 5:
//     case 6: 
//       answer = "medium";
//       break;
//     case 7:
//     case 8:
//     case 9:
//         answer = "high";  
//         break;  
//     default:
//         answer = "stuff";        
// }
// return answer;
// }
// console.log(numberLevel(8))
// //returning boolean values from functions
// function isLess(a, b){
//     return (a > b)
// }
// console.log(isLess(20,2))
// //returning early pattern from functions
// function abTest(a, b){
//     if (a < 0 || b < 0){
//         return undefined;
//     }    
//     return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }
// console.log(abTest(20,20))
// //counting cards
// var count = 0;
// function cc(card){
//     switch (card){
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6: 
//          count++;
//          break;  
//         case 10:
//         case "j":
//         case "q": 
//         case "k":
//         case "a":
//         count--;
//         break;
//     }
//     var holdbet = 'hold'
//     if (count > 0){
//         holdbet = 'bet'
//     }
//     return count + " " + holdbet;
// }
// cc(2); cc(3); cc(7); cc('k'); cc('a');
// console.log(cc(3))
// //build javascript objects 
// var ourDog = {
//     "name": "camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["everything!"]
// };

// var myDog = {
// };
// //accessing object properties with dot notation
// var testObj ={
// "hat": "ballcap",
// "shirt": "jersey",
// "shoes": "cleats"
// };
// var hatValue = testObj.hat;
// var shirtValue = testObj.shirt;
// //accessing object properties with bracket notation
// var testObj ={
//     "hat": "ballcap",
//     "shirt": "jersey",
//     "shoes": "cleats"
//     };
//     var hatValue = testObj.hat["hat"];
//     var shirtValue = testObj.shirt["shirt"];
// //accessing objects properties with variables
// var testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
// };

// var playerNumber = 16;
// var player = testObj[playerNumber];
// //updating objects properties 
// var myDog = {
//     "name": "coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
// };

// myDog.name = "Happy Coder";
// // add new properties to an object
// var myDog = {
//     "name": "coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
// };
// myDog.mouth = "Happy";
// //delete properties from an object
// var myDog = {
//     "name": "coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
// };
// delete myDog.tails
// //using objects for lookups
// function phonecticLookup(val){
//     var result = "";

//     var lookup = {
//     "adams": "alpha",
//     "barakat": "beta",
//     "goddy": "gamma",
//     "divine": "delta",
//     "default": "stuff"
// };
// result = lookup[val]
//     return result;
// } 
// console.log(phonecticLookup("adams"));
// //testing  objects for properties
// var myObj ={
//     "adams": "alpha",
//     "barakat": "beta",
//     "goddy": "gamma",
//     "divine": "delta",
//     "default": "stuff"
// }
// function myProp(checkProp){
//     if (myObj.hasOwnProperty(checkProp)){
//         return myObj [checkProp];
//     }else {
//         return "Not Found"
//     }
// }
// console.log(myProp("adams"))
// //accessing nested objects
// var myStorage = {
//     "car": {
//         "inside": {
//             "glove box": "maps",
//             "passanger seat": "crumps"
//             },
//             "outside" : {
//                 "trunk": "jack"
//             }
//     }
   
// };
// var gloveBoxContents = myStorage.car.inside["glove box"];
// console.log(gloveBoxContents)
// //accessing nested arrays
// var myPlants =[
//     {
//         type: "flowers",
//         list: [
//             "rose",
//             "tulip",
//             "dandelion"
//         ]
//     },
//     {
//         type: "trees",
//         list: [
//             "fir",
//             "pine",
//             "birch"
//         ]
//     }
// ];
// var secondTree = myPlants[1].list[1];
// console.log(secondTree);
// //record collection
// var collection = {
//     "2548": {
//         "album": "Slippery when wet",
//         "artist": "Bon Jovi",
//         "tracks": [
//             "let It Rock",
//             "You Give Love a Bad Name"
//         ]
//     },
//     "2468": {
//         "album": "1999",
//         "artist": "Prince",
//         "tracks": [
//             "1999",
//             "Little Red Corvette"
//         ]
//     },
//     "1245": {
//         "artist": "Robert Palmer",
//         "tracks": []
//     },
//     "5439": {
//         "album": "ABBA Gold"
//     }  
// };
// var collectionCopy = JSON.parse(JSON.stringify(collection));
// function updateRecords(id, prop, value) {
//     if (value === ""){
//         delete collection[id][prop];
//     }else if (prop === "tracks"){
//         collection[id][prop] = collection[id][prop] || [];
//     }else {
//         collection[id][prop] = value;
//     }
//     return collection;
// }
// console.log(updateRecords(5439, "artist", "ABBA"))
// //iterate with while loops
// var myArray = [];
// var i = 0;
// while(i < 5) {
//     myArray.push(i)
//    i++; 
// }
// console.log(myArray)
// // iterate with for loops
// var myArray = []

// for (var i = 100; i <  200; i++){
//     myArray.push(i)
// }
// console.log(myArray)
// // iterate odd numbers with a for loop 
// var myArray = []

// for (var i = 5; i < 1000; i +=5){
//     myArray.push(i)
// }
// console.log(myArray)
// //count backwards with a for loop 
// var myArray = []
// for (var i = 31; i > 0; i -= 2){
//     myArray.push(i)
// }
// console.log(myArray)
// //iterate through an array with a for loop
// var myArr = [2, 3, 4, 5, 6];
// var total = 0;
// for (var i = 0; i < myArr.length; i++){
//     total += myArr[i]
// }
// console.log(total)
// //nesting for loops

// function multiplyAll(arr) {
//     var product = 1;
//     for (var i = 0; i < arr.length; i++){
//     for (var j = 0; j < arr[i].length; j++)  {
//         product *= arr[i][j]
//     }
// }
//     return product;
// }
// var product = multiplyAll([[1, 2],[3, 4],[5,6,7]]);
// console.log(product)
// //iterate with do... while loops
// var myArray = []
// var i = 10
//     do{
//     myArray.push(i);
//     i++
// }while (i < 5)
// console.log(i, myArray)
// //profile lookup
// var contacts = [
//     {
//         "firstName": "Akira",
//         "lastName": "potter",
//         "number": "09057291048",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "09057291048",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Kristian",
//         "lastName": "Vos",
//         "number": "09079211943",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     }
// ];

// function lookUpProfile(name, prop){
//  for (var i = 0; i < contacts.length; i++){
//     if(contacts[i].firstName === name) {
//         return contacts[i][prop] || "No such property";
//     }
//  }
//  return "No such contact";
// }
// var data = lookUpProfile("Sherlock", "hello");
// console.log(data);
// //generate random fractions
// function randomFraction(){
//     return Math.random();
// }
// console.log(randomFraction());
// //generate random whole number
// //var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
// function randomWholeNum() {
//     return Math.floor(Math.random() * 10);
// }
// console.log(randomWholeNum());
// //generate random whole number within a range
// function randomRange(myMin, myMax) {
//     return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
// }
// var myRandom = randomRange(5, 15);
// console.log(myRandom);
// // use the parseInt function
// function convertToInteger(str) {
//     return parseInt(str);
// }
// console.log(convertToInteger("56"));

// // use the parseInt function with a radix
// function convertToInteger(str){
//     return parseInt(str,2)
// }
// console.log(convertToInteger("10011"));
// // use the conditional (tenary) operator
// function checkEqual(a, b) {
//     return a === b ? true : false;
//     return a === b;
// }
// checkEqual(1, 2);
// //USING MULTIPLE CONDITIONAL (TENARY) OPERATORS
// function checkSign(num) {
//     return num > 0 ? "positive" : num < 0 ? "negative": "zero"
// }
// console.log(checkSign( 10));
// // declare a read-only variable with the const keyword
// function printManyTimes(str) {
// "use strict"
// var sentence = str + "is cool!";
// sentence = str + " is amazing!";

// for(var i = 0; i < str.length; i+=2) {
//     console.log(sentence);
// }

// }
// printManyTimes("freeCodeCamp");
// function printManyTimes(str) {
//     "use strict"
//     const SENTENCE = str + "is cool!";
    
    
//     for(var i = 0; i < str.length; i+=2) {
//         console.log(SENTENCE);
//     }
    
//     }
//     printManyTimes("freeCodeCamp");
//     //MUTATE AN ARRAY DECLARED WITH CONST
// const s = [5, 7, 2]
// function editInPlace() {
//     "use strict";

//     s[0] = 2;
//     s[1] = 5;
//     s[2] = 7;
// }
// editInPlace();
// console.log(s)
// // prevent object mutation
// function freezeObj() {
//     "use strict"
//     const MATH_CONSTANTS = {
//         PI: 3.14
//     };

//     object.freeze(MATH_CONSTANTS);
//     try{
//         MATH_CONSTANTS.PI = 99;
//     } catch(ex) {
//         console.log(ex);
//     }
//     return MATH_CONSTANTS.PI;
// }
// //const PI = freezeobj(PI);
// var name = 'my name it\'s you'
// console.log(name);

// let temperature = 'c'
// var hey = null
// console.log( typeof hey)

// var x = 45
// var y = 44
// if (x == 45 && y < 30){
//     console.log('if')
// } else if (x < 50){
//     console.log('elseif') 

// }else{
//     console.log('else')
// }
// var gender = 'Male';
// var age = "18";
// var state = "ebonyi";
// var name = "nz"
// var gender ="Female"

// if (age == 18 && gender == "Male"){
//     console.log("welcome mr "+  name  + " please where are you from " + state + " thank you");
// }else if ( age == 18 && gender == "Female"){
//     console.log("welcome mrs "+  name  + " please where are you from " + state + " thank you")
// }else {
//     console.log("sorry invalid credentials")
// }
// var items = ["bottles", 5, false];
// items [1] = 8;
// console.log(items[1])
// const item = ["Bottle", "of", "water"];
// item.push("juice","cup");
// console.log(item.push("juice"));
// function Person(name, eyeColor, age) {
//     this.name = name;
//     this.eyeColor = eyeColor;
//     this.age = age;
//     this.updateAge = function() {
//      return ++this.age;
//     }
    
// }
// let person01 = new Person("Daniel", "Blue", 29 );
// let person02 = new Person("Confidence", "red", 21);

// console.log(person01.updateAge());

// let p = new Promise((resolve, reject) => {
//     let a = 2 + 3

//     if(a == 4) {
//         resolve('success')
//     }else{
//         reject('failure')
//     }
// })

// p.then((message) => {
//     console.log('This is in the then ' + message)
// }).catch((message) => {
//     console.log('This is not in the catch ' + message)
// })

const iCode = false ;
const iWatched = false;

// const practicedToday = (callback, errorCallback) => {
//     if(iCode) {
//         errorCallback({
//             name: 'userUnserious',
//             message: ':('
//         })
//     }else if(iWatched) {
//         errorCallback({
//             name: 'userLazy',
//             message: ':)'
//         })
//     } else {
//         callback('userSerious BRAVO!')
//     }

    
// }



const practicedTodayPromise = () => {
  return  new Promise((resolve, reject) => {
    if(iCode) {
        reject({
            name: 'userUnserious',
            message: ':('
        })
    }else if(iWatched) {
        reject({
            name: 'userLazy',
            message: ':)'
        })
    } else {
        resolve('userSerious BRAVO!')
    }
    })
    
    
}

practicedTodayPromise().then((message)=> {
    console.log('success, ' + message)
}, (error) =>{
    console.log(error.name + ' ' + error.message)
})