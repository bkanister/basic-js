const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push(`( ${' '} )`)
      return this
    } else {
      this.chain.push(`( ${value} )`)
      return this
    }
  },
  removeLink(position) {
    if (!this.chain[position]) {
      this.chain = []
      throw new Error()
    } else {
      this.chain.splice(position-1, 1)
      return this
    }
  },
  reverseChain() {
    this.chain = this.chain.reverse()
    return this
  },
  finishChain() {
    const completed = this.chain.join('~~')
    this.chain = []
    return completed
  }
};

module.exports = chainMaker;
