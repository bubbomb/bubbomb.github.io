import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Button,
} from 'react-native'

let styles = require('./styles');


export default class ScoreScreen extends Component {
  constructor(props) {
  	super(props);
    console.log(props)
    this.state ={}
    };
  

  render() {
    return (
      <View style = {styles.row}>

      {/*<Banner/>*/
      /*<GameTabs/>*/
      /*<TeamNamesScore/>*/
        /*<Name/>*/
        /*<Score/>*/
      /*<TeamNameScore/>*/
        /*<Name/>*/
        /*<Score/>*/

      /*<BidInfo/>*/
        /*<Toggle/>*/
        /*<Amount/>*/

      /*<MeldsTricks/>*/

        /*<Meld/>*/
        /*<Meld/>*/
        /*<Tricks/>*/
        /*<Tricks/>*/}




        <TeamNameScore teamName = {this.props.team1Name} teamScore = {this.props.score1}/>
        <TeamNameScore teamName = {this.props.team2Name} teamScore = {this.props.score2}/>
      </View>


    );
  }
}

class TeamNameScore extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    return (
      <View style = {{flex:1}}>
        <Text style = {{alignSelf:'center', fontSize:35}}>
          {this.props.teamName}
        </Text>
        <Text style = {{alignSelf:'center', fontSize:40}}>
          {this.props.teamScore}
        </Text>
      </View>
    )
  }
}