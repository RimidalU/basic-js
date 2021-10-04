import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  array: [],

  getLength() {
    return this.array.length;
  },

  addLink( value) {
    this.array.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if ( !this.array[position - 1]) {
      this.array.length = 0;
      throw new Error("You can't remove incorrect link!");
    } else {
      this.array.splice(position - 1, 1);
      return this;
    }
  },
  
  reverseChain() {
    this.array.reverse();
    return this;
  },

  finishChain() {
    let chain = this.array.join("~~");
    this.array.length = 0;
    return chain;
}
};
