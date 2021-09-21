import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './Containers/homePage';
import NavBar from './Components/navBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <HomePage />
    </BrowserRouter>
  );
}

export default App;
