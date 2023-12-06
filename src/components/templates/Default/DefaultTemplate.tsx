import { Outlet } from 'react-router-dom';
import Header from '../../molecules/Header/Header';

const DefaultTemplate = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default DefaultTemplate;
