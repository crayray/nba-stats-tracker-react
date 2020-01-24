import React from "react";
import TeamCard from "../components/TeamCard";
import Teams from "../data/all_teams.json";

export default class Favorites extends React.Component {
    
    render() {
    return (
      <div>
        <h4>
          {this.props.logged
            ? this.props.logged.user.user.username + "'s favorite teams!"
            : "Login to see your Favorites"}
        </h4>

        <div>
      {this.props.favorites.map(team => (
        Teams.api.teams.find(t => team.team === parseInt(t.teamId))))
        .map(team => <TeamCard team={team} seeTeam={this.props.seeTeam}/>)
    }
    </div>
      </div>
    );
  }
}
