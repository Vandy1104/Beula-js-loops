console.log('loops');

// Loops enable repetition of certain statements

// 3 types of Loops
// for loop ----- when you know certainly how many times you want to repeat
// while loop --- when the number of time to repeat is not known, executes only when condition is true
// do while loop --- similar to while loop but executes atleast once before evaluating the condition

//prompt() will take a string input from user
//parseInt() will convert a string into integer value
var names=['Chris','Kristine','Vandy'];
var salaries=[1999,1056.27,340.79];
console.log(names);

// var n=parseInt(prompt('Please enter the number of employees'));


// for (var i=0; i<n; i++){
//
//    var name = prompt('Enter the name of an employee');
//
//   names.push(name);
//
//   var salary = parseFloat(prompt('Enter the salary of the employee'));
//   salaries.push(salary);
//
//   // document.getElementById('result').innerHTML   += '</br>the index variable\'s value is ' + i;
// }
console.log(salaries);
var minSalary = 1000000;
for (var salaryCount = 0; salaryCount<3; salaryCount++) {
  if (salaries[salaryCount] < minSalary) {
    minSalary = salaries[salaryCount];
  }
}

document.getElementById('result').innerHTML   += '</br> The lowest salary is ' + minSalary;
