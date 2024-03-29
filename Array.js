const mem = require('./Memory');
const memory = new mem();

class Array {
  constructor () {
    this.length = 0;
    this._capacity = 0;
    this.pointer = memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity){
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    // this._resize(this.length + 1);
    memory.set(this.pointer + this.length, value);
    this.length++;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw Error('Index error');
    }
    return memory.get(this.pointer + index);
  }

  pop() {
    if(this.length == 0) {
      throw new Error('Index error');
    }
    const value = memory.get(this.pointer + this.length - 1);
    this.length--;
    return value;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    if (this.length >= this._capacity) {
      this._resize((this.length +1) + Array.SIZE_RATIO);
    }

    memory.copy(this.pointer + index + 1, this.pointer + index, this.length - index);
    memory.set(this.pointer + index, value);
    this.length++;
  }

  remove(index){
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    memory.copy(this.pointer + index, this.pointer + 1, this.length - index);
    this.length--;
  }

  _resize(size) {
    const oldPointer = this.pointer;
    this.pointer = memory.allocate(size);

    if (this.pointer === null) {
      throw new Error('Out of memory');
    }

    memory.copy(this.pointer, oldPointer, this.length);
    memory.free(oldPointer);
    this._capacity = size;
  }
};
Array.SIZE_RATIO = 3;

function main(){

  Array.SIZE_RATIO = 3;

  // create an instance of the Array cls
  let arr = new Array();

  //add item
  arr.push(3);
  // arr.push(5);
  // arr.push(15);
  // arr.push(19);
  // arr.push(45);
  // arr.push(10);

  // arr.remove(5);
  // arr.remove(4);
  // arr.remove(3);
  // arr.remove(2);
  // arr.remove(1);
  // arr.remove(0);
 
  // console.log(arr)

  // arr.push("tauhida");

  console.log(arr)
  // console.log(arr.get(0));

}

main();


module.exports = Array;