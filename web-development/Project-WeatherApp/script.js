// f9cdce05e49602cacc7433be245bc6f0
// BACKGROUND WEATHER ANIMATIONS
// 1) Light Raining no Lightning

var makeItRain = function() {
    //clear out everything
    $('.rain').empty();

    var increment = 0;
    var drops = "";
    var backDrops = "";

    while (increment < 100) {
      //couple random numbers to use for various randomizations
      //random number between 98 and 1
      var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
      //random number between 5 and 2
      var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
      //increment
      increment += randoFiver;
      //add in a new raindrop with various randomizations to certain CSS properties
      drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
      backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    }

    $('.rain.front-row').append(drops);
    $('.rain.back-row').append(backDrops);
  }

  $('.splat-toggle.toggle').on('click', function() {
    $('body').toggleClass('splat-toggle');
    $('.splat-toggle.toggle').toggleClass('active');
    makeItRain();
  });

  $('.back-row-toggle.toggle').on('click', function() {
    $('body').toggleClass('back-row-toggle');
    $('.back-row-toggle.toggle').toggleClass('active');
    makeItRain();
  });

//   $('.single-toggle.toggle').on('click', function() {
//     $('body').toggleClass('single-toggle');
//     $('.single-toggle.toggle').toggleClass('active');
//     makeItRain();
//   });

  makeItRain();





//   Main Weather icon Tilting Effect
const card = document.getElementById('weather-icon');
const glass = document.querySelector(".inner-container");

card.addEventListener("mousemove",(event)=> {
    const pointerX = event.clientX;
    const pointerY = event.clientY;

    const cardRec = card.getBoundingClientRect();

    const halfWidth = cardRec.width / 2;
    const halfHeight = cardRec.height / 2;

    const cardCenterX = cardRec.left + halfWidth;
    const cardCenterY = cardRec.top + halfHeight;

    const deltaX = pointerX - cardCenterX;
    const deltaY = pointerY - cardCenterY;

    const rx = deltaY / halfHeight;
    const ry = deltaX / halfWidth;
    const distanceToTheCenter = Math.sqrt(Math.pow(deltaX,2) + Math.pow(deltaY, 2));
    const maxDistance = Math.max(halfWidth,halfHeight);
    const degree = (distanceToTheCenter * 10) / maxDistance;
    card.style.transform = `perspective(400px) rotate3D(${-rx}, ${ry}, 0, ${degree}deg)`;
    // glass.style.transform = `translate(${-ry * 100}%, ${-rx * 100}%) scale(2.4)`;
    // glass.style.opacity = (distanceToTheCenter * 0.6) / maxDistance;
});
card.addEventListener("mouseleave",()=> {
    card.style = null;
    // glass.style.opacity = 0;
});



// // Using weather API

// function getWeather(cityName) {
//     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=f9cdce05e49602cacc7433be245bc6f0`)
//     .then(function (response) {
//       console.log(response.status );
//       console.log(response.statusText );
//       console.log(response);

//       return response;
//     })
//     .catch(function (error) {
//       alert("Check you internet connection.")
//       console.log(error);
//     })

// }

// // Getting Userinput for City Name
// let data = ``;
// let isHandlingInput = false; // Flag to prevent multiple executions

// function search() {
//     let searchBar = document.querySelector(".container-top .search .city-name");
//     let input = document.querySelector(".container-top .search .input-field");

//     // Show the input field and hide the search bar on click
//     searchBar.addEventListener("click", () => {
//         searchBar.style.display = "none";
//         input.style.display = "block";
//         input.focus(); // Ensure the input gets focused
//     });

//     // Handle hiding on blur and updating the value
//     input.addEventListener("focusout", (event) => {
//         handleInputClose(event);
//     });

//     // Handle hiding and updating the value when pressing Enter
//     input.addEventListener("keypress", (event) => {
//         if (event.key === "Enter") {
//             handleInputClose(event);
//         }
//     });

//     // Common function to handle input close
//     function handleInputClose(event) {
//         if (isHandlingInput) return; // Prevent multiple executions
//         isHandlingInput = true;

//         const container = document.querySelector(".container-top .search");
//         if (!container.contains(event.relatedTarget) || event.type === "keypress") {
//             searchBar.style.display = "block";
//             input.style.display = "none";
//             if (input.value.trim() !== "") {
//                 searchValue = input.value; // Update the global variable
//                 searchBar.innerText = input.value; // Display the input value
//                 console.log("Search Value:", searchValue); // Log updated value
//                 getWeather(input.value);
//             }
//         }

//         // Reset the flag after processing
//         setTimeout(() => {
//             isHandlingInput = false;
//         }, 0);
//     }
// }

// search();
// setTimeout(()=>{

//     console.log("he",data);
// }, 0 )


