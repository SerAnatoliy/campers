import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import NavLayout from '../Layout/HeaderLayout';
import FooterLayout from '../Layout/FooterLayout';
import { ContainerApp } from './App.module';
import Loaders from '../Loaders/Loaders';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const FavouritesPage = lazy(() => import('../../pages/FavouritesPage/FavouritesPage'));
const PageNotFound = lazy(() => import('../../pages/PageNotFound/PageNotFound'));

const App = () => {
  return (
    <ContainerApp>
      <Suspense fallback={<Loaders />}>
        <Routes>
          <Route path="/" element={<NavLayout />}>
            <Route element={<FooterLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/favorites" element={<FavouritesPage />} />
            </Route>
            <Route path="/catalog" element={<CatalogPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </ContainerApp>
  );
};

export default App;
