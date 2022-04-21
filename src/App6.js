import React from "react";
import './App.css';

class App6 extends React.Component{
state ={
    isLoading : true , // 첫 화면 로딩 될 때
    movies: [],
    count : 5
    
};

    render(){
        // state 객체의 isLoading 요소를 객체 분할 할당방식을 사용하여 isLoading 변수를 선언하고 데이터를 할당
        const {isLoading, count} = this.state;
        // 변수 isLoading의 데이터에 따라서 화면에 출력하는 문구를 변경함
        return <div>{isLoading ? `Loading...${count}` : 'we are ready'}</div>;
        
    }

// render() 함수가 실행된 후 componentDidMount()가 실행됨
    componentDidMount(){
        // 1회용 타이머인 setTimeout()을 사용하여 5초후 로딩이 끝나는 형태로 프로그램을 실행
        // 5초 후 state 객체의 요소인 isLoading의 값을 false로 변경
        setTimeout(() => {
            //this.setState({isLoading: false});
            this.setState({count: this.state.count -1});
        }, 1000);   // Loading... 에서 5초 후에 false = we are ready로 변경된다.
    }

    

        componentDidUpdate(){
            setTimeout(() => {
                if(this.state.count > 0){
                    this.setState({count: this.state.count -1}); 
                }
                else{
                    this.setState({isLoading: false});
                }
            }, 1000);
        }
    }

export default App6;

// 문제 2) state 객체에 변수를 추가하여 해당 변수의 값을 매 1초마다 확인하고, 해당 변수의 값이 0이 될때 화면에출력하는 글자를 
// We are ready!! 로 변경하는 프로그램을 작성하세요 
    // ps 1) 로딩 중일때는 Loading...x로 화면에 글자를 출력함 X는 숫자 

// 풀이 1) 
// componentDidMount() 와 componentDidUpdate() 함수를 이용하여 푸는 방식
// componentDidMount() 가 실행되면 setTimeout()을 사용하여 1초 후에 state.count의 값을 1 감소 시킴
// state의 값이 변경되었기 때문에 Updating 상태로 변경되어 화면을 다시 구성함 
// 화면이 업데이트가 완료되면 componentDidUpdate() 함수가 실행됨
// componentDidUpdate() 함수에서 setTimeout() 을 사용하여 1초 후에 if(state.count > 0) 을 확인함 
// 조건이 참이면 state.count -1을 실행 
// 조건이 거짓이면 state.isLoading 의 값을 false로 변경 
// 조건이 참이든 거짓이든 state의 상태가 변경되었기 때문에 updating 상태가 되어 리액트가 화면이 다시 구성함
// state.count의 값이 0이 될때까지 Updating 상태가 되어 화면을 계속 재구성함 


//풀이 2)
// componentDidMount() 에서 setInterval() 함수를 사용하여 매 1초마다 if(state.count > 0) 을 확인함 
// 조건이 참이면 state.count -1을 실행 (state.count가 0이 될때까지)
// 조건이 거짓이면 state.isLoading의 값을 false로 변경
// state.count의 값이 0이 되면 setInterval을 정지 시킴