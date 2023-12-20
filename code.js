/* https://leetcode.com/problems/two-sum/

Given an array of integers, return indices of the
two numbers such that they add up to a specific target.

You may assume that each input would have EXACTLY ONE SOLUTION,
and you may not use the same element twice.

the array is unsorted, contains no floats, and there may be duplicate values

Given arr = [2, 11, 7, 15], target = 9,
Because arr[0] + arr[2] = 2 + 7 = 9
return [0, 2].

example 1
         0  1   2  3
given: [2, 11, 7, 15]
target: 9
output: [0,2]

example 2
        0  1 2
given: [3,2,4]
target: 6
output: [1,2]

example 3
given: [3,3]
target: 6
output: [0,1]

*/

function twoSum(arr, target) {
    //Your code here

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }

    return null;


    // const numMap = {};

    // for (let i = 0; i < arr.length; i++) {
    //     const complement = target - arr[i];

    //     if (numMap.hasOwnProperty(complement)) {
    //         return [numMap[complement], i];
    //     }

    //     numMap[arr[i]] = i;
    // }
    // return numMap
}

console.log(twoSum([2, 11, 7, 15], 9)); // [0,2]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]

// if you finish early -- can you do this without nesting for loops?


// function twoSumOneLoop(arr, target) {
//     //Your • code • here
//     var seen = {}•//hash-map object-will-allow-0(1) •Look-up.time.of.already-seen-values. *
//     // • we •will • store •KVPs with the key being the value from the array, •and the value •being its index•
//     for • (var i = 0; i ‹ arr.length; i++){//Loop-through-the-array
//     - var currentValue = arr[il; // initialize-current-value-to-consider
//     var delta = target - currentValue; //• Let deLta be the value needed to reach target with currentValue if (seen.hasOwnProperty(delta)){•//•if-delta-exists-in-our-hash-map• (•0(1)-Look•up-time)•//-if (seen[delta])
//     return [seen[deltal, i] //•return•an array containing the two indices
//     seen[currentValue] = i; // otherwise, add current value and its index-as a KVP. to •our seen object
