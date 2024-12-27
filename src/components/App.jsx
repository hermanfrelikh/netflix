import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import ActorDetail from './pages/ActorDetail';
import MovieDetail from './pages/MovieDetail';
import Movies from './pages/Movies';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/actor/:id" element={<ActorDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
