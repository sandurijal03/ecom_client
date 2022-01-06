import { StrictMode } from 'react';
import { render } from 'react-dom';
import Main from './Main';

import { Provider } from 'react-redux';
import store from './store/store';

const root = document.getElementById('root');
render(
  <StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </StrictMode>,
  root,
);
