'use strict';

function urlify(string){
  let result = '';
  if (string.includes(' ')) {
    result = string.replace(/ /g, '%20');
    return result;
  } else {
    return string;
  }
}

// console.log(urlify('tauhida parveen with more spaces'));

function filterArr(array){
  const filtered = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] >=5){
      filtered.push(array[i]);
    }
  }
  return filtered;
}

// console.log(filterArr([14, 3, 56, 1, 13]));

function currentMaxSum(array){
  let currentMax = 0;
  let total = 0;
  for(let i = 0; i < array.length; i++){
    total += array[i];
    if(total > currentMax){
      currentMax = total;
    }
  }
  return currentMax;
}

// console.log(currentMaxSum([4, 6, -3, 5, -2, 1]));

function merge(arr1, arr2){
  let result = arr1.concat(arr2);
  console.log(result);
  return result.sort(function(a,b){
    return a-b;
  });
}

// console.log(merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

function removeChars(string, textToRemove){
  let result= string;
  for(let i = 0; i < textToRemove.length; i++) {
      console.log(`This is the ${i} run of the loop`);
      console.log(textToRemove[i]);
    for(let j = 0; j < string.length; j++){
      result.replace(textToRemove[i], 'hi');
      console.log(string[j]);
    }
  }
  return result;
}

console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));