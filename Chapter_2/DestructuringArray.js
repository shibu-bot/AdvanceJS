/*
  before es6

  let user = ["SHIBU",200];
  let name = user[0];
  let code = user[1];
 */

// let user = ["SHIBU ", 200];
let user = ["SHIBU ", 200, [" male", " female"]];

let [name1, code, gender1, gender2] = user;

console.log(name1 + code + gender1 + gender2);
