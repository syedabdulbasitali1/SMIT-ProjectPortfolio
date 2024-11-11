console.log("Hello, JavaScript");

function percentage(array) {
    let sum = 0;
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    for (let j = 0; j < array.length; j++) {

        arr[j] = (array[j] / sum) * 100
    }
    return arr;
}

var array = [1, 2, 3, 4, 5, 6];
console.log(percentage(array));
