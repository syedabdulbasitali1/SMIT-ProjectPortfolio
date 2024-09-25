console.log("Hello, Javascript");


// Use below code if you want to run code in terminal with Node.js
// First you need to use Node.js module to take userInput in terminal
// 1. Import the readline module:
// const readline = require('readline');

// 2. Create an interface for reading input:
// This setup an interface to read from standard
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // 3. Prompt user input
// rl.question('Enter a string:',
// (answer) => {
//     console.log('You entered: ${answer}');
//     rl.close();
// });


// If you want to run this code in browser you need to link this file in you HTML than uncomment below prompt
// also you can run this code in terminal with VS-code extention called code run.
let userInput = 64;
// prompt("Enter a number");

if(userInput % 2 === 0){
    console.log("Your number is EVEN.");
}
else{
    console.log("Your number is ODD.");
}
