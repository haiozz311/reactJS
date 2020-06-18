import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeaderRFC from './components/HeaderRFC';
import BaiTapDanLayout from './components/BaiTapDanLayout/BaiTapDanLayout';
import DataBinding from './components/dataBinding/DataBinding';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <h1>Hello React</h1> */}
      {/* <button class="btn btn-danger">submit</button> */}
      {/* <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <HeaderRFC /> */}
      {/* <BaiTapDanLayout /> */}
      <DataBinding />
    </div>
  );
}

export default App;
