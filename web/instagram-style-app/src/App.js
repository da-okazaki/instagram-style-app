import React from 'react';
import logo from './logo.svg';
import Icon from './asset/instagram_logo.png';
import './App.css';
import { Alert } from "shards-react";
import { Button } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

function App() {

  return (
      <div>
        <div className="logo-instagram">
          <img src={Icon}  alt="アイコン" />
        </div>
        <div className="login-default">
          <Button>Facebookでログイン</Button>          
        </div>
        <div className="login-facebook">
          <span className="login-test">
          <Button>ログイン</Button>
          </span>
        </div>
      </div>
    );
  {
  /*
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
  */}
}

export default App;
