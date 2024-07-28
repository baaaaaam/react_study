//import { Link, Outlet } from "react-router-dom";
//중첩된 라우터르 보여주기 위해 outlet사용 , 페이지끼리 공통적으로 보여줘야 하는 레이아웃이 있을 때도 유용하게 사용
import {  NavLink, Outlet } from "react-router-dom";
//NavLink 링크에서 사용하는 경로가 현재 라우트의 경로와 일치하는 경우 특정 스타일 또는 CSS 클래스를 적용하는 컴포넌트



const Articles = () => {


    return (
        <div>
            <Outlet />
            <ul>
               <ArticleItem id ={1}/>
               <ArticleItem id ={2}/>
               <ArticleItem id ={3}/>
            </ul>
        </div>
    )
}

const ArticleItem = ({id}) => {
    const activeStyle = {
        color: 'green',
        fontSize: 21,
    }
    return (
        <li>
             <NavLink to={`/articles/${id}`} style ={({isActive})=> (isActive ? activeStyle : undefined)}>
             게시글 {id}
             </NavLink>
        </li>
    )

}

export default Articles;