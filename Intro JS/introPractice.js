// function greet() {
//   console.log("you suck!");
// }
// function diss() {
//   console.log("you suck even moree!");
// }

// greet();
// setTimeout(diss, 5000);
// greet();

function countdown(x) {
  for (i = x; i > 0; i--) {
    return i;
  }
  console.log(setInterval(i, 1000));
}

// let counter = 0;
// let randomNum;
// randomNum = Math.random();
// function randomGame() {
//   let counter = 0;
//   let randomNum;
//   let timer = setInterval(function () {
//     randomNum = Math.random();
//     counter++;
//     while (randomNum > 0.75) {
//       clearInterval(timer);
//       console.log("It took" + counter + "tries. to win");
//     }
//   }, 1000);
// }

// function randomGame() {
//   let randomNum = Math.random();
//   let counter = 0;
//   for (let i = randomNum; i < 0.75; ) {
//     counter++;
//     console.log("It took" + counter + "tries.");
//   }
// }

// function randomGame() {
//   let num;
//   let times = 0;
//   let timer = setInterval(function () {
//     num = Math.random();
//     times++;
//     if (num > 0.75) {
//       clearInterval(timer);
//       console.log("It took " + times + " try/tries.");
//     }
//   }, 1000);
// }

// [2, 5, 6, 71, 23412];

// function min2(arr) {
//   arr.sort();
//   ;
// }

// 6 - 1;
// 6;
// 3;
// 2.2 - 10 - 4;
// function min(arr) {
//   arr.sort(function (a, b) {
//     console.log(a - b);
//     return a - b;
//   });
//   return arr[0];
// }

// function jaja(arr) {
//   arr.sort(function (a, b) {
//     return a - b;
//   });
//   return arr[0];
// }

// let word = "";
//     let vowel = ["a","e","i","o","u"];
//     for(let i = 0; i < str.length;i++){
//     for(let

//     }

//     let results = "";
//    for(let i = 0; i < str.length; i++)
//    {
//       let charAt = str.charAt(i)
//       let count = 0
//       results += charAt
//       for (let j = 0; j < str.length ; j++)
//       {
//          if(str.charAt(j) === charAt)
//          {
//             count++
//          }
//       }

//       results += count
//    }

//    return results;
// }
// / const value = [1, 2, 3, 4, 5, 6, 7, 8, 10, "J", "K", "Q"];
// const suit = ['clubs','spades','hearts','diamonds']

// const deck = {
//   [Value [1,2,3,4,5,6,7,8,9,10,'J','Q','K','A'],
//   [Suit ['clubs','spades','hearts','diamonds']]
// }

// function getCard() {
//   const value = [
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "J",
//     "Q",
//     "K",
//     "A",
//   ];
//   const idx = Math.floor(Math.randmom() * values.length);
//   const suit = ["clubs", "spades", "hearts", "diamonds"];
//   const sx = Math.floor(Math.random() * suit.length);

// }
// const cities = ["San Francisco", "Berlin", "Tokyo", "Moscow", "Buenos Aires"];

// for (let i = 0; i < cities.length; i++) {
//   console.log(cities[i]);
// }

// let i = 0;
// while (i < cities.length) {
//   console.log(cities[i]);
//   i++;
// }

// for (let city of cities) {
//   console.log(city);
// }

// let str = "pancakes";
// let includesK = false;

// for (let i = 0; i < str.length; i++){
//   if(str[k] === true) {
//     includesK = true;
//   }
// }
// function isValid(pangram) {
//   let lowerCased = pangram.toLowerCase();
//   for (let char of "abcdefghijklmnopqrstuv") {
//     if (lowerCased.indexOf(char) === -1) {
//       return false;
//     }
//   }
//   return true;
// }

// function cow(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total / arr.length;
// }

// function avg(arr) {
//   let total = 0;
//   for (let num of arr) {
//     total += num;
//   }
//   {
//     return total / arr.length;
//   }
// }

// function isValidPassword(password, username) {
//   if (
//     password.length < 8 ||
//     password.indexOf(" ") !== -1 ||
//     password.indexOf(username) !== -1
//   ) {
//     return false;
//   }
//   return true;
// }

// function containsPurple(arr) {
//   for (let color of arr) {
//     if (color === "yellow" || color === "green") {
//       return true;
//     }
//   }
//   return false;
// }

// function add(x, y) {
//   return x + y;
// }

// function greet(people) {
//   console.log(people);
//   console.log(`Hi ${people}`);
// }

// for(let x of )
// function grumpus() {
//   console.log("Grumpus want 2 fight");
//   console.log("grumpus will kill u");
// }

// grumpus();

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// let i = 1;
// while (i <= 20) {
//   console.log(i);
//   i += 2;
// }

// const words1 = ["mail", "milk", "bath", "black"];
// const words2 = ["box", "shake", "tub", "berry"];

// for (let i = 0; i < words1.length; i++) {
//   console.log(words1[i], words2[i]);
// }

