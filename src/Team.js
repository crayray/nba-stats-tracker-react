import React from "react";
import Teams from "./data/all_teams.json";
import TeamCard from "./TeamCard";


export default class Team extends React.Component{
  render() {
    return (
    <div>
      {Teams.api.teams
        .filter(team => team.nbaFranchise === "1")
        .map(team => (
          <TeamCard key={team.teamId} team={team} seeTeam={this.props.seeTeam}/>
        ))}
    </div>
  );}
}
