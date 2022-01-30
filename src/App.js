import React from 'react';
import AlertProvider from './context/Alert.context';
import CompetitionProvider from './context/Competition.context';

import AppRouter from './routes/AppRoutes';
import './styles/App.css';

function App() {
  return (
    <AlertProvider>
      <CompetitionProvider>
        <AppRouter />
      </CompetitionProvider>
    </AlertProvider>
  );
}

export default App;
