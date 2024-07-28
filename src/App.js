import {Route,Routes} from 'react-router-dom';
import About from './Pages/Abouts';
import Article from './Pages/Article';
import Articles from './Pages/Articles';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Layout from './Layout';
import NotFound from './Pages/NotFound';
import Login from './Pages/Login';
import Mypage from './Pages/MyPage';

const App=()=> {
  return (
    <Routes>
      <Route element={<Layout/>}>
        {/* <Route path='/' element={<Home/>}></Route> */}
        {/*index prop은 path="/"와 동일한 역할 */}
        <Route index element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/profiles/:username' element={<Profile/>}></Route>
      </Route>
      {/* <Route path='/articles/:id' element={<Article/>}></Route> */}
      <Route path='/articles' element={<Articles/>}>
        <Route path=':id' element={<Article/>}></Route>
      </Route> {/*중첩된 라우터 사용 */}
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/mypage' element={<Mypage/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
  );
}

export default App;

//app->home/about->profile