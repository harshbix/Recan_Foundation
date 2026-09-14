import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './NotFound';
import DonationModal from './components/DonationModal';
import { LanguageProvider } from './context/LanguageContext';

const GalleryPage = lazy(() => import('./pages/GalleryPage'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [donateAmount, setDonateAmount] = useState('50000');

  const openDonate = (amount = '50000') => {
    setDonateAmount(amount);
    setIsDonateOpen(true);
  };

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen bg-bg-cream flex items-center justify-center" aria-hidden="true" />}>
          <Routes>
            <Route path="/" element={<Home onOpenDonate={openDonate} />} />
            <Route path="/gallery" element={<GalleryPage onOpenDonate={openDonate} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <DonationModal
          isOpen={isDonateOpen}
          onClose={() => setIsDonateOpen(false)}
          initialAmount={donateAmount}
        />
      </Router>
    </LanguageProvider>
  );
}

export default App;
