import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router> 
        <Switch>
          <Route path="/" component={Cep}>
            <Cep/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
