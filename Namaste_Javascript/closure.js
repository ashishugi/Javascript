// function x() {
//   var a = 10;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();
// y();
// x.y();
// Returning a function

function x(num) {
  var a = num;
  function y() {
    console.log(a);
  }
  return y;
}
var z = x(100);
z();
console.log(z);
