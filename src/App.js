import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import Home from './components/Home';

import {
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      //main: '#3f50b5',
      main: '#dee2e6',
    },
    secondary: {
      //main: '#ffb74d',
      main: '#7986cb',
    },
  },
});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router> 
            <Switch>
              <Route path="/" component={Home}>
                <Home/>
              </Route>
            </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
