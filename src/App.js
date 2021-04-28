import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import Main from "./components/MainComponent";
import { ReduxStore } from './redux/ReduxStore';

const store = ReduxStore();

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <Main />
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
