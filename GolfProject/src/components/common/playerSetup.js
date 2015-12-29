var React = require('react-native');

var {
  View,
  Text,
  TextInput,
  StyleSheet,
} =  React;

module.exports = React.createClass({
  render: function(){
    return(
        <View style  = {styles.flowright}>
          <TextInput
            style  = {styles.input}
            placeholder = "Name"
            value  = {this.props.value1}
            onChangeText = {this.props.onChangeText}
            />
          <TextInput
            style  = {styles.input2}
            placeholder = "HCP"
            value  = {this.props.value2}
            onChangeText = {this.props.onChangeText2}
            />
        </View>
    );
  },
});

var styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  label:{
    fontSize: 18,
    color: "white"
  },
  input: {
    padding: 4,
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    margin: 5,
    width: 150,
    alignSelf: 'center'
  },
  input2: {
    padding: 4,
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    margin: 5,
    width: 45,
    alignSelf: 'center'
  },
  flowright: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
