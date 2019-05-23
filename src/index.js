import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
// components
import App from './components/App';
import Spiner from './components/Spiner/Spiner';
// styles
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Spiner />} persistor={persistor}>
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
