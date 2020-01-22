import React from "react";
import "./App.css";
import Team from "./containers/Team";
import Favorites from "./containers/Favorites";

import { Grid, Container, Segment } from "semantic-ui-react";
import Player from "./components/Player";
import SpecificTeam from "./components/SpecificTeam";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      team_click: 1,
      logged_in: "",
      current: '',
      players: [],
      currentPlayer: ''
    };
  }
  seeTeam = (team) => {
    fetch(
      `https://api-nba-v1.p.rapidapi.com/players/teamId/${team.teamId}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_NBA_API_KEY,
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(response => {
        this.setState({ players: response.api.players, team_click: 2, current: team });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Container style={{ marginTop: '5em' }}>
        <Segment raised style={{ overflow: 'auto', maxHeight: '30em' }}>
      <div>
        <header>
          NBA Teams
          {/* <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        /> */}
        </header>

        <Grid >
          <Grid.Row>
            <Grid.Column width={8}>
              <Team seeTeam={this.seeTeam}/>
            </Grid.Column>
            <Grid.Column width={8}>
              {this.state.team_click === 1 ? (
                <Favorites />
              ) : this.state.team_click === 2 ? (
                <SpecificTeam team={this.state.current} players={this.state.players}/>
              ) : (
                <Player />
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      </Segment>
      </Container>
    );
  }
}

export default App;
