import { Route, Routes } from 'react-router-dom';
import NavLayout from '../Layout/HeaderLayout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavLayout />} />
    </Routes>
  );
};

export default App;
