import React from "react";
import App from "./App";
import Navbar from "./Navbar";
import Signup from "./Signup";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class Document extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logged_in: "",
      favorites: []
    };
  }

  login = event => {
    event.preventDefault();
    let user = {
      username: event.target.username.value,
      password: event.target.password.value
    };
    console.log(user);
    fetch(`http://localhost:3001/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ user })
    })
      .then(res => res.json())
      .then(data =>
        this.setState({ logged_in: data }, () => console.log(this.state))
      );
  };
  loginnn = event => {
    event.preventDefault();
    let user = {
      username: event.target.username.value,
      password: event.target.password.value
    };
    fetch(`http://localhost:3001/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ user })
    })
      .then(res => res.json())
      .then(data =>
        this.setState(
          { logged_in: data, favorites: data.user.user.user_teams },
          () => console.log(this.state)
        )
      );
  };
  addFav = team => {
    if (this.state.logged_in !== "") {
      if (this.state.favorites.find(t => t.team === parseInt(team.team))) {
        alert("Already one of your favorites");
      } else {
        console.log(this.state.favorites)
        this.setState({ favorites: [...this.state.favorites, team] }, () => console.log(this.state.favorites));
        let user_team = {
          user_id: this.state.logged_in.user.user.id,
          team: team.team
        };
        fetch(`http://localhost:3001/user_teams`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({ user_team })
        }).then(res => res.json());
      }
    } else {
      alert("Must be logged in to add to favorites.");
    }
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/">
            <App
              logged={this.state.logged_in}
              favorites={this.state.favorites}
              addFav={this.addFav}
            />
          </Route>
          <Route exact path="/signup">
            <Signup
              logged={this.state.logged_in}
              logIn={this.login}
              login={this.loginnn}
            />
          </Route>
        </div>
      </Router>
    );
  }
}
