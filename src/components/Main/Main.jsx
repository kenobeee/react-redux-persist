import React from 'react';
import FormContainer from './FormContainer/FormContainer';
import NodesContainer from './NodesContainer/NodesContainer';
import './Main.scss';

export default function Main({currentNode}) {
  return (
    <main>
      <FormContainer currentNode={currentNode} />
      <NodesContainer currentNode={currentNode} />
    </main>
  );
}