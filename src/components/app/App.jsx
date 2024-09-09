import { Route, Routes } from 'react-router-dom';
import NavLayout from '../SharedLayout/HeaderLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavLayout />} />
    </Routes>
  );
};
