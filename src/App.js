import './App.css';
import React from 'react';
import CovidData from './components/CovidData';

import store from './store';
import {Provider} from 'react-redux'


function App() {


return (
  <div>
     <Provider store={store}>
     <CovidData />
      </Provider>
  </div>
)
}

export default App;

