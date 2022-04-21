import React from "react";
import './App.css';

// 문제 1) class 형 컴포넌트 App4를 생성하고 , 화면에 현재 채널, 볼륨을 표시하고, 버튼으로 볼륨 up/down
    // 채널 up/down 버튼을 생성하여 버튼을 클릭 시 마다 현재 채널 및 볼륨의 크기가 변경되는 프로그램을 작성하세요
    // ps1) 볼륨은 0 ~ 15, 0 이하로 내려갈 수 없고 15이상 올라갈 수 없음 
    // ps2) 채널은 1 ~ 15, 1 이하로 내려가면 안되고 최대값은 15까지 출력, 15이상 올라가면 1이 출력
    // ps3) 각각 볼륨 및 채널은 1씩 변경될 수 있음

class App4 extends React.Component{
 state = {
     count : 1,
     vmcount : 0
 };

    chadd = () =>{
        
            if(this.state.count === 15){
                this.setState({count:1})
            }else{
                this.setState({count: this.state.count+1})
            }
            
        
    };

    chminus = () =>{
        if(this.state.count <= 0 ){
            this.setState({count:15})
        }else if(this.state.count >=16){
            this.setState({count:1})
        }
        else{
            this.setState({count: this.state.count-1})
        }
        
    }
    vmadd = () =>{
        
        if(this.state.vmcount === 15){
            this.setState({vmcount:15})
        }else{
            this.setState({vmcount: this.state.vmcount+1})
        }
    }
    vmminus = () =>{
        
        if(this.state.vmcount === 0){
            this.setState({vmcount:0})
        }else{
            this.setState({vmcount: this.state.vmcount-1})
        }
        
        
    
};

    
    render(){
        return(
                <div>
                        <h1>현재 채널 : {this.state.count}</h1>
                        <h1>볼륨 : {this.state.vmcount}</h1>

                        <button  onClick={this.chadd} > 채널 up </button>
                        <button onClick={this.chminus} > 채널 down </button>
                        <button  onClick={this.vmadd} > 볼륨 up </button>
                        <button onClick={this.vmminus} > 볼륨 down </button>

                     

                </div>

        );
    }

}

export default App4;