import React, { Component } from 'react'
import './styles'
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Button,
  TextInput,
} from 'react-native'


let styles = require('./styles');

export default class SetupScreen extends Component {
  constructor(props) {
    super(props);
    this.state ={ 
        players: 4, 
        team1Name:"Team 1", 
        team2Name:"Team 2",
        }
    };


    change_names(names){

        this.setState(names)
    }
  render() {
    return (
        // condition ? expr1 : expr2 
        // set_players= {this.setState({players:6})}
        
        <View>
            {/*<Banner/>*/}
            <PlayerNumSwitch change_players= {(players) => this.setState({players:players})}/>
            <TeamNames change_names={(names) => this.change_names(names)}/>
            <Button
                accessibilityLabel="Change Screen"
                title="Start"
                onPress= {(e, state) => this.props.set_game_state({
                                                    players: this.state.players, 
                                                    team1Name: this.state.team1Name, 
                                                    team2Name: this.state.team2Name, 
                                                    screen: "ScoreScreen"
                                                })
                        }
            />
        </View>

    );
  }
}

class PlayerNumSwitch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      four_player: true,
      six_player: false
    }

    
  }

  update_players(four_player){

    this.setState({ four_player: four_player , six_player:!four_player})
    if(four_player){

        this.props.change_players(4)
    }
    else{
        this.props.change_players(6)
    }

  }

  render() {
    return (
      <View>
        <View>
            <View style={styles.row}>
                <Text>
                    Four Players
                </Text>
                <Switch
                  activeThumbColor='#5CB85C'
                  activeTrackColor='#ADDAAD'
                  thumbColor='#EBA9A7'
                  trackColor='#D9534F'
                  onValueChange={(value) => this.update_players(value)}
                  value={this.state.four_player}
                />
            </View>
            <View style={styles.row}>
                <Text>
                    Six Players
                </Text>
                <Switch
                  activeThumbColor='#5CB85C'
                  activeTrackColor='#ADDAAD'
                  thumbColor='#EBA9A7'
                  trackColor='#D9534F'
                  onValueChange={(value) => this.update_players(!value)}
                  value={this.state.six_player}
                />
            </View>
        </View>
      </View>
    )
  }
}


class TeamNames extends Component {

    constructor(props) {
    super(props)
    this.state = {team1Name: "Team 1", team2Name: "Team 2"}
    
    this.update_names = this.update_names.bind(this)
    }

    update_names(names){

        this.setState(names)
        this.props.change_names(names)
    }

    render() {

        return(
            <View style={styles.container}>
                <Text> Select Team Names </Text>
                <TextInput
                    accessibilityLabel='Team 1 name input'
                    placeholder= {`Team 1`}
                    onChangeText = {(value) => this.update_names({team1Name:value})}
                />
                <TextInput
                    accessibilityLabel='Team 2 name input'
                    placeholder= {`Team 2`} 
                    onChangeText = {(value) => this.update_names({team2Name: value})}
                />
            </View>

        )
    }
}

