//        OBJECTS
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

// 2.
var s = "something";
var c = s;
console.log(c, " and ", s);
c = c + " added this";
console.log(c, " and ", s);
// in object if you create copy the it does not create new cpy it only create
// to refernce to it
// any change in it copy will be reflected in orignal one
// const obj = {
//   name: "something",
//   age: 12,
// };
// var obj2 = obj;
// console.log(obj, " and ", obj2);

// obj2.name = "anyone";

// console.log(obj, " and ", obj2);
// to avoid above thing we can user Object.assign({}, obj)
const obj = {
  name: "something",
  age: 12,
};
const obj2 = Object.assign({}, obj);
obj2.name = "anyone";
const obj3 = {};
Object.assign(obj3, obj2);
console.log(obj, " and ", obj2, " and obj3 ", obj3);
obj3.name = "else";
console.log(obj, " and ", obj2, " and obj3 ", obj3);
console.log(obj.something ? obj.something : "nothing");
for (x in obj3) {
  console.log(obj3[x]);
}
const ob4 = {
  name: "ashish",
  sizes: {
    height: 10,
    fav: {
      color: "white",
    },
  },
};
const ob5 = ob4;
const ob6 = {};
Object.assign(ob6, ob4);
ob5.sizes.height = 11;
console.log("ob4 : ", ob4, " ob5 : ", ob5, " ob6 : ", ob6);
ob6.sizes.fav.color = "green";
console.log("ob4 : ", ob4, " ob5 : ", ob5, " ob6 : ", ob6);
// in above all the object inside object value changes the original one even if we
// object.assign()

// to avoid anything like this we never use Object.assign as it again create
// reference if there is object inside object , to fix this we b= JSON.parse(JSON.stringify(a)) . this works every time
const ob7 = JSON.parse(JSON.stringify(ob4));
console.log("ob7: ", ob7, " ob4 : ", ob4);
ob7.sizes.fav.color = "Blue";
console.log("ob7: ", ob7, " ob4 : ", ob4);
