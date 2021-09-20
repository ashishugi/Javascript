// var ar = [1, 2, 3, 4, 5, 32, 1, 1, 2, 5, 5, 45, 5];
// const hash = {};
// for (let i = 0; i < ar.length; i++) {
//   if (hash[ar[i]]) {
//     hash[ar[i]]++;
//   } else {
//     hash[ar[i]] = 1;
//   }
// }
// let maxFreq = 0;
// let maxValue = 0;
// for (const [key, value] of Object.entries(hash)) {
//   console.log(`${key}  and ${value} ->`);
//   if (maxFreq <= value) {
//     maxFreq = value;
//     maxValue = key;
//   }
// }

// const student = {
//   name: "Sunit",
//   marks: [{ course: "OS", score: 90 }],
//   isPassed: function (cuttOff) {
//     return this.marks.reduce((acc, curr) => curr.score > cuttOff);
//   },
// };
/**
 *        OBJECTS
 */
// const obj1 = new student();
// console.log(obj1.isPassed(89));
// console.log(student.isPassed(89));
// const user = {};
// user.name = "somename";
// console.log(user);
// // delete user.name;
// user.age = 10;
// user["this"] = "yes";
// for (x in user) {
//   console.log(user[x]);
//   if (x === "age") {
//     console.log("yes age is there");
//   }
// }
// const isEmpty = function (obj) {
//   for (x in obj) {
//     return false;
//   }
//   return true;
// };
// const obj = {};
// console.log(isEmpty(obj));

// const employe = {
//   John: 3600,
//   Shagun: 142,
//   Ajay: 7893,
// };
// const getSalary = function (obj) {
//   let sum = 0;
//   for (x in obj) {
//     sum += obj[x];
//   }
//   return sum;
// };
// const total = getSalary(employe);
// console.log(total);

///
