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
const window = Dimensions.get('window');

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
      bidErrorMessage: "",
    }
    };


  render() {

    const submit = () => {

      if(parseInt(this.state.bidAmount) < this.state.startingBid){


        this.setState({bidAmount: this.state.startingBid , bidErrorMessage: "Please enter a bid amount equal to or greater than " + this.state.startingBid.toString()})
        return
      }
      else{
        this.setState({bidErrorMessage:""})

      }
      
      let score1 = 0;
      let score2 = 0;

      score1 = parseInt(score1) + parseInt(this.state.meld1) + parseInt(this.state.trick1)
      score2 = parseInt(score2) + parseInt(this.state.meld2) + parseInt(this.state.trick2)

      if(parseInt(this.state.trick1) === 0){

        score1 = 0
      }

      if(parseInt(this.state.trick2) === 0){
        score2 = 0
      }

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
      let roundScore1 = parseInt(score1)
      let roundScore2 = parseInt(score2)
      score1 = parseInt(score1) + parseInt(this.props.score1)
      score2 = parseInt(score2) + parseInt(this.props.score2)

      this.props.set_game_state({score1:score1, score2:score2})
      
      let rounds = this.props.rounds
      console.log(rounds)
      let newRound = {

          bidAmount:this.state.bidAmount,
          bidTeam: "BID TEAM",
          t1Score: roundScore1,
          t2Score: roundScore2,
          meld1: this.state.meld1,
          meld2: this.state.meld2,
          trick1: this.state.trick1,
          trick2: this.state.trick2,
          runningTotal1: score1,
          runningTotal2: score2,

      }
      rounds.push(newRound)

      this.props.set_game_state({rounds:rounds})

    };

    const update_tricks = (teamNum, tricks) => {

      tricks = parseInt(tricks)
      if(tricks > this.state.totalTricks){

        tricks = this.state.totalTricks
      }
      let otherTricks = parseInt(this.state.totalTricks) - parseInt(tricks)

      if(teamNum === 1){
        this.setState({trick1:tricks, trick2:otherTricks})
      }
      else{

        this.setState({trick1:otherTricks, trick2:tricks})
      }

    };
    const update_bid = (bid) => {

      bid = parseInt(bid)
      console.log(bid)
      // if(bid < this.state.startingBid){

      //   bid = this.state.startingBid
      // }
      this.setState({bidAmount: bid})
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



        /*<GameTabs/
            tabNames=["Game", "Scores"]
        // <Button
        //   accessibilityLabel="Submit button"
        //   onPress={this.props.set_game_state({screen:"LogScreen"})}
        //   title="Logs"
        // />
        >*/
      }
        <View style = {styles.tabs}>
          <Button
                accessibilityLabel="Back button"
                title="Back"
                onPress= {() => this.props.set_game_state({screen: "SetupScreen"})}
          />
          <Button
              accessibilityLabel="Back button"
              title="Logs"
              onPress= {() => this.props.set_game_state({screen: "LogScreen"})}
          />
        </View>
        <View style = {styles.row}>
          <TeamNameScore teamName = {this.props.team1Name} teamScore = {this.props.score1} selected = {this.state.bidTeam2}/>
          <TeamNameScore teamName = {this.props.team2Name} teamScore = {this.props.score2} selected = {!this.state.bidTeam2}/>
        </View>
        <Text style = {styles.error_message}>{this.state.bidErrorMessage}</Text>
        <View style = {styles.row}>

          <BidInfo
            update_bid_team = {(value) => this.setState({bidTeam2:value})}
            update_bid = {(value) => {update_bid(value)}}
            bidTeam2 = {this.state.bidTeam2}
            bid_value = {(this.state.bidAmount.toString() === "NaN") ? "" : this.state.bidAmount.toString()}
            teamName = {(this.state.bidTeam2) ? this.props.team2Name : this.props.team1Name}

          />
        </View>

        <View style = {styles.row}>
          <MeldsTricks 
            trick_value = {(this.state.trick1.toString() === "NaN") ? "" : this.state.trick1.toString()} 
            meld_value = {(this.state.meld1.toString() === "NaN") ? "" : this.state.meld1.toString()} 
            teamName = {this.props.team1Name}  
            update_meld = {(value) => this.setState({meld1: value})} 
            update_trick = {(value) => {update_tricks(1, value)}}
          />
          <MeldsTricks 
            trick_value = {(this.state.trick2.toString() === "NaN") ? "" : this.state.trick2.toString()} 
            meld_value = {(this.state.meld2.toString() === "NaN") ? "" : this.state.meld2.toString()} 
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
          value ={this.props.bidTeam2}
        />
       <View style = {{flexDirection:'row'}}>
          <Text style = {styles.input_label}>{this.props.teamName} Bid: </Text>
          <TextInput
              style = {styles.text_input}
              accessibilityLabel='Bid Input'
              placeholder= {`Bid Amount`}
              onChangeText = {(value) => this.props.update_bid(value)}
              keyboardType = 'numeric'
              value = {this.props.bid_value}
          />
        </View>
        
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
      <View style={{flex:1, flexDirection:'column', alignItems:'center', margin:15}}>
        <View style = {styles.input_container}>
          <Text style = {styles.input_label}>{this.props.teamName} Meld: </Text>
          <TextInput
              style = {styles.text_input}
              accessibilityLabel='Meld input'
              placeholder= {meld}
              onChangeText = {(value) => this.props.update_meld(value)}
              keyboardType = 'numeric'
              value = {this.props.meld_value}
          />
        </View>
        <View style = {styles.input_container}>

          <Text style = {styles.input_label}>{this.props.teamName} Tricks: </Text>


          <TextInput
              style = {styles.text_input}
              accessibilityLabel='Trick input'
              placeholder= {tricks}
              onChangeText = {(value) => this.props.update_trick(value)}
              keyboardType = 'numeric'
              value = {this.props.trick_value}
          />
        </View>
      </View>
    )
  }

}
