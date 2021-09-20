import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './Containers/homepage';

function App() {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
}

export default App;
