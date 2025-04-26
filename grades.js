/* Q1. Create a grades object that stores a set of student grades in an object. Provide a
  function for adding a grade and a function for displaying the student’s grade average.
*/

function Grades() {
  this.studentGrades = []; //stores grade data
  this.add = add;
  this.gradeAverage = gradeAverage;
}
function add(grade) {
  return this.studentGrades.push(grade); //adding grade into studentGrades Array.
}
function gradeAverage() {
  let total = 0;
  //loop runs till length of studentGrades array and gives sum of elements of an array and store in total.
  for (let i = 0; i < this.studentGrades.length; i++) {
    total += this.studentGrades[i];
  }
  return (total / this.studentGrades.length).toFixed(2); //returns the average
}
const student = new Grades(); //data collection of function constructor.
student.add(55);
student.add(60);
student.add(70);
student.add(100);
console.log("Student Grade Average: " + student.gradeAverage()); //printing student grade average.
