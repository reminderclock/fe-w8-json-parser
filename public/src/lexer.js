export default class Lexer {
  constructor(tokenList) {
    this.tokenList = tokenList;
    this.lexerList = [];
    this.stack = [];
  }

  getLexerList() {
    this.tokenList.forEach((el) => this.pushList(this.getTokenElement(el)));
    debugger;
    return this.lexerList;
  }
  pushList(el) {
    this.lexerList.push(el);
  }

  getTokenElement(element) {
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
      this.stack.push(element)
      return elementObj;
    }
    if (element === '}') {
      (elementObj.type = 'objectClose'), (elementObj.value = element);
      this.stack.push(element)
      return elementObj;
    }
    if (element === ':') {
      (elementObj.type = 'colon'), (elementObj.value = element);
      this.stack.push(element)
      return elementObj;
    }
    if (!isNaN(Number(element))) {
      if (this.stack[0] === ':') {
        (elementObj.type = 'number'), (elementObj.propType = 'objectValue'), (elementObj.value = element);
        this.stack.pop();
      }
      else {
        (elementObj.type = 'number'), (elementObj.value = element);
      }
      return elementObj;
    }
    if (typeof element === 'string') {
      if (this.stack.length % 2 !== 0) {
        (elementObj.type = 'string'), (elementObj.propType = 'objectKey'), (elementObj.value = element);
        this.stack.pop();
      }
      else if (this.stack[0] === ':') {
        (elementObj.type = 'string'), (elementObj.propType = 'objectValue'), (elementObj.value = element);
        this.stack.pop();
      }
      else {
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
