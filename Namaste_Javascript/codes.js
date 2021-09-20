// palindrome
let str = "kanak";
const isPalindrome = function (str) {
  let i = 0;
  let j = str.length - 1;
  while (i <= j) {
    if (str[i] != str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};
console.log(isPalindrome(str));

// Unique number
let ar = [10, 20, 20, 10, 10, 20, 5, 20];
Array.prototype.unique = function () {
  let mp = new Map();
  //   console.log(this);
  for (let i = 0; i < this.length; i++) {
    if (mp.has(this[i])) {
      mp.set(this[i], mp.get(this[i]) + 1);
    } else {
      mp.set(this[i], 1);
    }
  }
  mp.forEach((value, x) => {
    console.log(x, " ", value, " ");
  });
};
ar.unique();

const ob = {
  name: "Apple",
};
const isEmpty = function (ob) {
  for (x in ob) {
    return false;
  }
  return true;
};

console.log(isEmpty(ob));

let ar2 = [1, 2, 3, 4, 5, 6, 3];
ar2 = [...ar2, "something"];
console.log(ar2);
console.log(ar2.slice(2, 4));
var a;
console.log(a === undefined ? " yes " : " no");

const ar3 = [1, 3, 4, [5, 6, 7, [8, [3], 9]]];
console.log(ar3);

const flatArray = function (ar) {
  var stack = [...ar];
  var res = [];
  console.log(stack);
  while (stack.length) {
    const curr = stack.pop();
    if (Array.isArray(curr)) {
      stack.push(...curr);
    } else {
      res.push(curr);
    }
  }
  return res;
};
console.log(flatArray(ar3));
