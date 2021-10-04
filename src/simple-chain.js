import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],

  getLength() {
    return this.str.length
  },

  addLink( value) {
        this.chains.push(`( ${value} )`);
    return this
  },

  removeLink(/* position */) {
  },
  
  reverseChain() {
    this.chains.reverse();
    return this
  },

  finishChain() {
    const result = this.str;
  this.str = '';
  return result;
}
};
