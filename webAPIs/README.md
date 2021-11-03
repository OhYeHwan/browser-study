# Web APIs

- API

  - Application Programming Interfaces
  - 응용프로그램에서 사용할 수 있도록, 운영 체제나 프로그래밍 언어가 제공하는 기
    능을 제어할 수 있게 만든 인터페이스를 뜻한다.
  - 개발자가 복잡한 기능을 보다 쉽게 만들 수 있도록 프로그래밍 언어로 제공되는구
    성
  - 어떤 클래스안에서 제공하는 함수도 API라고 할 수 있다.

<br></br>

- WEB APIs
  - 브라우저 자체에서 제공하는 API
  - DOM(Document Object Model) APIs : 웹페이지에 있는 요소를 컨트롤 하는 API
  - Network APIs : 서버통신 API
  - Graphics APIs : 그래픽 관련 API
  - Audio/Video APIs : 멀티미디어 관련 API
  - Device APIs
  - File APIs
  - Storage APIs

<br></br>

- Http
  - Hypertext Transfer Protocal
  - 웹클라이언트와 서버가 어떻게 통신하는지 통신규약에 대해서 정의해 놓은 것
  - request/response 방식
- Https
  - Hypertext Transfer Protocal Secure
  - 보안처리
  - 사용자의 권한 요청이나, HTTPs를 요구하는 Web APIs가 있다.

<br></br>

- 브라우저 구조

  - window
    - DOM
      - document
    - BOM (Browser Object Model)
      - navigator
      - location
      - ...
    - JavaScript

- window
  - 브라우저에서 글로벌 오브젝트(최상위오브젝트)
  - "window.function" 으로 쓰지않고 "function" 만 써도 사용된다.

<br></br>

- window.screen : 모니터 사이즈
- window.outer : 브라우저 전체
- window.inner : 브라우저 내부 페이지
- documentElement.clientWidth : 스크롤바 제외 순수 페이지
