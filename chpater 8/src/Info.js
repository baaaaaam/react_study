//import React,{useEffect, useState} from 'react';
//import React,{useReducer} from 'react';
import useInputs from './useInputs';


//커스텀 hooks개발 후 코드

 const Info = () => {
    const [state, onChange] = useInputs({
        name:'',
        nickname:''
    });
    const {name, nickname} = state;

    return (
        <div>
            <div>
                <input value={name} onChange={onChange} />
                <input value={nickname} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b>이름: {name}</b>
                </div>
                <div>
                    <b>닉네임 : {nickname}</b>
                 </div>
             </div>
        </div>
    )



// const Info = () => {
//     const [name, setName] = useState('');
//     const [nickname, setNickname] = useState('');
// //랜더링될떄마다 특정 작업을 수행
//     useEffect(()=> {
//         console.log('effect');
//         console.log(name );
//         return() => {  //컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떤 작업을 수행하고 싶다면
//              //useEffect에서 뒷정리 함수를 반환해야함 
//             console.log('cleanup');
//         }
     
//     },[name]) //[]:맨 처음 랜더링될 때만 실행 업데이트될 때는 실행하지 않음
//           //[name] :name이 변경될때마다 호출

//     const onChangeName = e => {
//         setName(e.target.value);
//     };

//     const onChangeNickname = e => {
//         setNickname(e.target.value);
//     }

//     return (
//         <div>
//             <div>
//                 <input value={name} onChange={onChangeName} />
//                 <input value={nickname} onChange={onChangeNickname}/>
//             </div>
//             <div>
//                 <div>
//                     <b>이름: {name}</b>
//                 </div>
//                 <div>
//                     <b>닉네임 : {nickname}</b>
//                 </div>
//             </div>
//         </div>
//     );
// };
}
export default Info;