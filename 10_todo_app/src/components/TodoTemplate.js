//화면을 가운데에 정렬시켜주며, 앱 타이틀을 보여줍니다.
//children으로 내부 jsx를 props로 받아 와서 랜더링해줍니다.

import './TodoTemplate.scss';

const TodoTemplate = ({children}) => {
    return (
        <div className="TodoTemplate">
             <div className="app-title">일정 관리</div>
             <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;