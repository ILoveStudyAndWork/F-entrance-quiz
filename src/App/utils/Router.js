import React from 'react';
import { HashRouter, Route, Switch, hashHistory } from 'react-router-dom';
import App from '../App';
import CreateTrainee from '../component/CreateTrainee/CreateTrainee';


const BasicRoute = () => (
  <HashRouter history={hashHistory}>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/trainee/create" component={CreateTrainee}/>
    </Switch>
  </HashRouter>
);


export default BasicRoute;