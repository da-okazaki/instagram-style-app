import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from 'react-router-dom';
import {
    Alert,
    Button,
    Form,
    FormInput,
    FormGroup
} from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import './LoginApp.css';

import logo_instagram from "./asset/instagram_logo.png";


// propsにhistory, location, matchが格納される
const LoginButton = withRouter(props => {
    return (    
        <Button onClick={() => props.history.push(props.path)}>
            {props.text}
        </Button>        
    );
});
  
const LoginApp = () => {
    return (
      <div>
        <div class="logo_instagram">
            <img src={logo_instagram} />
        </div>
        <div class="label_1">
            <p>友達の写真や動画をチェックしよう</p>
        </div>
        <div class="login_facebook">
            <LoginButton text="Facebookでログイン" path="/" />
        </div>
        <div class="label_1">
            <p>または</p>
        </div>
        <div class="form_reistration">
            <Form>
                <FormGroup>
                    <FormInput id="#tellphone_adress" placeholder="モバイルの電話番号またはメールアドレス"></FormInput>
                </FormGroup>
                <FormGroup>
                    <FormInput id="#fullname" placeholder="フルネーム"></FormInput>
                </FormGroup>
                <FormGroup>
                    <FormInput id="#username" placeholder="ユーザーネーム"></FormInput>
                </FormGroup>
                <FormGroup>
                    <FormInput id="#password" placeholder="パスワード"></FormInput>
                </FormGroup>
            </Form>
        </div>
        <div class="login_default">
            <LoginButton text="登録" path="/about" />
        </div>
        <div class="label_1">
            <p>アカウントをお持ちですか？<b><a href='/ja'>ログインする</a></b></p>
        </div>        
        
        <Route exact path="/" render={() => <h1></h1>} />
        <Route path="/about" render={About} />
      </div>
    );
  };

  const About = () => {
      return (
          <div>
              <h1></h1>
          </div>
      )
  }

export default LoginApp;