import React from "react";
import"./App.css";
import Food from "./Food";




// function Food({fav}){
//     return <h1>I like {fav}</h1>
// }

// 서버에서 전송된 데이터 
const foodLike = [
    {
        id : 1,
        name : "kimchi",
        image : "https://m.cj.co.kr/resources/img/kfoodlife/behind191130/00.jpg",
        rating : 1,

    },
    {
        id : 2,
        name : "ramen",
        image : "https://imgcp.aacdn.jp/img-a/1200/auto/global-aaj-front/article/2018/07/5b3a31e4ad456_5b3a31cde965a_93611644.jpg",
        rating : 2,
    },
    {
        id : 3,
        name : "samgiopsal",
        image : "https://cdn.mindgil.com/news/photo/202103/70839_7148_1250.jpg",
        rating : 3,
    },
    {
        id : 4,
        name : "chukumi",
        image : "https://recipe1.ezmember.co.kr/cache/recipe/2019/03/05/52d2be99c015378a75c9db81362422c71.jpg",
        rating : 4,
    },
    {
        id : 5,
        name : "jokbal",
        image : "https://static.hubzum.zumst.com/hubzum/2019/07/26/11/8291a05e16b14e9b91eedc7a4375c934_780x585.jpg",
        rating : 5,
    }

];

function App2(){

    return(
        <div>
            <h1>app.js를 app2.js로 대체해서 실습</h1>
            <hr/>
            <h3>내가 좋아하는 음식</h3>
           

            {foodLike.map((dish) =>( // 데이터의 갯수 만큼 화면에 뿌리는게 가능해진다. 
            // foodLike 의 내용을 map으로 이름을 dish로 선언해주고 dish.name 이 가능해진다.
                <Food key={dish.id} name={dish.name} picture ={dish.image} rating={dish.rating}/>
            ))};
            
        </div>
    )
}

export default App2;
