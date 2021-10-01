import '../scss/style.scss';
import MainView from '../view/view';
import packageJson from '../../package.json';
import { inputTitle } from './const';


const inputData = '[1, 2, null, {"name":"crong", "class":2 }, "raccoon", [4, [ 5, true, 6], 7], 8, "luke"]';

const mainView = new MainView();
mainView.addEvent();
const mainView = new MainView();

const inputData = '["1a3",[null,false,["11",[112233],{"easy" : ["hello", {"a":"a"}, "world"]},112],55, "99"],{"a":"str", "b":[912,[5656,33],{"key" : "innervalue", "newkeys": [1,2,3,4,5]}]}, true]';
const tokenList = [];
// console.log("" === '');
function getTokenList(data) {
  let splitData = data.split('');
  splitData.forEach((el, idx) => {
    switch (el) {
      case '"':
        getTokenString(el, idx);
        break;
      case 'n':
        getTokenNull(el);
      case 'f':
      case 't':
        getTokenBoolean(el);
      case '[':
        getTokenArr(el);
      case '{':
        getTokenObj(el);
      default:
        break;
    }
  }
  );
}

function getTokenArr(el) {
  console.log(el);
}
function getTokenBoolean(el) {
  console.log(el);
}
function getTokenObj(el) {
  console.log(el);
}
function getTokenNull(el) {
  console.log(el);
}



function getTokenString(data, idx) {
  debugger;
  if(data === '"') return;
  let tokenString = '';
  while(data !== '"') {
    tokenString += data;
    idx++;
  }
  return console.log(tokenString);
}
getTokenList(inputData);

const mainView = new MainView();

// import dataJson from "../data/data.js";
const data = `const data = "[1]";`;
const dataJson = [
  '1a3',
  [null, false, ['11', [112233], { easy: ['hello', { a: 'a' }, 'world'] }, 112], 55, '99'],
  { a: 'str', b: [912, [5656, 33], { key: 'innervalue', newkeys: [1, 2, 3, 4, 5] }] },
  true,
];
const jsonString = JSON.stringify(dataJson);
console.log(dataJson);
console.log(jsonString);

const json = {
  name: 'fe-w8-json-parser',
  version: '1.0.0',
  description: '',
  main: 'server.js',
  scripts: {
    build: 'webpack',
    dev: 'webpack serve',
    start: 'nodemon server.js',
  },
};
const jsonArr = [];
for (let data in json) {
  jsonArr.push(data);
  jsonArr.push(json[data]);
}
console.log(jsonArr);

// identifier : 식별하기 위한 이름- > 변수명 dataArr,
// keyword : 미리 지정한 예약어 -> ex) const, if, for, class, while, forEach..
// separator : 글자를 구분하는 문자 -> 구분자 ex) {, }, [, ], ,
// operator : 연산을 위한 심볼 -> ex) + - ,%, =, ;,
// literal : 숫자, 논리, 문자 -> true, 3.14, &&,
// comment : 줄 또는 블록 코멘터리 -> 주석..

const parse = {
  identifier: 'luke',
  keyword: '',
  seperator: '',
  operator: '',
  literal: '',
  comment: '',
};

function tokenParser(data) {
  return isKeyword(data.split(' '));
}
console.log(tokenParser(data));

function isKeyword(data) {
  // 더 많을 수 있음
  const keywordArr = [];
  const keyword = ['const', 'let', 'var', 'if', 'for', 'class', 'while'];
  data.forEach((el) => {
    if (keyword.includes(el)) {
      keywordArr.push(el);
    }
  });

  parse.keyword = keywordArr;
  return isIdentifier(data);
}

function isIdentifier(data) {
  const identifierArr = [];
  const identifier = ['+', '-', '='];
  data.forEach((el, idx) => {
    if (identifier.includes(el)) {
      identifierArr.push(data[idx - 1]);
    }
  });
  parse.identifier = identifierArr;
  console.log(parse);
}

function isSeperator() {}

