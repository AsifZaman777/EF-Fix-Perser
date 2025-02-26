import React from 'react';
import Navbar from './components/Navbar';
import { ParseProvider } from './context/ParseContext';
import InputSection from './components/InputSection';
import ParseSection from './components/ParseSection';

const App = () => {
  return (
    <ParseProvider>
      <Navbar />
      <InputSection />
      <ParseSection />
    </ParseProvider>
  );
};

export default App;