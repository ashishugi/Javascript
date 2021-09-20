// await comes inside the async function and async function always return a  promise
import { fetch } from "node-fetch";
const test = async function () {
  let res = await fetch("https://api.github.com/users/ashishugi");
  if (res) {
    console.log(res);
    return "done";
  }
};
test();
// test.then((res) => {
//   console.log("done");
// });
