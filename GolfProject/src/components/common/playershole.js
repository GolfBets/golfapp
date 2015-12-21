var React = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} = React;

module.exports = React.createClass({
  render: function(){
    return(
      <View style = {styles.flowright}>
        <Text style = {styles.label1}>{this.props.text1}</Text>
        <TouchableHighlight
          onPress={this.props.onPress1}>
          <Text style={styles.label4}>-</Text>
        </TouchableHighlight>
        <Text style = {styles.label6}>{this.props.text2}</Text>
        <TouchableHighlight
          onPress={this.props.onPress2}>
          <Text style={styles.label4}>+</Text>
        </TouchableHighlight>
        <Text style = {styles.label3}>Net {this.props.text3}</Text>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  flowright: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding:5
  },
  label1: {
    fontSize: 18,
    color: 'white',
    width: 75,
  },

  label3: {
    fontSize: 20,
    color: 'white',
    marginLeft:20,
    marginRight:5

  },
  label4: {
    fontSize:40,
    fontWeight: '900',
    color: 'white',
    marginRight:10,
    marginLeft:10,
  },
  label6: {
    fontSize: 20,
    color: 'white',

  },



});
