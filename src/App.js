import React, { Component } from 'react';
import api from './services/api';

import "./style.css";

import Header from './components/Header';
import Main from './pages/main';


class App extends Component{
  render(){
    return (
      <div className="App">
        <Header/>
        <Main></Main>
      </div>
    );
  }
}
export default App;
