import React from "react";
import Teams from "./data/all_teams.json";
import TeamCard from "./TeamCard";


export default function Team() {
  return (
    <div>
      {Teams.api.teams
        .filter(team => team.nbaFranchise === "1")
        .map(team => (
          <TeamCard key={team.teamId} team={team}/>
        ))}
    </div>
  );
}
