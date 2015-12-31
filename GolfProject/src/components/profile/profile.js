var React  = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  ListView
}=React;

var Api  = require('../common/api');

module.exports = React.createClass({
  getInitialState: function () {
    return{
      name: '',
      winnings: 0,
      gamesPlayed: 0,
      lastPlayed: '',
      friends: [],
    };
  },
  componentDidMount: function () {
    console.log('componentDidMount')
    Api('user/joe')
      .then((data) => {
        console.log(data)
        this.setState({
          name: data.username,
          winnings: data.winnings,
          gamesWon: data.gamesWon,
          lastPlayed: data.lastPlayed,
          gamesPlayed: data.gamesPlayed,
        })
      })
  },
  render: function () {
    var won = 'won';
    var color = 'green';
    var amount = this.state.winnings;
    if (amount < 0) {
      won = 'lost';
      color = 'red';
      amount = Math.abs(amount);
    };

    return (
      <View style = {styles.container}>

        <Text style = {styles.name}>{this.state.name}</Text>

        <Text style = {styles.label}>The last game you played was on {this.state.lastPlayed}</Text>
        <Text style = {styles.label}>You have won {this.state.gamesWon} out of {this.state.gamesPlayed} games</Text>
        <Text style = {styles.label}>Total winnings:{"\n"}$<Text style = {{color: color, fontSize: 25}}>{amount}</Text></Text>
      </View>
    )
  }
});

var styles  = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 5,
  },
  name: {
    flex: 1,
    paddingTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30
  },
  label: {
    fontSize: 18,
    color: 'black',
    textAlign:'center',
    flex:1
  },
})
