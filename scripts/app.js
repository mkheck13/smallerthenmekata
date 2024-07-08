// Write a function that given, an array arr, returns an array containing at each index i the amount 
// of numbers that are smaller than arr[i] to the right.

// For example:

// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]


// for this one I feel like we are going to use
// .map() , .slice() and .filter()
//  we will use the .map() method to transform each element of the array and return a new array of the same length
// for each element (n) in the array and its index (i), it creates a slice of the array from the current index to the end using the .slice(i)
// we then applie the .filter() to the slice, keeping only the elements that are smaller then the current element (n)
// now we return the length of the filtered array which gives us the count of the smaller elements 
function smaller(nums){
    return nums.map((n, i) => {
        return nums.slice(i).filter(v => v < n).length
    });
}