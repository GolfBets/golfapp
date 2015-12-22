var React  = require('react-native');

var {
  View,
  Text,
  StyleSheet
}=React;

var Button  = require('../common/button');
var ScorecardFront = require('../common/scorecardfront');
var ScorecardBack = require('../common/scorecardback');

module.exports= React.createClass({

  render: function(){
    var playersFront  = [];
    var playersBack = [];
    for (var i = 1; i<=this.props.playerCount; i++){
      playersFront.push(<ScorecardFront key = {i} text1 = {this.props[`player${i}`]} h1 = {this.props[`player${i}score`].h1} h2 = {this.props[`player${i}score`].h2} h3 = {this.props[`player${i}score`].h3} h4 = {this.props[`player${i}score`].h4} h5 = {this.props[`player${i}score`].h5} h6 = {this.props[`player${i}score`].h6} h7 = {this.props[`player${i}score`].h7} h8 = {this.props[`player${i}score`].h8} h9 = {this.props[`player${i}score`].h9} totalFront = {this.props[`player${i}score`].totalFront}/>);

      playersBack.push(<ScorecardBack key = {i} text1 = {this.props[`player${i}`]} h10 = {this.props[`player${i}score`].h10} h11 = {this.props[`player${i}score`].h11} h12 = {this.props[`player${i}score`].h12} h13 = {this.props[`player${i}score`].h13} h14 = {this.props[`player${i}score`].h14} h15 = {this.props[`player${i}score`].h15} h16 = {this.props[`player${i}score`].h16} h17 = {this.props[`player${i}score`].h17} h18 = {this.props[`player${i}score`].h18} totalBack = {this.props[`player${i}score`].totalBack} total = {this.props[`player${i}score`].total}/>);
    }

    return (
      <View style = {styles.container}>
        <Text style = {styles.title}>{this.props.course}</Text>
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
          <Text style = {styles.label}>In</Text>
          <Text style = {styles.label}></Text>
        </View>
        <Text style = {styles.labelName}></Text>
        <View>{playersFront}</View>
        <Text style = {styles.label1}>Back 9</Text>
        <View style = {styles.flowright}>
          <Text style = {styles.labelName}>Hole #</Text>
          <Text style = {styles.label}>10</Text>
          <Text style = {styles.label}>11</Text>
          <Text style = {styles.label}>12</Text>
          <Text style = {styles.label}>13</Text>
          <Text style = {styles.label}>14</Text>
          <Text style = {styles.label}>15</Text>
          <Text style = {styles.label}>16</Text>
          <Text style = {styles.label}>17</Text>
          <Text style = {styles.label}>18</Text>
          <Text style = {styles.label}>Out</Text>
          <Text style = {styles.label}>Tot</Text>
        </View>
        <Text style = {styles.labelName}></Text>
        <View>{playersBack}</View>
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
        <Button text = "Go to next hole" onPress = {this.onGoBack}/>
      </View>
    );
  },
  // onGoBack: function(){
  //   this.props.navigator.pop();
  // },
});

var styles = StyleSheet.create({

  container: {
    marginTop:20,
    padding:20,
    backgroundColor:'black',
    justifyContent: 'center'
  },
  title:{
    fontSize: 25,
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
    fontSize: 12,
    color: 'white',
  },
  labelName: {
    fontSize: 12,
    color: 'white',
    width:60
  },
  flowright: {
    flex:1,
    justifyContent: "space-between",
    flexDirection: 'row',

  },


});
