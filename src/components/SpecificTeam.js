import React from 'react'


export default class SpecificTeam extends React.Component {
    render() {
    return (
        <div>
            <img src={this.props.team.logo} alt="Couldn't Load"></img>
            <h1>{this.props.team.fullName}</h1>
            <h2>City: {this.props.team.city}</h2>
            <h3>Conference: {this.props.team.leagues.standard.confName}</h3>
            <h3>Division: {this.props.team.leagues.standard.divName}</h3>

        </div>
    )}
}
