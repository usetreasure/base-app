import 'babel-polyfill';
import 'promise-polyfill/src/polyfill';
import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router-dom';
import { history } from 'store/store';
import { hot } from 'react-hot-loader';
import { Container } from 'reactstrap';

import Header from 'containers/Header';
import HomePage from 'containers/HomePage';
import LoginPage from 'containers/LoginPage';
import AboutPage from 'containers/AboutPage';
import ForgotPasswordPage from 'containers/ForgotPasswordPage';

var NotFound = () => (
  <div>Sorry, page not found.</div>
);

var NoOp = () => (
  <div></div>
);

class App extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <main>
          <Header />
          <Container className="mainContainer">
            <Switch>
              <Route exact path='/' component={HomePage} />

              <Route path='/forgot_password' component={ForgotPasswordPage}/>
              <Route path='/login' component={LoginPage} />
              <Route path='/about' component={AboutPage} />
              <Route component={NotFound}/>
            </Switch>
          </Container>
          <div className="container-fluid bg-dark pt-5">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <h2 className="text-white">Footer</h2>
                <hr className="bg-light my-3" />
              </div>
            </div>
          </div>
          <footer className="container-fluid bg-dark">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-white">
                <p>&copy; 2017-2018 Company</p>
              </div>
            </div>
          </footer>
        </main>
      </ConnectedRouter>
    );
  }
}

export default hot(module)(App); // eslint-disable-line
