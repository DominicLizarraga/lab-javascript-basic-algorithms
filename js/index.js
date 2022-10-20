// Iteration 1: Names and Input
//
const hacker1 = 'dominic';
console.log(`The driver's name is ${hacker1}`)

const hacker2 = 'guillermo';
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let newWord = hacker1.toUpperCase();
 const newArr = newWord.split('')
    console.log(newArr.join(" "))

    // reverse word 
    let reverseWord = hacker1.split("").reverse().join("");

    console.log(reverseWord)


    // alphabetic order

    if (hacker1 > hacker2) {
        console.log("The driver's name goes first.")
      }
      else if (hacker1 < hacker2) {
        console.log("Yo, the navigator goes first definitely.")
      }
      else {
        console.log("What?! You both have the same name?")
      } 
      
      // lorem ipsum generator

      const paragraphGenerator = ((word) => {
        const numberOfWords = word.split(" ").length
        
        const count = word.split('et').length - 1;
        return `The paragraph has ${numberOfWords} & the letters "et" has repeteated ${count} many times.`
      });
   
      console.log(paragraphGenerator(paragraph))

      // palindrome checker

      const palindromeChecker = ((phrase) => {
        // get unwanted characters ","
        const unwanted = /[\W_]/g;
        // lower case everything and replace the unwanted
        let lowerString = phrase.toLowerCase().replace(unwanted, "");
        // chain the string and reverse 
        let reverseString = lowerString.split("").reverse().join("")
        // verify is the lowerString is equal to reverseString
        return reverseString === lowerString
      });
   
    
    console.log(palindromeChecker("Amor, Roma"));

