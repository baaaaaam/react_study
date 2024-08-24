// import { connect } from "react-redux";
// import { increase, decrease } from "../modules/counter";
// import Counter from "../components/Counter";

// const CounterContainer = ({number,onIncrease, onDecrease})=> {
//     return (
//         <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
//     );

// };

// export default connect (
//     state => ({
//         number: state.counter
//     }),
//     {
//         increase,
//         decrease
//     }
// )(CounterContainer);

import { connect } from "react-redux";
import { increaseAsync, decreaseAsync } from "../modules/counter";
import Counter from "../components/Counter";

// CounterContainer 컴포넌트
const CounterContainer = ({ number, onIncrease, onDecrease }) => {
    return (
        <Counter
            number={number}
            onIncrease={onIncrease} // 액션 생성자가 아닌, 연결된 함수
            onDecrease={onDecrease} // 액션 생성자가 아닌, 연결된 함수
        />
    );
};

// Redux 스토어의 상태와 액션 생성자 연결
const mapStateToProps = state => ({
    number: state.counter
});

const mapDispatchToProps = {
    onIncrease: increaseAsync, // 액션 생성자를 dispatch로 감싼 함수로 연결
    onDecrease: decreaseAsync  // 액션 생성자를 dispatch로 감싼 함수로 연결
};

// connect를 사용하여 Redux와 연결
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer);