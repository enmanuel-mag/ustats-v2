import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/index';
import Stats from '../pages/statistics';

const index = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/statistics" component={Stats} />
        </Switch>
      </Router>
    </div>
  );
};

export default index;
