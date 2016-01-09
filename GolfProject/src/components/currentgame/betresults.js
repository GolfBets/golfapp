var React  = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  Platform
}=React;



module.exports= React.createClass({

  render: function(){
    return (
      <View style = {styles.container}>
        <Text style = {styles.title}>{this.props.course}</Text>
        <Text style = {styles.label1}>Betting Results</Text>
        <View style = {styles.flowright}>
          <Text style = {styles.labelName}>{this.props.player1}</Text>
          <Text style = {styles.label2}>${this.props.player1Results}</Text>
          <Text style = {styles.labelName}>{this.props.player2}</Text>
          <Text style = {styles.label2}>${this.props.player2Results}</Text>
        </View>
        <View style = {styles.flowright}>
          <Text style = {styles.labelName}>{this.props.player3}</Text>
          <Text style = {styles.label2}>${this.props.player3Results}</Text>
          <Text style = {styles.labelName}>{this.props.player4}</Text>
          <Text style = {styles.label2}>${this.props.player4Results}</Text>
        </View>
      </View>
    );
  },

});

var styles = StyleSheet.create({

  container: {
    marginTop:20,
    padding:20,
    backgroundColor:'transparent',
    justifyContent: 'center'
  },
  title:{
    fontSize: 23,
    color: "white",
    justifyContent: "center",
    alignSelf: 'center'
  },
  label: {
    fontSize: 12,
    color: 'white',
    width:21,
    textAlign:'center'
  },
  label1: {
    fontSize: 15,
    padding:5,
    color: 'white',
    fontStyle: "italic",
    justifyContent: 'center',
    alignSelf: "center"
  },
  label2: {
    fontSize: 14,
    color: 'white',
  },
  labelName: {
    fontSize: 14,
    color: 'white',
    width:60
  },
  flowright: {
    flex:1,
    justifyContent: "space-between",
    flexDirection: 'row',

  },


});
