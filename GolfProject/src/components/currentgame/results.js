var React  = require('react-native');

var {
  View,
  Text,
  StyleSheet
}=React;

var Button  = require('../common/button');

module.exports= React.createClass({

  render: function(){
    console.log(this.props.route);
    return (
      <View style = {styles.container}>
        <Text style = {styles.title}>{this.props.route.course}</Text>
        <Text style = {styles.label1}>Front 9</Text>
        <View style = {styles.flowright}>
          <Text style = {styles.labelName}>Hole #</Text>
          <Text style = {styles.label}>1</Text>
          <Text style = {styles.label}>2</Text>
          <Text style = {styles.label}>3</Text>
          <Text style = {styles.label}>4</Text>
          <Text style = {styles.label}>5</Text>
          <Text style = {styles.label}>6</Text>
          <Text style = {styles.label}>7</Text>
          <Text style = {styles.label}>8</Text>
          <Text style = {styles.label}>9</Text>
        </View>
        <Text style = {styles.labelName}></Text>
        <View style = {styles.flowright}>
          <Text style = {styles.labelName}>{this.props.route.player1}</Text>
          <Text style = {styles.label}>{this.props.route.player1score.h1}</Text>
          <Text style = {styles.label}>{this.props.route.player1score.h2}</Text>
          <Text style = {styles.label}>{this.props.route.player1score.h3}</Text>
          <Text style = {styles.label}>{this.props.route.player1score.h4}</Text>
          <Text style = {styles.label}>{this.props.route.player1score.h5}</Text>
          <Text style = {styles.label}>{this.props.route.player1score.h6}</Text>
          <Text style = {styles.label}>{this.props.route.player1score.h7}</Text>
          <Text style = {styles.label}>{this.props.route.player1score.h8}</Text>
          <Text style = {styles.label}>{this.props.route.player1score.h9}</Text>
        </View>
        <View style = {styles.flowright}>
          <Text style = {styles.labelName}>{this.props.route.player2}</Text>
          <Text style = {styles.label}>{this.props.route.player2score.h1}</Text>
          <Text style = {styles.label}>{this.props.route.player2score.h2}</Text>
          <Text style = {styles.label}>{this.props.route.player2score.h3}</Text>
          <Text style = {styles.label}>{this.props.route.player2score.h4}</Text>
          <Text style = {styles.label}>{this.props.route.player2score.h5}</Text>
          <Text style = {styles.label}>{this.props.route.player2score.h6}</Text>
          <Text style = {styles.label}>{this.props.route.player2score.h7}</Text>
          <Text style = {styles.label}>{this.props.route.player2score.h8}</Text>
          <Text style = {styles.label}>{this.props.route.player2score.h9}</Text>
        </View>
        <View style = {styles.flowright}>
          <Text style = {styles.labelName}>{this.props.route.player3}</Text>
          <Text style = {styles.label}>{this.props.route.player3score.h1}</Text>
          <Text style = {styles.label}>{this.props.route.player3score.h2}</Text>
          <Text style = {styles.label}>{this.props.route.player3score.h3}</Text>
          <Text style = {styles.label}>{this.props.route.player3score.h4}</Text>
          <Text style = {styles.label}>{this.props.route.player3score.h5}</Text>
          <Text style = {styles.label}>{this.props.route.player3score.h6}</Text>
          <Text style = {styles.label}>{this.props.route.player3score.h7}</Text>
          <Text style = {styles.label}>{this.props.route.player3score.h8}</Text>
          <Text style = {styles.label}>{this.props.route.player3score.h9}</Text>
        </View>
        <View style = {styles.flowright}>
          <Text style = {styles.labelName}>{this.props.route.player4}</Text>
          <Text style = {styles.label}>{this.props.route.player4score.h1}</Text>
          <Text style = {styles.label}>{this.props.route.player4score.h2}</Text>
          <Text style = {styles.label}>{this.props.route.player4score.h3}</Text>
          <Text style = {styles.label}>{this.props.route.player4score.h4}</Text>
          <Text style = {styles.label}>{this.props.route.player4score.h5}</Text>
          <Text style = {styles.label}>{this.props.route.player4score.h6}</Text>
          <Text style = {styles.label}>{this.props.route.player4score.h7}</Text>
          <Text style = {styles.label}>{this.props.route.player4score.h8}</Text>
          <Text style = {styles.label}>{this.props.route.player4score.h9}</Text>
        </View>
        <Button text = "Go to next hole" onPress = {this.onGoBack}/>
      </View>
    );
  },
  onGoBack: function(){
    this.props.navigator.pop();
  },
});

var styles = StyleSheet.create({

  container: {
    marginTop:20,
    padding:20,
    backgroundColor:'black'
  },
  title:{
    fontSize: 25,
    color: "white",
    justifyContent: "center",
    alignItems: 'center'
  },
  label: {
    fontSize: 15,
    color: 'white'
  },
  label1: {
    fontSize: 17,
    color: 'white',
    justifyContent: 'center',
    alignItems: "center"
  },
  labelName: {
    fontSize: 15,
    color: 'white',
    width:75
  },
  flowright: {
    flex:1,
    justifyContent: "space-between",
    flexDirection: 'row',

  },


});
