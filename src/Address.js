import React from "react";

// jsx 문법에서는 html 태그를 사용 시 반드시 시작태그와 끝태그가 존재해야한다.
// <img> -> <img></img>, <img /> , <br> -> <br></br>, <br/>
function Address({data}){
    return  <h3>
        나의 친구는 {data}
    </h3>
}

export {Address};

 /*props 를 이용한 객체 분할 방식 중 하나로 
 function Addres(props{
     const { name, gender, email} = props; 
     이런식으로 상수 , 배열로 props 를 넣어서 따로 사용할려고 한다.

     return (
         <label > 이름 </label> {name}
         이런식으로 사용 가능하며 얘를 받아주는 App에서 <div> 안에 <Address name = "" , gender ="" , email =""} 이런식으로 사용 가능하다.
     )
 }
*/


