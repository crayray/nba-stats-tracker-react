import React from "react";
import { Card, Accordion, Icon } from "semantic-ui-react";

export default class Player extends React.Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  calculateStats = playerStat => {
    let stat = 0;
    this.props.playerStats.api.statistics.forEach(s =>
      s[playerStat] === ""
        ? console.log(0)
        : (stat += parseInt(s[playerStat], 10))
    );
    console.log(stat);

    return parseFloat(stat) / this.props.playerStats.api.statistics.length;
  };

  render() {
    const name = [
      this.props.currentPlayer.firstName,
      `${this.props.currentPlayer.lastName}'s`,
      "5 year stats"
    ].join(" ");

    const { activeIndex } = this.state;
    return (
      <Card>
        <Card.Content header={name} />
        <Accordion styled>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            Overall Game Stats
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <ul>
              <li>Points Per Game(pg): {this.calculateStats("points")}</li>
              <li>Assists pg: {this.calculateStats("assists")}</li>
              <li>Rebounds pg: {this.calculateStats("totReb")}</li>
              <li>Steals pg: {this.calculateStats("steals")}</li>
              <li>Blocks pg: {this.calculateStats("blocks")}</li>
              <li>Turnovers pg: {this.calculateStats("turnovers")}</li>
            </ul>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            Player Details
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <div>
              {this.props.currentPlayer.leagues.standard ? (
                <div>
                  <h5>
                    Position:</h5> <p>{this.props.currentPlayer.leagues.standard.pos}</p>
                  
                  <h5>
                    Jersey Number:</h5><p>{" "}
                    {this.props.currentPlayer.leagues.standard.jersey}
                  </p>
                </div>
              ) : (
                <div>
                  <h5>
                    Position:</h5><p>{this.props.currentPlayer.leagues.vegas.pos}
                  </p>
                  <h5>
                    Jersey Number: </h5>{" "}
                    <p>{this.props.currentPlayer.leagues.vegas.jersey}</p>
                </div>
              )}
            </div>
          </Accordion.Content>
        

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Personal Details
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <ul>
          <li>Years Pro: {this.props.currentPlayer.yearsPro}</li>
        <li>Country: {this.props.currentPlayer.country}</li>
        <li>Date of Birth: {this.props.currentPlayer.dateOfBirth}</li>
        <li>Height (m): {this.props.currentPlayer.heightInMeters}</li>
        <li>Weight (kg): {this.props.currentPlayer.weightInKilograms}</li>
          </ul>
        </Accordion.Content>
        {/* <li>Years Pro: {this.props.currentPlayer.yearsPro}</h5>
        <h5>Country: {this.props.currentPlayer.country}</h5>
        <h5>Date of Birth: {this.props.currentPlayer.dateOfBirth}</h5>
        <h5>Height (m): {this.props.currentPlayer.heightInMeters}</h5>
        <h5>Weight (kg): {this.props.currentPlayer.weightInKilograms}</h5> */}
        </Accordion>
      </Card>
    );
  }
}
