import readLine from 'node:readline';
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter your date of birth (e.g., May 12): ", input => {
    let [monthInput, dayInput] = input.split(' ');
    let userMonth = monthInput.toLowerCase();
    let userDay = parseInt(dayInput);

    // Current date details
    let today = new Date();
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth();  // 0-based index
    let currentDate = today.getDate();

    // Arrays for months and day names
    const monthNames = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Find user month index
    let birthMonthIndex = monthNames.indexOf(userMonth);
    if (birthMonthIndex === -1 || isNaN(userDay) || userDay < 1 || userDay > 31) {
        console.log("Invalid date format. Please enter as 'Month Day' (e.g., May 12).");
        rl.close();
        return;
    }

    // Create birthday date object for this year and check if it's passed
    let birthdayThisYear = new Date(currentYear, birthMonthIndex, userDay);
    let hasBirthdayPassed = today > birthdayThisYear;

    // If the birthday has passed, calculate for next year
    let nextBirthday = hasBirthdayPassed
        ? new Date(currentYear + 1, birthMonthIndex, userDay)
        : birthdayThisYear;

    // Calculate time difference in days and months
    let timeDiff = nextBirthday - today;
    let daysRemaining = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let monthsRemaining = (nextBirthday.getFullYear() - today.getFullYear()) * 12 + (nextBirthday.getMonth() - today.getMonth());

    // Get the day of the week for the next birthday
    let birthdayWeekday = dayNames[nextBirthday.getDay()];

    // Output the results
    if (hasBirthdayPassed) {
        console.log(`Your birthday this year has passed.`);
        console.log(`Your next birthday will be on ${nextBirthday.toDateString()} (${birthdayWeekday}).`);
        console.log(`Time remaining: ${monthsRemaining} months and ${daysRemaining % 30} days.`);
    } else {
        console.log(`Your upcoming birthday is on ${nextBirthday.toDateString()} (${birthdayWeekday}).`);
        console.log(`Time remaining: ${monthsRemaining} months and ${daysRemaining % 30} days.`);
    }

    rl.close();
});
