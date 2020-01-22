import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loginErrors: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    const { username, password } = this.state;
    axios
      .post(
        "http://localhost:3001/sessions",
        {
          user: {
            username: username,
            password: password
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.logged_in && response.data.patient) {
          this.props.handleSuccessfulAuth(response.data);
        } else {
          this.props.handleSuccessfulDoctorAuth(response.data);
        }
      })
      .catch(error => {
        console.log("login error", error);
      });

    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="username"
              name="username"
              placeholder="Username"
              required
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              required
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-sm">
            Login
          </button>
        </form>
      </div>
    );
  }
}