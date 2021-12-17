import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {BrowserRouter as Router} from "react-router-dom";

import {store, pStore} from "./store";
import App from './App';
import './Base.scss';

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={pStore}>
          <Router>
            <App />
          </Router>
        </PersistGate>
      </Provider>
    </React.StrictMode>,
  document.getElementById('react-app')
);