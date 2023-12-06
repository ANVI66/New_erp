import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Hrnotification from './Hrnotification';

const App = () => {
  const data = [
    // Your data array here
  ];

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/hrnotification" element={<Hrnotification data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
