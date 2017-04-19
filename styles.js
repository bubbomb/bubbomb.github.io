import {
  StyleSheet,
  
} from 'react-native'

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
	flexStart:{
		alignSelf:'flex-start',
	},
	flexEnd:{
		alignSelf:'flex-end',
	},


	selected: {

		flex:1,
		borderWidth:3,
		borderRadius:16,
		borderColor:'#d3d3d3',
		backgroundColor:'#d3d3d3',
	},


	withShadow: {
	flex:1,
    borderRadius: 3,
    shadowColor: "#d3d3d3",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
	      height: 4,
	      width: -4
    	}
	},


	page: {
    paddingBottom: 300,
  },
  default_textInput: {
    height: 26,
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    flex: 1,
    fontSize: 13,
    padding: 4,
  },
  multiline: {
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    flex: 1,
    fontSize: 13,
    height: 50,
    padding: 4,
    marginBottom: 4,
  },
  multilineWithFontStyles: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Cochin',
    height: 60,
  },
  multilineChild: {
    width: 50,
    height: 40,
    position: 'absolute',
    right: 5,
    backgroundColor: 'red',
  },
  eventLabel: {
    margin: 3,
    fontSize: 12,
  },
  labelContainer: {
    flexDirection: 'row',
    marginVertical:6,
    flex: 1,
  },
  label: {
    width: 115,
    alignItems: 'flex-end',
    marginRight: 10,
    paddingTop: 2,
  },
  rewriteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  remainder: {
    textAlign: 'right',
    width: 24,
  },
  hashtag: {
    color: 'blue',
    fontWeight: 'bold',
  },

})