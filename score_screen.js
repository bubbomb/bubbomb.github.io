import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Button,
  TextInput,
  Dimensions
} from 'react-native'

let styles = require('./styles');
// const Dimensions = require('Dimensions');
//const window = Dimensions.get('window');

export default class ScoreScreen extends Component {

  constructor(props) {
  	super(props);
    let startingBid = 150;
    let totalTricks = 250;
    if(props.players === 6){
      startingBid = 500
      totalTricks = 500
    }

    this.state ={
      bidTeam2:true,
      bidAmount: startingBid,
      meld1: 0,
      meld2: 0,
      trick1: totalTricks,
      trick2: 0,
      startingBid: startingBid,
      totalTricks:totalTricks,
    }
    };


  render() {

    const submit = () => {
      
      let score1 = 0;
      let score2 = 0;

      score1 = parseInt(score1) + parseInt(this.state.meld1) + parseInt(this.state.trick1)
      score2 = parseInt(score2) + parseInt(this.state.meld2) + parseInt(this.state.trick2)

      if(this.state.bidTeam2){

        if(score2 < this.state.bidAmount){

          score2 = parseInt(this.state.bidAmount) * parseInt(-1)
        }
      }
      else{

        if(score1 < this.state.bidAmount){

          score1 = parseInt(this.state.bidAmount) * parseInt(-1)

        }
      }

      score1 = parseInt(score1) + parseInt(this.props.score1)
      score2 = parseInt(score2) + parseInt(this.props.score2)

      this.props.set_game_state({score1:score1, score2:score2})

    };

    const update_tricks = (teamNum, tricks) => {

      tricks = parseInt(tricks)
      if(tricks > this.state.totalTricks){

        tricks = this.state.totalTricks
      }
      let otherTricks = parseInt(this.state.totalTricks) - parseInt(tricks)

      console.log(this.state.totalTricks)
      if(teamNum === 1){
        this.setState({trick1:tricks, trick2:otherTricks})
      }
      else{

        this.setState({trick1:otherTricks, trick2:tricks})
      }

    };

    return (
      <View style = {styles.column}>

      {
      /*<Banner/>*/
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
        /*<Tricks/>*/

      /*<Submit Button/>*/
      }



        <View style = {styles.row}>
          <TeamNameScore teamName = {this.props.team1Name} teamScore = {this.props.score1} selected = {this.state.bidTeam2}/>
          <TeamNameScore teamName = {this.props.team2Name} teamScore = {this.props.score2} selected = {!this.state.bidTeam2}/>
        </View>
        <View style = {styles.row}>
          <BidInfo
            update_bid_team = {(value) => this.setState({bidTeam2: value})}
            update_bid = {(value) => this.setState({bidAmount: value})}
            bidTeam1 = {this.state.bidTeam2}
            bidAmount = {this.state.bidAmount}
          />
        </View>

        <View style = {styles.row}>
          <MeldsTricks 
            trick_value = {(this.state.trick1.toString() === "NaN") ? "" : this.state.trick1.toString()} 
            teamName = {this.props.team1Name}  
            update_meld = {(value) => this.setState({meld1: value})} 
            update_trick = {(value) => {update_tricks(1, value)}}
          />
          <MeldsTricks 
            trick_value = {(this.state.trick2.toString() === "NaN") ? "" : this.state.trick2.toString()} 
            teamName = {this.props.team2Name}  
            update_meld = {(value) => this.setState({meld2: value})} 
            update_trick = {(value) => {update_tricks(2, value)}}
          />
        </View>
        <Button
          accessibilityLabel="Submit button"
          onPress={submit}
          title="Submit"
        />

        
      </View>


    );
  }
}

class TeamNameScore extends Component {
  constructor(props) {
    super(props)
    this.state = {
     

    }
  }
 
  render() {

    return (
      <View style = {(this.props.selected) ? {flex:1} : styles.selected}>
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

class BidInfo extends Component {

  constructor(props) {
      super(props)
      this.state = {}
  }

  render() {
    return (
      <View style={{flex:1, flexDirection:'column', alignItems:'center'}}>
        <Switch
          style = {{alignSelf:'center'}}
          onValueChange={(value) => this.props.update_bid_team(value)}
          value ={this.props.bidTeam1}
        />
       
        <TextInput
            style = {styles.label}
            accessibilityLabel='Bid Input'
            placeholder= {`Bid Amount`}
            onChangeText = {(value) => this.props.update_bid(value)}
            keyboardType = 'numeric'
        />
        
      </View>
    )
  }
}

class MeldsTricks extends Component {

constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    let teamName = this.props.teamName
    let meld = teamName + " Meld"
    let tricks = teamName + " Tricks"

    return (
      <View style={{flex:1, flexDirection:'column', alignItems:'center'}}>

        <TextInput
            style = {styles.label}
            accessibilityLabel='Meld input'
            placeholder= {meld}
            onChangeText = {(value) => this.props.update_meld(value)}
            keyboardType = 'numeric'
        />
        <TextInput
            style = {styles.label}
            accessibilityLabel='Trick input'
            placeholder= {tricks}
            onChangeText = {(value) => this.props.update_trick(value)}
            keyboardType = 'numeric'
            value = {this.props.trick_value}
        />
      </View>
    )
  }

}
