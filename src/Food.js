import React from "react";
import './Food.css';

// 전달받은 데이터의 타입을 확인하기 위해서 prop-types 모듈을 로드
import PropTypes from 'prop-types';

function Food({name, picture, rating}){
    return (
    <div>
        <h2>I like {name}</h2>
        <img className="imgSize" src={picture} alt={name}/>
    </div>
    );
}

export default Food;

// propTypes : 상위 컴포넌트로 부터 전달받은 데이터가 하위 컴포넌트에서 원하는 타입의 데이터인지 확인 
// isRequired : 필수 속성으로 설정, 해당 데이터가 없을 경우 오류 
Food.propTypes = {
    name : PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating:PropTypes.number
};