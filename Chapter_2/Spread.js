// ...args is the rrest operator and it is expecting different arguments
function sum2(names, ...args) {
  console.log(arguments);
  let ans = 0;
  for (let i in args) {
    ans += args[i];
  }
  console.log(ans);
  console.log(names);
}

let arr = [10, 20, 30];
//sum2("SHIBU SINGH", arr); // wrong

// ...arr is the spreaad operator
sum2("SHIBU SINGH", ...arr);
