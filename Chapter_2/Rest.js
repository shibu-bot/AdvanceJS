/*
forIn function with multiple arguments
function sum() {
  let ans = 0;
  for (let i in arguments) {
    ans += arguments[i];
  }
  return ans;
}
console.log(sum(20, 10, 45, 30));

does not work properly so
console.log(sum("SHIBU", "SINGH", 45, 30, 15));

*/
// REST OPERATOR

function sum2(names, ...args) {
  console.log(arguments);
  let ans = 0;
  for (let i in args) {
    ans += args[i];
  }
  console.log(ans);
  console.log(names);
}

// sum2(20, 10, 45);
sum2("SHIBU SINGH", 45, 30, 15);
