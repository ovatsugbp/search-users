/* eslint-disable linebreak-style */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import './App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default
import UserProvider from './context/userData';

import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <UserProvider>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/:id">
            <UserProfile />
          </Route>
        </Switch>
      </UserProvider>
    </Router>
  );
}

export default App;
