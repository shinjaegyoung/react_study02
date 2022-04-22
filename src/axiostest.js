// Axios 란 ?
// 자바 스크립트로 비동기 통신을 할 수 있도록 해주는 모듈 
// 자바스크립트에는 기본적으로 비동기 통신을 위한 XHR(XML Http Request)
// XHR을 사용하여 ajax통신하는데 사용함 (사용법이 어려움)
// 그래서 쉽게 나온게 jquery를 사용 시 ajax통신을 쉽게 할 수 있음
// frontend 개발 시 jquery의 각종 문제점 때문에 jquery를 사용하지 않게 되면서 비동기 통신을
// 쉽게 할 수 있는 방법이 필요함 
// React 및 Vue.js 에서는 Axios 모듈을 사용하여 비동기 통신을 구현함

// Axios 설치
// > yarn add axiosy


// axios 사용법
// axios.통신방식(서버주소).then(콜백함수).catch(콜백함수);

const axios = require('axios').default;

axios
.get('https://yts-proxy.now.sh/list_movies.json')
.then((response) => {
    console.log(response);
})
.catch((error)=> {
    console.log(error);
});



