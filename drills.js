/* eslint-disable no-unused-vars */
/* eslint-disable no-console */


function urlify(string) {
  let result = '';
  if (string.includes(' ')) {
    result = string.replace(/ /g, '%20');
    return result;
  } else {
    return string;
  }
}

// console.log(urlify('tauhida parveen with more spaces'));

function filterArr(array) {
  const filtered = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 5) {
      filtered.push(array[i]);
    }
  }
  return filtered;
}

// console.log(filterArr([14, 3, 56, 1, 13]));

function currentMaxSum(array) {
  let currentMax = 0;
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
    if (total > currentMax) {
      currentMax = total;
    }
  }
  return currentMax;
}

// console.log(currentMaxSum([4, 6, -3, 5, -2, 1]));

function merge(arr1, arr2) {
  let result = arr1.concat(arr2);
  console.log(result);
  return result.sort(function(a, b) {
    return a - b;
  });
}

// console.log(merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

function removeChars(string, textToRemove) {
  let tempArr = [];
  let newString = [];
  let newStringMod = '';
  let index = 0;
  let j = 0;

  for (let i = 0; i < textToRemove.length; i++) {
    index = Math.abs(textToRemove[i].charCodeAt() - 'a'.charCodeAt());
    if (!tempArr[index]) {
      tempArr[index] = 1;
    }
  }

  for (let i = 0; i < string.length; i++) {
    index = Math.abs(string[i].charCodeAt() - 'a'.charCodeAt());
    if (!tempArr[index]) {
      newString[j++] = string[i];
    }
  }

  for (let i = 0; i < newString.length; i++) {
    newStringMod += newString[i];
  }

  return newStringMod;
}

// console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

function product(array) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    let newArray = array.slice();
    let otherValues = newArray.splice(i, 1);
    // console.log(newArray[0]* newArray[1]* newArray[2]);
    output.push(newArray[0] * newArray[1] * newArray[2]);
  }
  return output;
}

// console.log(product([1, 3, 9, 4]));


// # 11 -------
// 2D Array
//
function setZeroRowCol(matrix){
  const zeroRows = [];
  const zeroCols = [];

  for (let i=0; i<matrix.length; i++) {
    let row = matrix[i];
    for (let j=0; j<row.length; j++) {
      const item = row[j];
      if (item === 0) {
        zeroRows[i] = true;
        zeroCols[j] = true;
      }
    }
  }

  for (let i=0; i<matrix.length; i++) {
    let row = matrix[i];
    for (let j=0; j<row.length; j++) {
      if (zeroRows[i] || zeroCols[j]) {
        row[j] = 0;
      }
    }
  }
  return matrix;
}

let inMatrix = [[1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]];

// console.log(setZeroRowCol(inMatrix));


// [ [ 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0 ],
//   [ 0, 0, 1, 1, 0 ],
//   [ 0, 0, 0, 0, 0 ],
//   [ 0, 0, 1, 1, 0 ] ]


/* ---------------------------------------------
 12. String rotation
Given 2 strings, str1 and str2, write a program that
 checks if str2 is a rotation of str1.

Input: amazon, azonma

Output: False

Input: amazon, azonam

Output: true */


function stringRotation(string1, string2){
  return (string2 + string2).indexOf(string1) !== -1;

}

let inString1 = 'amazon';
let inString2a = 'azonma';
let inString2b = 'azonam';

console.log(stringRotation(inString1, inString2a));
console.log(stringRotation(inString1, inString2b));