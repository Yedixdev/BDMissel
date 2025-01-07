import { Routes, Route } from 'react-router-dom';
import Error from './pages/Error';  
import Inicio from './pages/Inicio';
import Colecciones from './pages/Colecciones';
import ScrollToTop from './components/ScrollTop';

const AppRoutes = () => {
  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/colecciones" element={<Colecciones />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
