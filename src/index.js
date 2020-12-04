import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'typeface-roboto';
import configureStore, { history } from './store/configureStore';
import Root from './Root';
import moment from 'moment';
moment.locale('id');
require('./favicon.ico');
export const store = configureStore();

render(
  <AppContainer>
    <Root history={history} store={store} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NewRoot = require('./Root').default;
    render(
      <AppContainer>
        <NewRoot history={history} store={store} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
