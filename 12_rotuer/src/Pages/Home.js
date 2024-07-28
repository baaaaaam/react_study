import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <h1>home</h1>
            <p>first page</p>
            <ul>
                <li>
                <Link to="/about">소개</Link>
                </li>
                <li>
                <Link to="/profiles/velopert">velopert</Link>
                </li>
                <li>
                <Link to="/profiles/gildong">gildong</Link>
                </li>
                <li>
                <Link to="/profiles/void">존재하지 않는 프로필</Link>
                </li>
                <li>
                    <Link to = "/articles">게시글 목록</Link>
                </li>
            </ul>
           
        </div>
    )
}

export default Home;