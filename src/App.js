import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import appStore from './redux/appStore';
import Body from './components/Body';

function App() {

  const [dark, setDark] = useState(true)

  return (
    <Provider store={appStore}>
      <div className={`App ${dark && "dark"} h-screen pt-4 dark:bg-gray-900`}>
        <Navbar />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
