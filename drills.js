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

