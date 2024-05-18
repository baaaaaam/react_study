import React, {Component} from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password:'',
        clicked : false,
        validated:false
    }

    input = React.createRef(); //ref 선언하기

    handleChange =(e) => {
        this.setState({
            password : e.target.value
        });
    }

    handleButtonClick =() => {
        this.setState({
            clicked:true,
            validated: this.state.password === '0000'
        });
        this.input.focus(); // 리프 연결되어있는 input에 포커스
    }

    render() {
        return (
            <div>
                <input 
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                className={this.state.clicked ? (this.state.validated ? 'sucess' : 'faliure') : ''}
                ref={(ref)=>this.input=ref} //선언한 리프 적용하기
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        )
     

    }
}

export default ValidationSample;