// Function to fetch weather data from OpenWeather API
function getWeather(cityName) {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=f9cdce05e49602cacc7433be245bc6f0`)
        .then(function (response) {
            console.log("API Response Status:", response.status);
            console.log("API Response Text:", response.statusText);
            console.log("Weather Data:", response);

            // Update the global variable with the latest weather data
            data = response.data;

            // Log the latest data
            console.log("Updated Weather Data:", data);
        })
        .catch(function (error) {
            alert("Check your internet connection or city name.");
            console.log("Error:", error);
        });
}

// Handling user input for city name and calling the weather API
let data = ``; // To store the weather data globally
let isHandlingInput = false; // Flag to prevent multiple executions

function search() {
    let searchBar = document.querySelector(".container-top .search .city-name");
    let input = document.querySelector(".container-top .search .input-field");

    // Show the input field and hide the search bar on click
    searchBar.addEventListener("click", () => {
        searchBar.style.display = "none";
        input.style.display = "block";
        input.focus(); // Ensure the input gets focused
    });

    // Handle hiding on blur and updating the value
    input.addEventListener("focusout", (event) => {
        handleInputClose(event);
    });

    // Handle hiding and updating the value when pressing Enter
    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            handleInputClose(event);
        }
    });

    // Common function to handle input close and API calls
    function handleInputClose(event) {
        if (isHandlingInput) return; // Prevent multiple executions
        isHandlingInput = true;

        const container = document.querySelector(".container-top .search");
        if (!container.contains(event.relatedTarget) || event.type === "keypress") {
            searchBar.style.display = "block";
            input.style.display = "none";
            if (input.value.trim() !== "") {
                const searchValue = input.value; // Get the current input value
                searchBar.innerText = searchValue; // Display the input value
                console.log("Search Value:", searchValue); // Log updated value

                // Call the API to get weather details
                getWeather(searchValue);
            }
            input.value = ""; // Clear the input field for new entries
        }

        // Reset the flag after processing
        setTimeout(() => {
            isHandlingInput = false;
        }, 0);
    }
}

// Initialize the search functionality
search();

// Example usage to check the updated weather data
setTimeout(() => {
    console.log("Global Weather Data:", data);
}, 2000);


// for Rain

function checkWeatherCondition(data) {
    // Query selectors for dynamic updates
    let weatherIcon = document.querySelector(".basic .weather-icon");
    let tempIcon = document.querySelector("details img");
    let temp = document.querySelector("details .temp .temperature");
    let feels = document.querySelector("details .feels");
    let weather = document.querySelector("details .weather");

    // Update common details
    document.querySelector(".div2 .unit .values .data").innerText = `${data.main.humidity}%`;
    document.querySelector(".div3 .unit .values .val1").innerText = `${data.wind.speed} m/s`;
    document.querySelector(".div3 .unit .values .val2").innerText = `${data.wind.deg}°`;
    document.querySelector(".div4 .unit .values .value").innerText = `${data.main.pressure} hPa`;
    document.querySelector(".div4 .unit .values .val1").innerText = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    document.querySelector(".div4 .unit .values .val2").innerText = new Date(data.sys.sunset * 1000).toLocaleTimeString();

    // Validate weather data
    if (!data || !data.weather || data.weather.length === 0) {
        console.log("Invalid weather data provided.");
        return;
    }

    // Main weather condition and description
    const mainCondition = data.weather[0].main.toLowerCase(); // e.g., "rain", "snow", "clear"
    const description = data.weather[0].description.toLowerCase();

    console.log(`Weather Condition: ${mainCondition}, Description: ${description}`);

    // Handle different weather conditions
    if (mainCondition === "rain") {
        weatherIcon.src = `./images/raining-cloud.png`;
        temp.innerText = `${data.main.temp}°C`;
        feels.innerText = `Feels like ${data.main.feels_like}°C`;
        weather.innerText = `${data.weather[0].main}`;
        document.querySelector(".unit .values").innerText = `${data.weather[0].description}`;

        // Additional rain effects
        if (description === "light rain" || description === "moderate rain") {
            document.querySelector(".rain.front-row").style.display = "block";
            document.querySelector(".rain.back-row").style.display = "block";
            let weatherIcon2 = document.querySelector(".container-bottom .div1 .icon1 img");
            weatherIcon2.src = `./images/raining-cloud.png`;
        }
    } else if (mainCondition === "snow") {
        weatherIcon.src = `./images/snowfall-cloud1.png`;
        temp.innerText = `${data.main.temp}°C`;
        feels.innerText = `Feels like ${data.main.feels_like}°C`;
        weather.innerText = `${data.weather[0].main}`;

        // Additional snowfall animations
        document.querySelector(".snow.effect").style.display = "block";
    } else if (mainCondition === "clear") {
        weatherIcon.src = `./images/clear-sky.png`;
        temp.innerText = `${data.main.temp}°C`;
        feels.innerText = `Feels like ${data.main.feels_like}°C`;
        weather.innerText = `${data.weather[0].main}`;

        // Hide rain/snow effects if previously active
        document.querySelector(".rain.front-row").style.display = "none";
        document.querySelector(".rain.back-row").style.display = "none";
        document.querySelector(".snow.effect").style.display = "none";
    } else if (mainCondition === "clouds") {
        weatherIcon.src = `./images/cloudy.png`;
        temp.innerText = `${data.main.temp}°C`;
        feels.innerText = `Feels like ${data.main.feels_like}°C`;
        weather.innerText = `${data.weather[0].main}`;
    } else if (mainCondition === "thunderstorm") {
        weatherIcon.src = `./images/thunderstorm.png`;
        temp.innerText = `${data.main.temp}°C`;
        feels.innerText = `Feels like ${data.main.feels_like}°C`;
        weather.innerText = `${data.weather[0].main}`;
        document.querySelector(".thunderstorm.effect").style.display = "block";
    } else if (["mist", "haze", "fog"].includes(mainCondition)) {
        weatherIcon.src = `./images/foggy.png`;
        temp.innerText = `${data.main.temp}°C`;
        feels.innerText = `Feels like ${data.main.feels_like}°C`;
        weather.innerText = `${data.weather[0].main}`;
        document.querySelector(".fog.effect").style.display = "block";
    } else {
        console.log("Unusual weather condition detected.");
    }
}

// Example Usage: Check weather conditions
checkWeatherCondition(data);

