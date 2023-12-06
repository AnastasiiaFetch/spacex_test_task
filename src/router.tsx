import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useProtectedRoute } from './composable/useProtectedRoute';
import DefaultTemplate from './components/templates/Default/DefaultTemplate';
import svg from './assets/images/austronaut.svg';

const Router = () => {
  return (
    <BrowserRouter basename="/spaceX">
      <Routes>
        <Route element={useProtectedRoute(<DefaultTemplate />)}>
          <Route
            path="/main"
            element={
              <div style={{ width: '50%' }}>
                <img src={svg} style={{ width: '100%' }} alt="Austronaut" />
              </div>
            }
          />
          {/* <Route path="/main" element={<>home</>}/>
          <Route path="/favorite" element={<>favourites</>}/>
          <Route path="/sign-in" element={<>sign in page</>}/> */}
        </Route>

        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="*" element={<>not found page</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
