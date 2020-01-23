import React from "react";
import "./App.css";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      username2: "",
      password2: ""
    };
  }
  updateUser = event => {
    this.setState({ username: event.target.value });
  };
  updatePass = event => {
    this.setState({ password: event.target.value });
  };
  updateUser2 = event => {
    this.setState({ username2: event.target.value });
  };
  updatePass2 = event => {
    this.setState({ password2: event.target.value });
  };
  redirect = event => {
    event.preventDefault();
    this.props.logIn(event);
    // this.history.push("/");
  };

  render() {
    return (
      <div>
        <div>hi</div>
        <div>hi</div>
        
        <h1>
          {this.props.logged ? (
            <h2>Hello, {this.props.logged.user.user.username}</h2>
          ) : (
            <h1>Please Sign In or Create an Account</h1>
          )}
        </h1>
        <div>Sign Up</div>
        <form onSubmit={event => this.redirect(event)}>
          <label>
            UserName:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.updateUser}
            ></input>
          </label>
          <label>
            Password:
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.updatePass}
            ></input>
          </label>
          <input type="submit" value="Submit"></input>
        </form>

        <div>Login</div>
        <form onSubmit={event => this.props.login(event)}>
          <label>
            UserName:
            <input
              type="text"
              name="username"
              value={this.state.username2}
              onChange={this.updateUser2}
            ></input>
          </label>
          <label>
            Password:
            <input
              type="text"
              name="password"
              value={this.state.password2}
              onChange={this.updatePass2}
            ></input>
          </label>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}
