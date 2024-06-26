import './App.css';
import React, { useEffect } from 'react';
// import {useTelegram} from 'src/hooks/useTelegram';
// import Header from "./components/header/header";
import { useTelegram } from './hooks/useTelegram'; // Adjusted path
import Header from "./components/header/header";

const tg = window.Telegram.WebApp;
function App() {
  const {tg, onToggleButton} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [] )

  return (
    <div className="App">
      <Header/>
      <button onClick={onToggleButton}> toggle </button>
    </div>
  );
}

export default App;
