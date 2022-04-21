// INHERITANCE

// class employee {
//   constructor(name1) {
//     this.emp_name = name1;
//     console.log("CONSTRUCTOR:EMPLOYEE ");
//   }
//   info() {
//     console.log("Employee NAme : " + this.emp_name);
//   }
// }

// class manager extends employee {
//   info() {
//     super.info();
//     console.log("Manager NAme : " + this.emp_name);
//   }
// }

// // let emp1 = new employee()
// let man1 = new manager("Shibu"); // constructor call be called in employee class
// man1.info();

class employee {
  constructor(name1, age, sal) {
    this.emp_name = name1;
    this.emp_age = age;
    this.emp_sal = sal;
    console.log("CONSTRUCTOR:EMPLOYEE ");
  }
  info() {
    console.log(
      "Employee NAme : " +
        this.emp_name +
        " HIS SALERY IS:" +
        this.emp_sal +
        " HIS AGE IS:" +
        this.emp_age
    );
  }
}

class manager extends employee {
  info() {
    let pa = 2100;
    let bonus = 500;
    let totalSal = pa + bonus + this.emp_sal;
    console.log(
      "Employee NAme : " +
        this.emp_name +
        " HIS SALERY IS:" +
        totalSal +
        " HIS AGE IS:" +
        this.emp_age
    );
  }
}

// let emp1 = new employee()
let man1 = new manager("Shibu", 25, 20000); // constructor call be called in employee class
man1.info();
