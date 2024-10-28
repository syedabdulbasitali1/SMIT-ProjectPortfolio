//Get user input ask for date of birth ✅
//Get current date and time from system
//Check difference between user date and current date
//Print the result

import readLine from 'node:readline';

const rl = readLine.createInterface({
    input:process.stdin,
    output:process.stdout,
});
rl.question("Enter of birth\n", input => {
    let userInput = input.split(' ');
    let c = userInput[0].toLowerCase();
    let date = new Date();
    let currentMonth = date.getMonth();
    let currentDay = date.getDay();
    console.log(currentMonth   , currentDay);
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const dayNames = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

    for (let i = 0; i < monthNames.length; i++) {
        if(userInput[0] === monthNames[i])
        {
            console.log("found on index: ",i);
        }
        else if(userInput[0] != monthNames[i]){
            console.log("not found");
        }

    }

    console.log();

        rl.close();
    });
    console.log(this);
    // console.log("Enter your date of birth");
    // const getUserInput = process.argv[3];
    // if(getUserInput)
    // console.log("Usage: month space date.");
