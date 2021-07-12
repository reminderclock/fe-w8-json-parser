export default class Lexer {
  constructor(tokenList) {
    this.tokenList = tokenList;
    this.lexerList = [];
    this.stack = [];
  }

  getLexerList() {
    this.tokenList.forEach((el, idx) => this.pushList(this.getTokenElement(el, idx)));
    debugger;
    return this.lexerList;
  }
  pushList(el) {
    this.lexerList.push(el);
  }

  getTokenElement(element, index) {
    const elementObj = {};
    if (element === '[') {
      (elementObj.type = 'arrayOpen'), (elementObj.value = element);
      return elementObj;
    }
    if (element === ']') {
      (elementObj.type = 'arrayClose'), (elementObj.value = element);
      return elementObj;
    }
    if (element === '{') {
      (elementObj.type = 'objectOpen'), (elementObj.value = element);
      // this.stack.push(element);
      return elementObj;
    }
    if (element === '}') {
      (elementObj.type = 'objectClose'), (elementObj.value = element);
      // this.stack.push(element);
      return elementObj;
    }
    if (element === ':') {
      (elementObj.type = 'colon'), (elementObj.value = element);
      // this.stack.push(element);
      return elementObj;
    }
    if (!isNaN(Number(element))) {
      if (this.tokenList[index - 1] === ':') {
        (elementObj.type = 'number'), (elementObj.propType = 'objectValue'), (elementObj.value = element);
        // this.stack.pop();
      } else {
        (elementObj.type = 'number'), (elementObj.value = element);
      }
      return elementObj;
    }

    if (typeof element === 'string') {
      if (this.tokenList[index + 1] === ':') {
        (elementObj.type = 'string'), (elementObj.propType = 'objectKey'), (elementObj.value = element);
        // this.stack.pop();
      } else if (this.tokenList[index - 1] === ':') {
        (elementObj.type = 'string'), (elementObj.propType = 'objectValue'), (elementObj.value = element);
        // this.stack.pop();
      } else {
        (elementObj.type = 'string'), (elementObj.value = element);
      }
      return elementObj;
    }
    if (typeof element === 'boolean') {
      (elementObj.type = 'boolean'), (elementObj.value = element);
      return elementObj;
    }
    if (element === null) {
      (elementObj.type = 'null'), (elementObj.value = element);
      return elementObj;
    }

    return elementObj;
  }
}
