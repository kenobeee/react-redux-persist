import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {combineReducers, createStore} from "redux";

import {newNodeReducer} from './reducers/newNodeReducer';
import {treeReducer} from './reducers/treeReducer';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Error from './components/Error/Error';

const rootReducer = combineReducers({
  NewNodeState: newNodeReducer,
  treeState: treeReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="main/*" element={<Main />} />
          <Route path='/' element={<Navigate to='/main' />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </Provider>
  );
}