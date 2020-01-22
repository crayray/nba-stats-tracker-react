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
      current: ''
    };
  }
  seeTeam = (team) => {
    this.setState({team_click: 2, current: team},() => console.log(this.state))
  }

  render() {
    return (
      <Container>
        <Segment raised>
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
                <SpecificTeam team={this.state.current}/>
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
