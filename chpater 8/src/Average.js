import React,{useCallback, useMemo, useState, useRef} from 'react';
//useMemo Hoo은 랜더링하는 과정에서 특정 값이 바뀌었을 때만 연산
//useCallback은 주로 랜더링 성능을 최적화
//useRef은 함수 컴포넌트에서 ref를 쉽게 사용, 컴포넌트 로컬 변수를 사용할떄도 활용
const getAverage = numbers => {
    console.log("평균값");
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b)=> a+b);
    return sum/ numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);




    const onChange = useCallback(e => {
        setNumber(e.target.value);
    },[]) //컴포넌트가 처음 랜더링될 떄만 함수 생성

    const onInsert = useCallback(()=> {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    },[number,list]); //number혹은 list가 바뀌었을 때만 함수 생성
    //함수 내부에서 상태 값에 의존해야 할 때는 그 값을 반드시 두번째 파라미터 안에 포함시켜주어야 합니다.

    const avg = useMemo(()=> getAverage(list),[list]);

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl}></input>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value,index)=>(
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값:</b> {avg}
            </div>
        </div>
    );
};

export default Average;