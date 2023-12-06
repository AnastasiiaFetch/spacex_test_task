import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useProtectedRoute } from './composable/useProtectedRoute';
import DefaultTemplate from './components/templates/Default/DefaultTemplate';
import loadable from '@loadable/component';

const HomePage = loadable(() => import('./pages/home/HomePage'));
const FavoritePage = loadable(() => import('./pages/favorite/FavoritePage'));

const Router = () => {
  return (
    <BrowserRouter basename="/spaceX">
      <Routes>
        <Route element={useProtectedRoute(<DefaultTemplate />)}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/favorite" element={<FavoritePage />} />
        </Route>

        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<>not found page</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
