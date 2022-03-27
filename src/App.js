import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import mainboard from './';

//Login Component
import Login from './components/login/login';
import mainboard from './mainboard';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    }
  }
  render() {
    var token = localStorage.getItem("token")
    if (!token) {
      return (
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
          </Switch>
        </Router>
      )
    }
    else {
      return (
        <Router>
          <Switch>
            <Route exact path="/" component={mainboard} />
          </Switch>
        </Router>
      );
    }
  }
}
export default App;
