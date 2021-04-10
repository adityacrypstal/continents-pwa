import './App.css';
import React from "react";
import Router from './Router'
import { DBConfig } from './db/DBConfig';
import { initDB } from 'react-indexed-db';
import './assets/style/bootstrap.min.css'
//Initialized IndexedDB
initDB(DBConfig);
function App() {
  return (
    <Router/>
  );
}

export default App;
