// Question 

// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
// Print the decimal value of each fraction on a new line with 6 places after the decimal.

// Example

// Given arr = [1,1,0,-1,1]

// Results are printed as

// 0.400000 Fraction of arr that is positive
// 0.400000 Fraction of arr that is negative
// 0.200000 Fraction of arr that is zeroes


function plusMinus(arr) {

// establish variables that will be incremented and utilized for final calculations
let n = arr.length
let positives = 0
let zeroes = 0
let negatives = 0

// for loop that will increment established variables based on ><= 0
for (let i = 0; i < n; i++){
    if (arr[i] > 0){
        positives++
    }else if (arr[i] < 0){
        negatives++
    }else{
        zeroes++
    }  
}

// prints decimal notation of fractions to the 6th place
console.log(positives/n.toFixed(6))
console.log(negatives/n.toFixed(6))
console.log(zeroes/n.toFixed(6))
}