/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

// Support component names relative to this directory:
var componentRequireContext = require.context("components", true); // eslint-disable-line
var ReactRailsUJS = require("react_ujs"); // eslint-disable-line
ReactRailsUJS.useContext(componentRequireContext);

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import { IntlProvider } from 'react-intl';
import store from 'store/store';
import App from 'containers/App';

axios.defaults.headers.common['X-CSRF-Token'] = document.head.querySelector('meta[name=csrf-token]').getAttribute('content');
axios.defaults.headers.common['Accept'] = 'application/json'; // avoid having to add .json to routes

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong but we&#39;re on it. Sorry about that!</h1>;
    }
    return this.props.children;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  render((
    <ErrorBoundary>
      <Provider store={store}>
        <IntlProvider locale="en">
          <App />
        </IntlProvider>
      </Provider>
    </ErrorBoundary>
    ), document.getElementById('app')
  );
});

