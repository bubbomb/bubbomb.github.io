import React, { Component } from 'react';
import SetupScreen from './setup_screen';
import ScoreScreen from './score_screen';
import LogScreen from './log_screen';
import {
  Text,
  View,
  Button,
} from 'react-native';


class pinochlePalMobile extends Component {

	constructor(props) {
    super(props)

    this.state = {
		screen: 'SetupScreen',
		team1Name: 'Team 1',
		team2Name: 'Team 2',
		players: 4,
		score1: 0,
		score2: 0,
		rounds:[],

		}

	}


	render() {
		let display
			if(this.state.screen === "ScoreScreen"){
				return <View>
					<ScoreScreen
						set_game_state= {(state) => this.setState(state)}
						team1Name= {this.state.team1Name}
						team2Name= {this.state.team2Name}
						players = {this.state.players}
						score1 = {this.state.score1}
						score2 = {this.state.score2}
						rounds = {this.state.rounds}
					/> 
				</View>
			}
			else if(this.state.screen === "LogScreen"){
				return <View>
					<LogScreen
						set_game_state= {(state) => this.setState(state)}
						team1Name= {this.state.team1Name}
						team2Name= {this.state.team2Name}
						score1 = {this.state.score1}
						score2 = {this.state.score2}
						rounds= {this.state.rounds}
					/> 
				</View>

			}

		return <View>
					<SetupScreen 
						set_game_state= {(state) => this.setState(state)}
					/> 
				</View>
	}
}

module.exports = pinochlePalMobile;