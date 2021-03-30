import '../scss/style.scss';
import MainView from '../view/view';
import packageJson from '../../package.json';
import { inputTitle } from './const';

const packageJsonData = JSON.stringify(packageJson);
console.log(packageJsonData);

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

