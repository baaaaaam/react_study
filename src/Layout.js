import { Outlet,useNavigate } from "react-router-dom";
//useNavigate는 link 컴포넌트를 사용하지 않고 다른 페이지로 이동해야 하는 상황에 사용하는 Hook 입니다.

const Layout = () => {

    const navigate = useNavigate();

    const goBack = () => {
        //이전 페이지로 이동
        navigate(-1);
    }

    const goArticles = () => {
        //articles 경로 이동
        navigate('/articles',{replace: true})// replace는 페이지를 이동할 떄 현재 페이지를 페이지 기록에 남기지 않음
    }
    return(
        <div>
            <header style={{background: 'lightgray', padding: 16, fontSize:24}}>
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={goArticles}>게시글 목록</button>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>

    )
}

export default Layout;