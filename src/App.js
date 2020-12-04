import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import pages from './pages';
import { ROUTES } from './configs';
import theme from './styles/theme';
import { ThemeProvider } from 'react-jss';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router ref={this.router}>
          <CssBaseline />
          <Switch>
            <Route component={pages.Documents} exact path={ROUTES.BERANDA()} />
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
