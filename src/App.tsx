import Game from './components/Game/Game';
import './styles/global.scss';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../src/redux/index';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Game />
      </div>
    </Provider>
  );
}

export default App;
