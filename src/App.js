import React from "react";
import "./App.css";
import Team from "./containers/Team";
import Favorites from "./containers/Favorites";

import { Grid, Container, Segment } from "semantic-ui-react";
import Player from "./components/Player";
import SpecificTeam from "./components/SpecificTeam";
import DataMenu from "./components/Menu";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      team_click: 1,
      current: "",
      players: [],
      playerStats: [],
      currentPlayer: ''
    };
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
        }, () => console.log(this.state));
      })
      .catch(err => {
        console.log(err);
      });
  };
  seePlayer = player => {
    fetch(`https://api-nba-v1.p.rapidapi.com/statistics/players/playerId/${player.playerId}`, {
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
          team_click: 3,
          currentPlayer: player,
          playerStats: response
        }, () => console.log(this.state));
      })
      .catch(err => {
        console.log(err);
      });
  };

  favor = () => {
    this.setState({team_click: 1})
  }

  render() {
    return (
      <Container style={{ marginTop: "5em" }}>
        <Segment raised style={{ overflow: "auto", maxHeight: "45em" }}>
          <DataMenu favor={this.favor}/>
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <Team seeTeam={this.seeTeam} />
              </Grid.Column>
              <Grid.Column width={8}>
                {this.state.team_click === 1 ? (
                  <Favorites favorites={this.props.favorites} logged={this.props.logged} seeTeam={this.seeTeam}/>
                ) : this.state.team_click === 2 ? (
                  <SpecificTeam
                    team={this.state.current}
                    players={this.state.players}
                    seePlayer={this.seePlayer}
                    addFav={this.props.addFav}
                  />
                ) : (
                  <Player currentPlayer={this.state.currentPlayer} playerStats={this.state.playerStats}/>
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    );
  }
}
    
export default App;
