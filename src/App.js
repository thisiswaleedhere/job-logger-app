import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import appStore from './redux/appStore';
import Body from './components/Body';

function App() {

  const [dark, setDark] = useState(true)

  return (
    <Provider store={appStore}>
      <div className={`App ${dark && "dark"} md:h-screen min-w-[370px] pt-4 dark:bg-gray-900`}>
        <Navbar dark={dark} setDark={setDark} />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
