// CALSS AND OBJECTS

class hello {
  message() {
    console.log("HELLO EVERBODY");
  }
}

let a = new hello();

//a.message();

// class student {
//   constructor() {
//     let name1;
//     console.log("CONSTRUCTOR FUN");
//   }

//   hello() {
//     console.log("HELLO " + this.name1);
//   }
// }

// let std1 = new student();
// std1.name1 = "SHIBU";
// std1.hello();

class student {
  constructor(name1, age) {
    this.std_name = name1;
    this.std_age = age;
    console.log("CONSTRUCTOR FUN");
  }

  hello() {
    console.log("HELLO " + this.std_name + " YOUR AGE IS " + this.std_age);
  }

  static staticFun() {
    console.log("STATIC FUNCTION ");
  }
}

// let std1 = new student("SHIBU", 25);
// std1.hello();
// let std2 = new student("SHYAM", 20);
// std2.hello();

// std2.staticFun(); wrong way of calling stastic funtion

//student.staticFun();
