import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Button,
  TextInput,
  Dimensions,
  ListView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native'

let styles = require('./styles');
// const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class LogScreen extends Component {
	constructor(props) {
	  	super(props);
	    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	    this.state = {
	      dataSource: ds.cloneWithRows(this.props.rounds),
	      activeRowID: null,
	    };
   	};

  render() {

  	const _renderRow = (rowData: string, sectionID: number, rowID: number) =>{
  		console.log(rowID, this.state.activeRowID)
  		if(rowID === this.state.activeRowID){
  			return (
		    	<TouchableHighlight onPress={(e, something)=> onPress(e,{rowID})}>
					<View style={styles.data_row_big}>
							<View style ={styles.delete_button}>
								<Button 
									style = {styles.data_text} 
									onPress= {() => deleteRound(rowID)}
									color = 'red'
									title="Delete"

								/>
							</View>
							
							<Text style={(rowData.runningTotal1 > 0) ? [styles.data_text] : [styles.data_text, styles.data_negative]}>
								{rowData.runningTotal1}
								{"\n"}M: {rowData.meld1}
								{"\n"}T: {rowData.trick1}
							</Text>
							<Text style={(rowData.t1Score > 0) ? [styles.data_text] : [styles.data_text, styles.data_negative]}>{rowData.t1Score}</Text>
							<Text style={(rowData.runningTotal2 > 0) ? [styles.data_text] : [styles.data_text, styles.data_negative]}>
								{rowData.runningTotal2}
								{"\n"}M: {rowData.meld2}
								{"\n"}T: {rowData.trick2}
							</Text>
							<Text style={(rowData.t2Score > 0) ? [styles.data_text] : [styles.data_text, styles.data_negative]}>{rowData.t2Score}</Text>
					
						
				
							
					</View>
				</TouchableHighlight>
		      
		    );
  		}
	    return (
	    	<TouchableHighlight onPress={(e, something)=> onPress(e,{rowID})}>
				<View style={styles.data_row}>
					<Text style={styles.data_text}>{parseInt(rowID) + 1}</Text>
					<Text style={(rowData.runningTotal1 > 0) ? [styles.data_text] : [styles.data_text, styles.data_negative]}>{rowData.runningTotal1}</Text>
					<Text style={(rowData.t1Score > 0) ? [styles.data_text] : [styles.data_text, styles.data_negative]}>{rowData.t1Score}</Text>
					<Text style={(rowData.runningTotal2 > 0) ? [styles.data_text] : [styles.data_text, styles.data_negative]}>{rowData.runningTotal2}</Text>
					<Text style={(rowData.t2Score > 0) ? [styles.data_text] : [styles.data_text, styles.data_negative]}>{rowData.t2Score}</Text>
			
				</View>
			</TouchableHighlight>
	      
	    );
  	}
   const _renderSeparator = (sectionID: number, rowID: number, adjacentRowHighlighted: bool) =>{
	    return (
	      <View
	        key={`${sectionID}-${rowID}`}
	        style={{
	          height: adjacentRowHighlighted ? 4 : 1,
	          backgroundColor: adjacentRowHighlighted ? '#3B5998' : 'powderblue',
	        }}
	      />
	    );
	  }

	const onPress = (e, row) =>{
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

		this.setState({activeRowID:row.rowID, dataSource:ds.cloneWithRows(this.props.rounds)})

		if(false){

			deleteRound(row.rowID)
		}
	}
	const deleteRound = (roundID)=>{
		let rounds = this.props.rounds
		let score1 = rounds[roundID].t1Score
		let score2 = rounds[roundID].t2Score
		

		let currentScore1 = this.props.score1
		let currentScore2 = this.props.score2

		console.log(currentScore1, currentScore2)

		currentScore1 = currentScore1 - score1
		currentScore2 = currentScore2 - score2

		console.log(currentScore1, currentScore2)


		rounds.splice(roundID,1)
		this.props.set_game_state({rounds:rounds, score1: currentScore1, score2:currentScore2})

		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.setState({dataSource: ds.cloneWithRows(rounds)})

	}
    return (
    	<View>
    		<Button
              accessibilityLabel="Back button"
              title="Back to Game"
              onPress= {() => this.props.set_game_state({screen: "ScoreScreen"})}
          	/>
    		<View style={styles.data_header}>
				<Text style={styles.data_head}>Round</Text>
				<Text style={styles.data_head}>{this.props.team1Name} Total</Text>
				<Text style={styles.data_head}>{this.props.team1Name} Round</Text>
				<Text style={styles.data_head}>{this.props.team2Name} Total</Text>
				<Text style={styles.data_head}>{this.props.team2Name} Round</Text>

			</View>

	      	<ListView 
		      	dataSource= {this.state.dataSource}
		      	renderRow={_renderRow}		
	      		renderSeparator={_renderSeparator}
	      	/>
	    </View>
    )
  }
}