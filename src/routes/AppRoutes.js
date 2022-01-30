import React, { useContext } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import Alert from '../components/ui/Alert';
import { AlertContext } from '../context/Alert.context';
import DetailTeam from '../pages/DetailTeam';

export default function AppRouter() {
  const { errorMsg } = useContext(AlertContext);

  return (
    <Router>
      <div style={{ position: 'absolute', bottom: 20, right: 20, width: '300px' }}>{errorMsg && <Alert message={errorMsg} />}</div>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/team/:id" component={DetailTeam} />
        </Switch>
      </main>
    </Router>
  );
}
