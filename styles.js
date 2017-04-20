import {
  StyleSheet,
  Dimensions,
  Platform,
  
} from 'react-native'

const window = Dimensions.get('window');

module.exports = StyleSheet.create({

    container: {
	    margin: 4,
	  },
	row: {
	    flexDirection: 'row',

	},
	column: {
		flexDirection:'column',

	},
	center:{
		alignSelf:'center',
	},

	middler_container:{

		marginRight:window.width/6,
		marginLeft:window.width/6,

	},

	input_container:{
		flexDirection:'row',
		padding:window.height/60,
		

	},
	input_label:{
		flex:2,
		alignSelf:'flex-start',
	 	marginTop:'auto',

	},

	text_input: {
	   	flex:1,
	    alignItems: 'flex-end',
	    marginRight: 10,
		width:window.width/10,

  	},

	selected: {

		flex:1,
		borderWidth:3,
		borderRadius:16,
		borderColor:'#d3d3d3',
		backgroundColor:'#d3d3d3',
	},

	selected_input_container:{

		borderWidth:3,
		borderRadius:16,
		borderColor:'#d3d3d3',
		backgroundColor:'#d3d3d3',
		flexDirection:'row',
		padding:window.height/60,
		
	},
	error_message:{
		color:'red',
		alignSelf:'center'
	},
	tabs:{
		flexDirection:'row',
		alignItems:'center',

	},
	data_row:{
		flexDirection: 'row',
	    justifyContent: 'center',
	    height:30,

	},
	data_text:{
		alignSelf:'center',
		flex:1,
		textAlign:'center',

	},
	data_negative:{
		backgroundColor:'#ff5722',
		borderRadius:30,
	},

	data_header:{
		flexDirection: 'row',
	    justifyContent: 'center',
		backgroundColor:'#9e9e9e',
		height:30,
	},

	data_head:{
		textAlign:'center',
		alignSelf:'center',
		flex:1
	},
})