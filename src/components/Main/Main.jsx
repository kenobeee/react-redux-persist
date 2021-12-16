import React from 'react';
import FormContainer from './FormContainer/FormContainer';
import NodesContainer from './NodesContainer/NodesContainer';
import './Main.scss';

export default function Main() {
  return (
    <main>
      <FormContainer />
      <NodesContainer />
    </main>
  );
}