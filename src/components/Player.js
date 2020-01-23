import React from "react";

export default class Player extends React.Component {
  calculateStats = playerStat => {
    let stat = 0;
    this.props.playerStats.api.statistics.forEach(s =>
      s["points"] === ""
        ? console.log(0)
        : (stat += parseInt(s[playerStat], 10))
    );
    console.log(stat);

    return parseFloat(stat) / this.props.playerStats.api.statistics.length;
  };
  render() {
    return (
      <div>
        <h2>Player Info, Averages over the last 5 years</h2>
        <h3>
          Name: {this.props.currentPlayer.firstName}{" "}
          {this.props.currentPlayer.lastName}
        </h3>
        <h4>Points Per Game(pg): {this.calculateStats("points")}</h4>
        <h4>Assists pg: {this.calculateStats("assists")}</h4>
        <h4>Rebounds pg: {this.calculateStats("totReb")}</h4>
        <h4>Steals pg: {this.calculateStats("steals")}</h4>
        <h4>Blocks pg: {this.calculateStats("blocks")}</h4>
        <h4>Turnovers pg: {this.calculateStats("turnovers")}</h4>

        <h3>Additional Info</h3>
        {this.props.currentPlayer.leagues.standard ? (
          <div>
            <h5>Position: {this.props.currentPlayer.leagues.standard.pos}</h5>
            <h5>
              Jersey Number: {this.props.currentPlayer.leagues.standard.jersey}
            </h5>
          </div>
        ) : (
          <div>
            <h5>Position: {this.props.currentPlayer.leagues.vegas.pos}</h5>
            <h5>
              Jersey Number: {this.props.currentPlayer.leagues.vegas.jersey}
            </h5>
          </div>
        )}

        <h5>Years Pro: {this.props.currentPlayer.yearsPro}</h5>
        <h5>Country: {this.props.currentPlayer.country}</h5>
        <h5>Date of Birth: {this.props.currentPlayer.dateOfBirth}</h5>
        <h5>Height (m): {this.props.currentPlayer.heightInMeters}</h5>
        <h5>Weight (kg): {this.props.currentPlayer.weightInKilograms}</h5>
      </div>
    );
  }
}
