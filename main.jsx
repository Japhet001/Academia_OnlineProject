import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './src/App'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/"/>
        <Route path="/Login" Admission ={Login} />
        <Route path="/Register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
