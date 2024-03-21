import React from 'react';
import logo from './logo.svg';
import './App.css';
import {  TreeProvider } from './Molecule';
import TreeListExample from './Pages/TreeListExample';

function App() {
  return (
    <div className="App">
      <TreeProvider>
        <TreeListExample />
      </TreeProvider>
    </div>
  );
}

export default App;
