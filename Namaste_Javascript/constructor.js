function User(name) {
  this.name = name;
  this.Admin = false;
}

var ob = new User("somename");
console.log(ob);
const ob1 = {
  name: "something",
  age: 10,
};
console.log(JSON.stringify(ob1));
console.log(JSON.parse(JSON.stringify(ob1)));
let str = "some";
str.test = 2;
console.log(str.test);

let num = 3;
console.log(num.toString(2));
var a = 0.1;
var b = 0.2;
if ((a + b).toFixed(2) == 0.3) {
  console.log("yes equal");
} else {
  console.log("not equal");
}

console.log(Infinity);
if (Infinity === Infinity) {
  console.log("yes infy === infy");
}

var ar = [1, -2, 3, 4, -9, 6];
let maxSum = ar[0];
let maxSumSoFar = ar[0];
for (let i = 1; i < ar.length; i++) {
  maxSumSoFar = Math.max(maxSumSoFar + ar[i], ar[i]);
  maxSum = Math.max(maxSumSoFar, maxSum);
}
console.log(maxSum);

// filter
console.log(
  ar.filter((x) => {
    return x % 2 == 0;
  })
);

// map
console.log(
  ar.map((x) => {
    return x * 3;
  })
);

// reduce
console.log(
  ar.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
  }, 0)
);

// Anagram

ar1 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
const isAna = function (s1, s2) {
  const ob1 = {};
  const ob2 = {};
  for (let i = 0; i < s1.length; i++) {
    if (ob1[s1[i]]) {
      ob1[s1[i]]++;
    } else {
      ob1[s1[i]] = 1;
    }
  }
  for (let i = 0; i < s2.length; i++) {
    if (ob2[s2[i]]) {
      ob2[s2[i]]++;
    } else {
      ob2[s2[i]] = 1;
    }
  }
  console.log(ob1);
  console.log(ob2);
  for (x in ob1) {
    console.log(x, " :  ", ob1[x], " and ", ob2[x]);
    if (ob2[x] != ob1[x]) {
      console.log(x, " 1 : ", ob1[x], " ob2 :", ob2[x]);
      return false;
    } else {
      return false;
    }
  }
  return true;
};
const checkAna = function (ar) {
  let output = [];
  for (let i = 0; i < ar.length; i++) {
    let curr = ar[i];

    for (let j = i + 1; j < ar.length; j++) {
      if (isAna(curr, ar[j])) {
        output.push(ar[j]);
      }
    }
  }
  return output;
};

// console.log(checkAna(ar1));
console.log(isAna("car", "rac"));
var ar2 = ["sopme", "name"];
var [one, two] = ar2;
console.log(one, two);
