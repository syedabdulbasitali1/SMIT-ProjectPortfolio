console.log("Hello, JavaScript");
// Take an array as an input and return sum of all values
let array =[1,2,3,4,5,6,7,8];
function arrSum(arr) {
    let sum = 0;
    console.log("this is the value of sum:" + sum);
    for(let i = 0;i < arr.length;i++){
        sum += arr[i];
    }
    return sum;
}
// Take array as an input and return array with only even values
function get_even(arr1) {
    let array=[];
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] % 2 === 0){
            array.push(arr1[i]);
        }
    }
    return array;
}
//Take array as an input and return reverse array
function reverse_array(arr3){
    let temp_array=[];
    for (let i = 0,j= arr3.length-1;j >= 0;i++,j--){
        temp_array[i] = arr3[j];
    }
    return temp_array;
}
let matrix = [[1, 2, 3], [4, 5, 6, 7], [7, 8]];
//Take 2D array and print Matrix
function matrix_array(arr4){
    for (let i = 0; i < arr4.length;i++){

        for (let j = 0; j < arr4[i].length;j++){
            console.log(arr4[i][j]);
        }
    }
}

// console.log(arrSum(array));
// console.log(" "+get_even(array));
// console.log(reverse_array(array));
console.log(matrix_array(matrix));
