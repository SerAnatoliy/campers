import { Route, Routes } from 'react-router-dom';
import NavLayout from '../Layout/HeaderLayout';
import FooterLayout from '../Layout/FooterLayout';
import { ContainerApp } from './App.module';
import HomePage from '../../pages/HomePage/HomePage';

const App = () => {
  return (
    <ContainerApp>
      <Routes>
        <Route path="/" element={<NavLayout />} />
        <Route element={<FooterLayout />} />
        <Route index element={<HomePage />} />
      </Routes>
    </ContainerApp>
  );
};

export default App;
