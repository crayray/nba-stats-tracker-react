import React from 'react'
import App from './App';
import Navbar from './Navbar';
import Signup from './Signup';
import { BrowserRouter as Router, Route } from 'react-router-dom';


export default class Document extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             logged_in: ''
        }
    }

    login = (event) => {
        event.preventDefault()
        let user = {username: event.target.username.value, password: event.target.password.value}
        console.log(user)
        fetch(`http://localhost:3001/users`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify({ user })
          })
            .then(res => res.json())
            .then(data => this.setState({logged_in: data}, () => console.log(this.state)))
            
    }
    loginnn = (event) => {
        event.preventDefault()
        let user = {username: event.target.username.value, password: event.target.password.value}
        console.log(user)
        fetch(`http://localhost:3001/signup`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify({ user })
          })
            .then(res => res.json())
            .then(data => this.setState({logged_in: data}, () => console.log(this.state)))
            
    }
    
    render() { 
        return(  <Router>
            <div>
            <Navbar />
            <Route exact path="/" ><App logged={this.state.logged_in}/></Route>
            <Route exact path="/signup"><Signup logged={this.state.logged_in} logIn={this.login} login={this.loginnn}/></Route>
            </div>
            </Router>)}
}