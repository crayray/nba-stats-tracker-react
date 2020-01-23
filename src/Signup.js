import React from "react";
import "./App.css";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }
  updateUser = event => {
    this.setState({ username: event.target.value });
  };
  updatePass = event => {
    this.setState({ password: event.target.value });
  };
  redirect = (event) => {
    event.preventDefault()
    this.props.logIn(event)
    // this.history.push("/");
  };

  render() {
    return (
      <div>
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
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
      </div>
    );
  }
}
