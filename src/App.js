import React from 'react';
import './App.css';
import Header from './components/Header';
import Addexpense from './components/addexpense';
import History from './components/History';
import Balance from './components/Balance';
import Incomeexpense from './components/incomeexpense';
import {GlobalProvider} from './context/global';

// const renderList = historyarray.map((name, amount) => 
// <div key={name}>{amount}</div>
// );

function App() {
  return (
    <GlobalProvider>
     <Header />
     <Balance />
     <Incomeexpense />
     <History />
     <Addexpense />
    </GlobalProvider>
  );
}

export default App;