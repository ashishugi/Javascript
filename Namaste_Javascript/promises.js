// Promises
var myPromise = new Promise((resolve, rej) => {
  let condition = false;
  if (condition) {
    return resolve("condition is true");
  } else {
    return rej("condition is false");
  }
});

myPromise
  .then((x) => {
    console.log(x);
  })
  .catch((x) => {
    console.log(x);
  });

// callback

function x(y) {
  console.log("the function is called here");
  y();
}

x(function () {
  console.log("this the function Y");
});

// async

const car = async function () {
  return "Hi , this is the async function";
};
console.log(car());
car().then((value) => {
  console.log(value);
});

// setTimeout(function (params) {
//   console.log("this");
// }, 1000);

// chaining promise

const p = new Promise((res, rej) => {
  let done = true;
  if (done) {
    return res(2);
  } else {
    return rej(1);
  }
});

p.then((x) => {
  return x * 2;
})
  .then((x) => {
    return x * 2;
  })
  .then((x) => {
    console.log(x);
  });
