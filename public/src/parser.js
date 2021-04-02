export default class Parser {
  constructor(lexerList) {
    this.lexerList = lexerList;
  }
  isObject(element) {
    return element.type === 'objectOpen' ? 'object':'array'
  }
  parse(type) {
    const parentNode = { type: type || `syntaxTree`, child: [] };
    while (this.lexerList.length > 0) {
      const element = this.lexerList.shift();
      if (element.type === 'arrayOpen' || element.type === 'objectOpen') {
        const childNode = this.parse(this.isObject(element));
        // parentNode.type = this.isObject(element);
        parentNode.child.push(childNode);
      } else if (element.type === 'arrayClose' || element.type === 'objectClose') {
        break;
      } else {
        // if (element.value === ":") return;
        parentNode.child.push({ type: this.checkType(element.value), value: element.value });
      }
    }
    return parentNode;
  }
  checkType(value) {
    if (!isNaN(Number(value))) return 'number';
    if (value === null) return 'NULL';
    if (typeof value === 'boolean') return 'boolean';
    if (typeof value === 'string') return 'String';
    if (typeof value === 'object') return 'objectProperty';
  }
}