// const magicSquare = [
//   [2, 7, 6],
//   [9, 5, 1],
//   [4, 3, 8],
//   [3, 2, 6],
// ];

// for (let i = 0; i < magicSquare.length; i++) {
//   let row = magicSquare[i];
//   let sum = 0;
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//     sum += row[j];
//   }
//   console.log(`${row} sumed to ${sum}`);
// }

// for (let row of magicSquare) {
//   let sum = 0;
//   for (let num of row) {
//     sum += num;
//   }
//   console.log(`${row} summed to ${sum}`);
// }

// let subreddits = ["cock", "washing", "weiner", "baseball"];
// let result = [];
// for (let sub of subreddits) {
//   result.push(sub);
//   console.log(sub);
// }
// console.log(result);

// for (let i = 0; i < subreddits.length; i++) {
//   console.log(subreddits[i]);
// }

// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);
// while (guess !== target) {
//   console.log(`Target: ${target} Guess: ${guess}`);
//   guess = Math.floor(Math.random() * 10);
// }
// console.log(`Target: ${target} Guess: ${guess}`);
// console.log("Congrats u win");
// const cities = ["San Francisco", "Berlin", "Tokyo", "Moscow", "Buenos Aires"];

// for (let i = 0; i < cities.length; i++) {
//   console.log(cities[i]);
// }

// const examScores = [98, 77, 84, 91, 57, 66];

// for (let i = 0; i <= examScores.length; i++) {
//   console.log(i, examScores[i]);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log("OUTER LOOP:", i);
//   for (let j = 10; j >= 0; j -= 2) {
//     console.log("INNER LOOP", j);
//   }
// const gameBoard = [
//   [4, 32, 8, 4],
//   [64, 8, 32, 2],
//   [2, 8, 4, 2],
//   [2, 8, 4, 2],
//   [6, 4, 3, 2],
// ];

// let totalScore = 0;
// for (let i = 0; i < gameBoard.length; i++) {
//   let row = gameBoard[i];
//   for (let j = 0; j < row.length; j++) {
//     totalScore += row[j];
//   }
//   console.log(totalScore);
// }
// console.log(totalScore);

// let programming = {
//   languages: ["JavaScript", "Python", "Ruby"],
//   isChallenging: true,
//   isRewarding: true,
//   difficulty: 8,
//   jokes: "",
// };

// for (let i = 1; i <= 10; i++) {
//   console.log("hello:", i);
// }

// for (let i = 1; i <= 20; i++)
//   console.log(`${num}x${num} = ${num * num}`);
// const userReviews = {};

// userReviews["mrSmith78"] = 4.0;

// const fitbitData = [308756, 1814, 211];

// const lucyFitbitData = [1234, 1814, 211];

// const fitBitData = {
//   totalSteps: 308727,
//   totalMiles: 211.7,
//   avgCalorieBurn: 5755,
//   workoutsThisWeek: "5 of 7",
//   avgGoodSleep: "2:13",
// };

// const board = [
//   ["O", null, "x"],
//   [null, "x", "O"],
//   ["X", "O", null],
// ];

// let favcolor = prompt("What is your fav color?");

// console.log(`Your favorite color is ${favcolor}`);

// let day = 1;

// if (day === 1) {
//   console.log("Monday");
// }

// let flavor = "grape";
// let chicken = "cherry";

// if (!(flavor === "grape" && chicken === "cherry")) {
//   console.log("We do not have that flavor");
// }

// let password = "chickenGal";

// if (password.length >= 8 && password.indexOf(" ") === -1) {
//   console.log("VALID PASSWORD");
// } else {
//   console.log("INVALID PASSWORD");
// }

// let password = "Hellokitty";

// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log("Valid Password!");
//   } else {
//     console.log("Password is long enough, but cannot contain spaces");
//   }
// }

// let pig = 1;

// if (pig) {
//   console.log("Ass");
// } else {
//   console.log("Falsy");
// }
// alert("It's working!");

// let rating = 5;

// if (rating === 3) {
//     console.log("You are a rock star!");
// }

// else if (rating === 2){
//     console.log("You are a rock hard cock!");
// }

// else if (rating === 1){
//     console.log("I ain't gonna lie u kinda mid bro");
// }

// else {
//     console.log('Invalid rating!')
// }

// let highScore = 1200
// let userScore = 1300

// if (userScore >= highScore){
//     console.log(`You have the current highscore! With a score of ${userScore}`);
//     highScore = userScore;
// }

// else{
//     console.log("U was not even close bruddah")
// }

// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);
// while (guess !== target) {
//   console.log(`Target:${target} Guess:${guess}`);
//   guess = Math.floor(Math.random() * 10);
// }
// console.log(`Target: ${target} Guess: ${guess}`);

// for (let i = 0; i <= 25; i++) {
//   console.log(mystery[i]);
// }

// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);
// while (guess !== target) {
//   console.log(`Target: ${target} Guess: ${guess}`);
//   guess = Math.floor(Math.random() * 10);
// }
// console.log(`Target: ${target} Guess: ${guess}`);
// console.log("Congrats u win");
