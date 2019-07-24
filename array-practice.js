'use strict';

const mem = require('./Memory');
//instantiate new Memory instance
const memory = new mem();

class Array{
  constructor(){
    this.length = 0;
    this._capacity = 0;
    this.pointer = memory.allocate(this.length);
  }

  push(value){
    if(this.length >= this.capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    memory.set(this.pointer + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPointer = this.pointer;
    this.pointer = memory.allocate(size);

    memory.copy(this.pointer, oldPointer, this.length);
    memory.free(oldPointer);
    this._capacity = size;

  }

}

module.exports = Array;