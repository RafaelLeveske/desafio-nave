import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/index';

import { AuthProvider } from './hooks/auth';

import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
