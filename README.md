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
