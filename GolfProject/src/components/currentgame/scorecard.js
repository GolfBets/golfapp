var React  = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  Dimensions
}=React;

var Button  = require('../common/button');
var ScorecardFront = require('../common/scorecardfront');
var ScorecardBack = require('../common/scorecardback');
var {height, width} = Dimensions.get('window');
height = height - 65;

module.exports= React.createClass({

  render: function(){
    console.log(this.props);
    var playersFront  = [];
    var playersBack = [];
    var parFront = this.props.courseInfo.par.slice(0,9);
    var parBack = this.props.courseInfo.par.slice(9);
    var hdcpFront = this.props.courseInfo.hdcp.slice(0,9);
    var hdcpBack = this.props.courseInfo.hdcp.slice(9);
    var temp = 0;
    for (var i = 0; i < parFront.length; i++) {
      temp += parFront[i];
    }
    parFront.push(temp, '');

    var rowParFront = parFront.map(function(element, index) {
      return (<Text style = {styles.label}>{element}</Text>);
    });

    var temp1 = 0;
    for (i = 0; i < parBack.length; i++) {
      temp1 += parBack[i];
    }
    var temp2 = temp + temp1;
    parBack.push(temp1, temp2);
    var rowParBack = parBack.map(function(element, index) {
      return (<Text style = {styles.label}>{element}</Text>);
    });
    hdcpFront.push('','');
    hdcpBack.push('','');
    var rowHdcpFront = hdcpFront.map(function(element, index) {
      return (<Text style = {styles.label}>{element}</Text>);
    });
    var rowHdcpBack = hdcpBack.map(function(element, index) {
      return (<Text style = {styles.label}>{element}</Text>);
    });
    for (i = 1; i<=this.props.playerCount; i++){
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
          <Text style = {styles.label}>Out</Text>
          <Text style = {styles.label}></Text>
        </View>
        <View style = {styles.flowright}>
          <Text style = {styles.labelName}>Par</Text>
          {rowParFront}
        </View>
        <View style = {styles.flowright}>
          <Text style = {styles.labelName}>Handicap</Text>
          {rowHdcpFront}
        </View>
          {playersFront}
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
          <Text style = {styles.label}>In</Text>
          <Text style = {styles.label}>Tot</Text>
        </View>
        <View style = {styles.flowright}>
          <Text style = {styles.labelName}>Par</Text>
          {rowParBack}
        </View>
        <View style = {styles.flowright}>
          <Text style = {styles.labelName}>Handicap</Text>
          {rowHdcpBack}
        </View>
        {playersBack}
      </View>
    );
  },
  // onGoBack: function(){
  //   this.props.navigator.pop();
  // },
});

var styles = StyleSheet.create({

  container: {
    transform: [{rotate: '90deg'}],
    marginTop: width/2 - 48,
    // marginTop: 20,
    // marginLeft: 10,
    marginRight: 10,
    marginLeft: -94,
    // padding:20,
    backgroundColor:'white',
    justifyContent: 'center',
    // flex: 1,
    width: height - 20,
    height: width,
    // flexDirection: 'row',
    // alignItems: 'stretch'
  },
  title:{
    fontSize: 25,
    color: "black",
    justifyContent: "center",
    alignSelf: 'center',
  },
  label: {
    fontSize: 12,
    color: 'black',
    textAlign:'center',
    borderWidth: 1,
    borderColor: 'black',
    flex: 1
  },
  empty: {
    fontSize: 12,
    color: 'black',
    textAlign:'center',
    flex: 1
  },
  label1: {
    fontSize: 15,
    padding:5,
    color: 'black',
    fontStyle: "italic",
    justifyContent: 'center',
    alignSelf: "center"
  },
  label2: {
    fontSize: 12,
    color: 'black',
  },
  labelName: {
    fontSize: 12,
    color: 'black',
    flex:1.5
  },
  flowright: {
    justifyContent: "space-between",
    flexDirection: 'row',

  },


});
