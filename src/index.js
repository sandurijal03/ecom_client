import { StrictMode } from 'react';
import { render } from 'react-dom';
import Main from './Main';

const root = document.getElementById('root');
render(
  <StrictMode>
    <Main />
  </StrictMode>,
  root,
);
