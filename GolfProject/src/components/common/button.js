var React = require('react-native');

var {
  Text,
  StyleSheet,
  TouchableHighlight
} = React;

module.exports = React.createClass({
  render: function(){
    return(
      <TouchableHighlight
        style = {styles.button}
        underlayColor = {'gray'}
        onPress={this.props.onPress}
        >
        <Text style  = {styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  },
});

var styles  = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    borderColor: 'white',
    marginTop: 10,
  },
  buttonText: {
    color:'white',
    flex: 1,
    alignSelf: 'center',
    fontSize: 16
  },
});
