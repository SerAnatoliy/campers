import { Route, Routes } from 'react-router-dom';
import NavLayout from '../Layout/HeaderLayout';
import FooterLayout from '../Layout/FooterLayout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavLayout />} />
      <Route element={<FooterLayout />} />
    </Routes>
  );
};

export default App;
