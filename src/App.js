import React , {Component} from 'react';
//import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

//컴포넌트 내부에서 DOM에 직접 접근해야 할 때는 ref를 사용
class App extends Component {
    render() {
     return(
        <div>
        <ScrollBox ref={(ref)=>this.ScrollBox=ref}/>
        <button onClick={()=> this.ScrollBox.scrollToBottom()}>
            맨밑으로
        </button>
        </div>
    )};
};

export default App;