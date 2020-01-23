import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
import { BrowserRouter , Route } from 'react-router-dom';
import App from 'components/App'
import Main from 'components/Main'
import Signin from './components/Authenticaiton/Signin'


ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Route path="/" component={(props) => <Main {...props} />} />
      <Route path="/Signin" component={(props) => <Signin {...props} />} />

    </BrowserRouter>   
    </Root> 
, document.querySelector('#root')); 