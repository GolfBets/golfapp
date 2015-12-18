var React  = require('react-native');

var {
  View,
  Text,
  StyleSheet
}=React;

var Button  = require('../common/button');

module.exports= React.createClass({

  render: function(){
    //console.log(this.props.route);
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
          <Text style = {styles.label}>In</Text>
          <Text style = {styles.label}></Text>
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
          <Text style = {styles.label}>{this.props.route.player1score.totalFront}</Text>
          <Text style = {styles.label}></Text>
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
          <Text style = {styles.label}>{this.props.route.player2score.totalFront}</Text>
          <Text style = {styles.label}></Text>
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
          <Text style = {styles.label}>{this.props.route.player3score.totalFront}</Text>
          <Text style = {styles.label}></Text>
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
          <Text style = {styles.label}>{this.props.route.player4score.totalFront}</Text>
          <Text style = {styles.label}></Text>
        </View>
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
        <View style = {styles.flowright}>
          <Text style = {styles.labelName}>{this.props.route.player1}</Text>
          <Text style = {styles.label}>{this.props.route.player1score.h10}</Text>
          <Text style = {styles.label}>{this.props.route.player1score.h11}</Text>
          <Text style = {styles.label}>{this.props.route.player1score.h12}</Text>
          <Text style = {styles.label}>{this.props.route.player1score.h13}</Text>
          <Text style = {styles.label}>{this.props.route.player1score.h14}</Text>
          <Text style = {styles.label}>{this.props.route.player1score.h15}</Text>
          <Text style = {styles.label}>{this.props.route.player1score.h16}</Text>
          <Text style = {styles.label}>{this.props.route.player1score.h17}</Text>
          <Text style = {styles.label}>{this.props.route.player1score.h18}</Text>
          <Text style = {styles.label}>{this.props.route.player1score.totalBack}</Text>
          <Text style = {styles.label}>{this.props.route.player1score.total}</Text>
        </View>
        <View style = {styles.flowright}>
          <Text style = {styles.labelName}>{this.props.route.player2}</Text>
          <Text style = {styles.label}>{this.props.route.player2score.h10}</Text>
          <Text style = {styles.label}>{this.props.route.player2score.h11}</Text>
          <Text style = {styles.label}>{this.props.route.player2score.h12}</Text>
          <Text style = {styles.label}>{this.props.route.player2score.h13}</Text>
          <Text style = {styles.label}>{this.props.route.player2score.h14}</Text>
          <Text style = {styles.label}>{this.props.route.player2score.h15}</Text>
          <Text style = {styles.label}>{this.props.route.player2score.h16}</Text>
          <Text style = {styles.label}>{this.props.route.player2score.h17}</Text>
          <Text style = {styles.label}>{this.props.route.player2score.h18}</Text>
          <Text style = {styles.label}>{this.props.route.player2score.totalBack}</Text>
          <Text style = {styles.label}>{this.props.route.player2score.total}</Text>
        </View>
        <View style = {styles.flowright}>
          <Text style = {styles.labelName}>{this.props.route.player3}</Text>
          <Text style = {styles.label}>{this.props.route.player3score.h10}</Text>
          <Text style = {styles.label}>{this.props.route.player3score.h11}</Text>
          <Text style = {styles.label}>{this.props.route.player3score.h12}</Text>
          <Text style = {styles.label}>{this.props.route.player3score.h13}</Text>
          <Text style = {styles.label}>{this.props.route.player3score.h14}</Text>
          <Text style = {styles.label}>{this.props.route.player3score.h15}</Text>
          <Text style = {styles.label}>{this.props.route.player3score.h16}</Text>
          <Text style = {styles.label}>{this.props.route.player3score.h17}</Text>
          <Text style = {styles.label}>{this.props.route.player3score.h18}</Text>
          <Text style = {styles.label}>{this.props.route.player3score.totalBack}</Text>
          <Text style = {styles.label}>{this.props.route.player3score.total}</Text>
        </View>
        <View style = {styles.flowright}>
          <Text style = {styles.labelName}>{this.props.route.player4}</Text>
          <Text style = {styles.label}>{this.props.route.player4score.h10}</Text>
          <Text style = {styles.label}>{this.props.route.player4score.h11}</Text>
          <Text style = {styles.label}>{this.props.route.player4score.h12}</Text>
          <Text style = {styles.label}>{this.props.route.player4score.h13}</Text>
          <Text style = {styles.label}>{this.props.route.player4score.h14}</Text>
          <Text style = {styles.label}>{this.props.route.player4score.h15}</Text>
          <Text style = {styles.label}>{this.props.route.player4score.h16}</Text>
          <Text style = {styles.label}>{this.props.route.player4score.h17}</Text>
          <Text style = {styles.label}>{this.props.route.player4score.h18}</Text>
          <Text style = {styles.label}>{this.props.route.player4score.totalBack}</Text>
          <Text style = {styles.label}>{this.props.route.player4score.total}</Text>
        </View>
        <Text style = {styles.label1}>Betting Results</Text>
        <View style = {styles.flowright}>
          <Text style = {styles.labelName}>{this.props.route.player1}</Text>
          <Text style = {styles.label2}>${this.props.route.player1Results}</Text>
          <Text style = {styles.labelName}>{this.props.route.player2}</Text>
          <Text style = {styles.label2}>${this.props.route.player2Results}</Text>
        </View>
        <View style = {styles.flowright}>
          <Text style = {styles.labelName}>{this.props.route.player3}</Text>
          <Text style = {styles.label2}>${this.props.route.player3Results}</Text>
          <Text style = {styles.labelName}>{this.props.route.player4}</Text>
          <Text style = {styles.label2}>${this.props.route.player4Results}</Text>
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
