
import { useSearchParams } from "react-router-dom";
//배열 타입의 값을 반환
//get 메서드를 통해 특정 쿼리파라미터를 조회. set 메서드를 통해 특정 쿼리파라미터를 업데이트할 수 있습니다

const About = () => {
    const [SearchParams, setSearchParams] = useSearchParams();
    const detail = SearchParams.get('detail');
    const mode = SearchParams.get('mode');
    
    const onToggleDetail = () => {
        setSearchParams({mode, detail : detail === 'true' ? false : true});
    }

    const onIncreaseMode = () => {
        const nextMode = mode === null ? 1: parseInt(mode) + 1;
        setSearchParams({mode:nextMode,detail});
    }

    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터를 사용해 보는 프로젝트</p>
            <p>detail:{detail}</p> 
            <p>mode:{mode}</p> 
            <button onClick={onToggleDetail}>ToggleDetail</button>
            <button onClick={onIncreaseMode}>mode + 1</button>
        </div>
    )
}

export default About;


//쿼리스트링
// import { useLocation } from "react-router-dom";

// const About = () => {
//     const location = useLocation();

//     return (
//         <div>
//             <h1>introuduce</h1>
//             <p>리액트 라우터를 사용해 보는 프로젝트</p>
//             <p>쿼리스트링:{location.search}</p> {/*현재 사용자가 보고 있는 페이지의 정보*/}
//         </div>
//     )
// }