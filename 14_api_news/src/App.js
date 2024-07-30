import { Route, Routes } from 'react-router-dom'
import NewsPage from './pages/NewsPage'

import React from 'react';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsPage/>}></Route>
      <Route path="/:category" element={<NewsPage/>}></Route>
    </Routes>
  );
};

export default App;

// import { useState, useCallback } from 'react';
// import NewsList from './components/NewsList';
// import Categories from './components/Categories';

// const App = () => {
//   const [category, setCategory] = useState('all');
//   const onSelect = useCallback(category => setCategory(category), []);

//   return (
//     <>
//       <Categories category={category} onSelect={onSelect}/>
//       <NewsList category={category}/>
//     </>
//   );
// };

// export default App;
