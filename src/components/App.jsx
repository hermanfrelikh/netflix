import { Route, Routes } from 'react-router-dom';

import { MOVIE_LISTS, TOP_LISTS } from '../data';
import Layout from './Layout';
import ActorDetail from './pages/ActorDetail';
import MovieDetail from './pages/MovieDetail';
import Movies from './pages/Movies';
import MoviesListMain from './pages/MoviesListMain';
import MoviesListTop from './pages/MoviesListTop';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/actor/:id" element={<ActorDetail />} />
        {TOP_LISTS.map(el => (
          <Route key={el.title} path={el.url} element={<MoviesListTop />} />
        ))}
        {MOVIE_LISTS.map(el => (
          <Route key={el.title} path={el.url} element={<MoviesListMain />} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
