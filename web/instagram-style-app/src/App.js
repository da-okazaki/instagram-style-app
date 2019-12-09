import React from 'react';
import logo from './logo.svg';
import Icon from './asset/instagram_logo.png';
import './App.css';
import { Alert } from "shards-react";
import {
  Button,
  Form,
  FormGroup,
  FormInput
} from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import { Auth } from 'aws-amplify'

function App(props) {
  return (
    <div className="App">
      <header className="header">
        <div className="logo-instagram">
          <img src={Icon}  alt="アイコン" />
        </div>
        <p>
          友達と繋がろう
        </p>
        <div class="login_facebook">
          <Button onClick={() => Auth.federatedSignIn()}>Sign In</Button>
        </div>
        <div class="label_1">
          <p>または</p>
        </div>
        <div class="form_registration">
          <Form>
            <FormGroup>
              <FormInput id="#tellphone_adress" placeholder="tellphone_adress"></FormInput>
            </FormGroup>
            <FormGroup>
              <FormInput id="#fullname" placeholder="fullname"></FormInput>
            </FormGroup>
            <FormGroup>
              <FormInput id="#username" placeholder="username"></FormInput>
            </FormGroup>
            <FormGroup>
              <FormInput id="#password" placeholder="password"></FormInput>
            </FormGroup>
          </Form>
        </div>
      </header>
    </div>
  )
}

export default App;