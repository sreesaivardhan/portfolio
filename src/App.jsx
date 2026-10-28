import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import DotBackground from './components/DotBackground';
import { ToastProvider } from './components/Toast';
import Home from './pages/Home';
import ProjectsArchive from './pages/ProjectsArchive';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      {/* Fixed full-viewport dot field — behind everything, z-index 0 */}
      <DotBackground />

      <ScrollToTop />

      {/* Toast context: single pill mounted once at root */}
      <ToastProvider>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/projects" element={<ProjectsArchive />} />
          <Route path="*"         element={<NotFound />} />
        </Routes>
      </ToastProvider>
    </BrowserRouter>
  );
}
