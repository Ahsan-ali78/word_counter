import inquirer from "inquirer"

const answers: {
    sentence: string
} = await inquirer.prompt([
   {
    name: "sentence",
    type: "input",
    message: "enter your sentence to perform words count:"
   }    
])
const words = answers.sentence.trim().split(" ")

console.log(words)

console.log(`your sentence word count is: ${words.length}`)