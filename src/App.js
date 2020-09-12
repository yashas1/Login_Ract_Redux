import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Login from"./components/Authantication/Login"
import Dashboard from "./components/Dashboard/Dashboard"
import store from './store'
import PrivateRoute from "./components/common/PrivateRoute"
function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <PrivateRoute exact path="/dashboard" component={Dashboard}/>
        </Switch>
      
    </div>
    </Router>
    </Provider>
  );
}

export default App;
