import './App.css';
import React, { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import Header from "./components/header/header";
import {Route, Routes} from "react-router-dom"
import ProductList from './components/productList/productList';
import Form from './components/form/form';
import Congratulations from './components/congratulations/congrats';

function App() {
  const {tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [] )

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<ProductList />}/>
        <Route path={'form'} element={<Form />}/>
        <Route path="/congratulations" component={Congratulations} />
      </Routes>
    </div>
  );
}

export default App;
