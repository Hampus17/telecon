import React from 'react';
import './App.css';
import _ from 'lodash';

import Sidebar from './Sidebar';
import Main from './Main';
import { contacts } from './static-data';

function App() {
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />  {/*Convert contacts to an array */}
      <Main />
    </div>
  );
}

export default App;
