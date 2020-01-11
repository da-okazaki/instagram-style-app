import React from 'react';
import logo from '../logo.svg';
import Icon from '../asset/instagram_logo.png';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import './App.css';
import {
  Button,
  Form,
  FormGroup,
  FormInput,
} from "shards-react";

import Amplify, { Auth } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react';

import 'antd/dist/antd.css';
import { Tabs, Select } from 'antd';
const { TabPane } = Tabs;
const { Option } = Select;


function checkUser() {
  Auth.currentAuthenticatedUser()
    .then(user => console.log({ user }))
    .catch(err => console.log(err))
}


function signOut() {
  Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err))
}



class App extends React.Component {
  
  
  render() {
    return (
      <div className="App">
        <header className="header">
                
          <div class="login-facebook">
            <Button onClick={signOut}>Sign Out</Button>
          </div>
          
        </header>
      </div>
    )
  }
}

export default withAuthenticator(App);