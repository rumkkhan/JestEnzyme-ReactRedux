import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
import { BrowserRouter , Route } from 'react-router-dom';
import App from 'components/App'
import Main from 'components/Main'


ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Route path="/Main" component={(props) => <Main {...props} />} />
    </BrowserRouter>   
    </Root> 
, document.querySelector('#root')); 