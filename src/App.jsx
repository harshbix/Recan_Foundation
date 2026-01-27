import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './NotFound';
import DonationModal from './components/DonationModal';
import { LanguageProvider } from './context/LanguageContext';

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
        <Routes>
          <Route path="/" element={<Home onOpenDonate={openDonate} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
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
