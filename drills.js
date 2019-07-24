/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
'use strict';

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

console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

function product(array){
  let output = [];
  for(let i=0; i<array.length; i++){
    let newArray = array.slice();
    let otherValues = newArray.splice(i,1);
    // console.log(newArray[0]* newArray[1]* newArray[2]);
    output.push(newArray[0]* newArray[1]* newArray[2]);
      }
  return output;
}

// console.log(product([1, 3, 9, 4]));

function arraySearch(array){
  let result = [];
  let currentRow = 0;
  let currentColumn = 0;
  for(let i=0; i < array.length; i++){
    currentRow = i;
    if(array[i][0] === 0) {
      console.log('hello');
    }
  }
}

const input = [[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]];

console.log(arraySearch(input));
