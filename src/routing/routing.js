import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Link,NavLink,Redirect, Prompt } from 'react-router-dom';

import Login from './component/Login';
import Signup from './component/Signup';
import User from './component/User'


class  App extends React.Component {

  state = {
    loggedIn: false
  }
 loginHandle = () => {
   
   this.setState(preState =>({
      loggedIn:  !preState.loggedIn
   }))
 }
  render() {
    return (
      <Router>
        <ul>
          <li><NavLink to="/" activeStyle={{color:"Red"}} >Home</NavLink></li>
          <li><NavLink to="/login/" activeStyle={{color:"Red"}}>Login</NavLink></li>
          <li><NavLink to="/signup/" activeStyle={{color:"Red"}}>Sign Up</NavLink></li>
          <li><NavLink to="/user/Ramzan" activeStyle={{color:"Red"}}>User</NavLink></li>

          <input type="button" value={this.state.loggedIn ?"Login": "logOut"} onClick={this.loginHandle.bind(this)} />
         <div>login:{this.state.loggedIn}</div> 
        </ul>
          <div className="App">
              <Route path="/" exact render={
                () => {
                  return <h1>Welcome Home</h1>
                }
              }/>
               <Route path="/login/" exact strict render={
                () => {
                  return <Login />
                }
              }/>
               <Route path="/signup" exact render={
                () => {
                  return <Signup />
                }
              }/>
  
              <Route path="/user/:username" exact strict render={({match}) => (              
                this.state.loggedIn ? (<User username={match.params.username} />) : (<Redirect to="/"  />)
              )} />

              <Prompt 
                when={!this.state.loggedIn}
                message={(location) =>{
                  return location.pathname.startsWith('/user') ? 'Are you sure?' : true
                }}
              />
       
          </div>
      </Router>
    );
  }
 
}

export default App;
