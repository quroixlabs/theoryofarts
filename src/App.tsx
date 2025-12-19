import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SplashPage from './components/SplashPage';
import BioPage from './components/BioPage';
import GalleryPage from './components/GalleryPage';
import CoursePage from './components/CoursePage';
import ContactsPage from './components/ContactsPage';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#000100] text-[#F5F5F5]">
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/bio" element={<BioPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
