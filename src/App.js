import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Switch>
            <Route path='/' component={Dashboard} />
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
