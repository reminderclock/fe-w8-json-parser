# fe-w8-json-parser

## Server 환경 구성

- [x] Express 를 설치하고 로컬서버환경을 구성한다.

## JavaScript

- [x] Webpack, babel을 직접 구성한다. (기존 구성 재활용),
- 객체지향, 함수형 상관 없음.
- 하나의 커다란 함수(객체)로 만들지 않고 모듈을 나눈다.
  - Tokenizer 모듈
  - Lexer 모듈
  - Parser 모듈
- TypeScript를 babel에 연동하고, 부분적으로 적용해본다.

## 힌트

문제를 단순화 해서 해결해본다. 예를들어 이런 문자열부터 분석해보기
const data = "[1]"

## Parser Array 를 어떻게 만들까

1. json data가 오면 시작과 끝에 `을 추가한다. (string으로 변환)
2. split(' '), whitespace를 기준으로 잘라서 배열을 만든다.
3. 각 요소를 탐색하며 data를 파싱한다.
   3-1. data 형식
   - {
     type: "object",
     child: ""
     }
