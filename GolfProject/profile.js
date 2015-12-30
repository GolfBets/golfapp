var React  = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  ListView
}=React;

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
    Api('-------------------')
      .then((data) => {
        this.setState({
          name: data.username,
          winnings: data.winnings,
          lastPlayed: data.lastPlayed,
          friends: data.friends
        })
      })
  },
  render: function () {


    return ()
  }
})
