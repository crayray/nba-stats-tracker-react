
import axios from "axios";
import React from "react";
import "../App.css";
import Team from "../containers/Team";
import Favorites from "../containers/Favorites";

import { Grid, Container, Segment } from "semantic-ui-react";
import Player from "./Player";
import SpecificTeam from "./SpecificTeam";
import DataMenu from "./Menu";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      team_click: 1,
      loggedInStatus: "NOT_LOGGED_IN",
      current: "",
      players: [],
      currentPlayer: ""
    };
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
    this.props.history.push("/");
  }

  handleLogoutClick() {
    axios
      .delete("http://localhost:4000/logout", { withCredentials: true })
      .then(response => {
        this.handleLogout();
      })
      .catch(error => {
        console.log("Logout error", error);
      });
  }

  seeTeam = team => {
    fetch(`https://api-nba-v1.p.rapidapi.com/players/teamId/${team.teamId}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_NBA_API_KEY,
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          players: response.api.players,
          team_click: 2,
          current: team
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Container style={{ marginTop: "5em" }}>
       <div>
        <h1>Dashboard</h1>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <button
          onClick={() => this.handleLogoutClick()}
          className="btn btn-primary btn-sm"
        >
          Logout
        </button>
      </div>
        <Segment raised style={{ overflow: "auto", maxHeight: "45em" }}>
          <DataMenu />
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <Team seeTeam={this.seeTeam} />
              </Grid.Column>
              <Grid.Column width={8}>
                {this.state.team_click === 1 ? (
                  <Favorites />
                ) : this.state.team_click === 2 ? (
                  <SpecificTeam
                    team={this.state.current}
                    players={this.state.players}
                  />
                ) : (
                  <Player />
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    );
  }
}
    
export default Dashboard;
