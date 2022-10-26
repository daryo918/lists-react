import React from 'react';
import './App.css';
import { AppUi } from './Appui';
import {TodoProvider} from '../TodoContext'

function App(props) {

  return (
    <TodoProvider>
    <AppUi>
    </AppUi>
    </TodoProvider>
  );
}

export default App;
