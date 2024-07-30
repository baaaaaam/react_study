import styled from "styled-components";
import NewsItem from "./NewsItem";
import usePromise from "../lib/usePromise";
import axios from 'axios'
;

const NewsListBlock = styled.div`
box-sizing: border-box;
padding-bottom: 3rem;
width:768px;
margin:0 auto;
margin-top: 2rem;
@media screen and (max-width: 768px) {
    width:100%
    padding-left:1rem;
    padding-right:1rem
    }
`;

const NewsList = ({category}) => {
    const [loading, response, error] = usePromise(()=>{
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=6a7dff7b4f1247a6a4b6ba6e275fc322`
        )
    },[category]);

    if(loading) {
        return <NewsListBlock>대기중...</NewsListBlock>
    }

    if(!response) {
        return null
    }

    if(error) {
        return <NewsListBlock>에러발생</NewsListBlock>
    }

    const {articles} = response.data;
    return (
        <NewsListBlock>
                {articles.map(article => (
                <NewsItem key={article.url} article={article}/>
           ))}
        </NewsListBlock>
    )


}



// const NewsList = ({category}) => {
//     const [articles, setArticles] = useState(null);
//     const [loading, setLoading] = useState(false);

//     useEffect(()=> {
//         //async를 사용하는 함수 따로 선언
//         const fetchData = async () => {
//             setLoading(true);
//             try {
//                 const query = category === 'all' ? '' : `&category=${category}`;
//                 const reponse = await axios.get(
//                     `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=6a7dff7b4f1247a6a4b6ba6e275fc322`
//                 )
//                 setArticles(reponse.data.articles)
//             }catch(e){
//                 console.log(e)
//             }
//             setLoading(false)
//         }
//         fetchData();
//     },[category])

//     //대기중일때
//     if (loading){
//         return <NewsListBlock>대기중...</NewsListBlock>
//     }

//     //아직 articles값이 설정되지 않았을 때
//     if(!articles){
//         return null;
//     }

//     //articles 값이 유요할 때

//     return (
//         <NewsListBlock>
//             {articles.map(article => (
//                 <NewsItem key={article.url} article={article}/>
//             ))}
//         </NewsListBlock>
       
//     );
// };

 export default NewsList;