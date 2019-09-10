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

//input [1,-1,2,-2,3,5,-7,-8]
//output 8



// console.log(currentMaxSum([4, 6, -3, 5, -2, 1]));

// function merge(arr1, arr2) {
//   let result = arr1.concat(arr2);
//   console.log(result);
//   return result.sort(function(a, b) {
//     return a - b;
//   });
// }

function mergeArrays(arr1, arr2) {
  let arr3 = [];
  let i = 0;
  let j = 0;
  
  while (i<arr1.length && j<arr2.length) {
    if(arr1[i] < arr2[j]){
      arr3.push(arr1[i]);
      i++;
    } else {
      arr3.push(arr2[j]);
      j++;
    }
  }
  while (i<arr1.length){
    arr3.push(arr1[i]);
    i++;
  }
  while (j<arr2.length){
    arr3.push(arr2[j]);
    j++;
  }
  return arr3;
}

// console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

// function removeVowels(string, chars){
//   let newString= '';
//   for (let i=0; i<string.length; i++) {
//     if(!chars.includes(string[i])){
//       newString += string[i];
//     }
//   }
//   return newString;
// }

// console.log(removeVowels('Battle of the Vowels: Hawaii vs. Grozny', ['a', 'e', 'i', 'o', 'u']));

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

function product(array){
  let output = [];
  for(let i=0; i<array.length; i++){
    let newArray = array.slice();
    let otherValues = newArray.splice(i,1);
    output.push(newArray[0]* newArray[1]* newArray[2]);
  }
  return output;
}

// console.log(product([1, 3, 9, 4]));

function arraySearch(array){
  let result = [];
  let r = 0;
  let c = 0;
  let rowZeroes = [];
  let columnZeroes = [];

  for(let i=0; i < array.length; i++){
    for(let j=0; j < array[i].length; j++){
      console.log('hi')
    // if(!rowZeroes.includes(j) && array[i][j]){
    //   rowZeroes.push(j)
    // }
  }
}

 return rowZeroes;
  
  // for(let i=0; i < array.length; i++){
  //   currentRow = i;
  //   if(array[i][0] === 0) {
  //     console.log('hello');
  //   }
  // }
}

const input = 
[
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]
];

// console.log(arraySearch(input));
	
function recur(num) {
	    count++;
	    if(num > 1) {
	        console.log(`Rucursion ${count}`);
	        recur(num - 1);
	        recur(num - 2);
	    }
};
	
// console.log(recur(4));


function stringRotation(str1, str2){
  let obj1 = [];
  let obj2 = [];

  for(let i=0; i<str1.length; i++){
    // console.log(str1[i])
    console.log(Object.keys(obj1))
    console.log(str1[i])
    if(!Object.keys(obj1).includes(str1[i])){
      // console.log('repeat')
    }
    else {
      // obj1.push({str1[i]: 1 })
    }
  }

  console.log(obj1)
}

// stringRotation('amazon', 'azonma')


//input: 'The dog jumped over the fence', 'the'
//output: 2

function countWords(doc, word){
  const arr = doc.toLowerCase()
  const split = arr.split(' ')
  console.log(split)
  let count = 0

  for(let i=0; i<split.length; i++){
    console.log(split[i], word)
    if(split[i] === word){
      count += 1
    }
  }

  return count
}

// let doc = 'The dog jumped over the fence'
// let word = 'the'

// console.log(countWords(doc, word))