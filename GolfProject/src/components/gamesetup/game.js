var React  = require('react-native');

var {
  View,
  Text,
  ListView,
  StyleSheet
} = React;

module.exports = React.createClass({

  render: function(){
    console.log('game props',this.props)
    return (
      <View style = {styles.container}>
        <Text style = {styles.label}> This is the Game Page</Text>
      </View>
    );
  },
});

var styles  = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  label: {
    fontSize: 18,
    color: 'white'
  }

});
