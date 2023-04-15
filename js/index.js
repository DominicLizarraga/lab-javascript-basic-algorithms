// Iteration 1: Names and Input
const hacker1 = "dom"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "tony"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

console.log("-------------")
// Iteration 3: Loops

 console.log(hacker1.toUpperCase().split("").join(" "))

// reverse word 

console.log(hacker1.toUpperCase().split("").reverse().join(" "))


// alphabetic order

if (hacker1 > hacker2) {
  console.log(`The driver's name goes first.`)
}else if (hacker1 < hacker2) {
    console.log(`Yo, the navigator goes first definitely.`)
} else {
  console.log(`What?! You both have the same name?`)
}

 // lorem ipsum generator

const par = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

console.log(`The paragraph is ${par.split(" ").length} words long.`)

let counter = 0
const arr = par.split(" ")

arr.forEach((word) => {
  if (word.includes('et')) {
    counter += 1
  }
});

console.log(`The paragraph has ${counter} times the word "et".`)

// palindrome checker

let phraseToCheck = "race car"

let wordWithoutSpace = phraseToCheck.split(" ").join("")

let wordWithoutSpaceReverse = phraseToCheck.split("").reverse().join("").split(" ").join("")

console.log(wordWithoutSpace)

console.log(wordWithoutSpaceReverse === wordWithoutSpaceReverse)
   
    


