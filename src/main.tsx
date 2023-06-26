import ReactDOM from 'react-dom/client';
import './index.css';
import './utils/Vars.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import PageLayout from './components/ui/PageLayout.tsx';
import HomePage from './components/pages/home/HomePage.tsx';
import './i18n/i18n.tsx';
import SkillsPage from './components/pages/skills/SkillsPage.tsx';
import { AnimatePresence } from 'framer-motion';
import { NavbarPagesRoutes } from '@/utils/Routes.tsx';

const AppRoot = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode={'wait'}>
      <Routes location={location} key={location.pathname}>
        <Route path={'/'} element={<PageLayout />}>
          <Route index element={<HomePage />} />
          {NavbarPagesRoutes.map((route, idx) => {
            return <Route path={route.path} element={route.component} />;
          })}
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const RouterRoot = () => {
  return (
    <BrowserRouter>
      <AppRoot />
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterRoot />
);
