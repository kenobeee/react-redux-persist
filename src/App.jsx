import React from 'react';
import {Routes, Route, Navigate, useLocation} from "react-router-dom";

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Error from './components/Error/Error';
import {useSelector} from "react-redux";

export default function App() {

  const myTree = useSelector(state => state.treeState.nodes);
  const currentLocation = useLocation();
  const currentNode = myTree.filter(node => (
    node.route === currentLocation.pathname
  ))[0] ?? myTree[0]

  return (
    <>
      <Header currentNode={currentNode} />
      <Routes>
        <Route path="main/*" element={<Main currentNode={currentNode} />} />
        <Route path='/' element={<Navigate to='/main' />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}