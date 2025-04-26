/* Chapter 2| Arrays
Q4. Create an object that stores individual letters in an array and has a function for
 displaying the letters as a single word. */

function LetterAsWord() {
  this.collectLetters = []; //collecting letters
  this.add = add;
  this.displayWord = displayWord;
}
function add(alphabet) {
  return this.collectLetters.push(alphabet); //adds alphabet to an collectLetters array
}
function displayWord() {
  return this.collectLetters.join("");
}
const letter = new LetterAsWord(); //letter object created by a constructor function
letter.add("I");
letter.add("L");
letter.add("Y");
console.log(letter.collectLetters); //Displaying an array
console.log(letter.displayWord()); // Displaying letters as a word
