var React  = require('react-native');

var{
  View,
  Text,
  StyleSheet,
  Image,
  Platform
} = React;

var Button = require('../common/button');

module.exports =  React.createClass({

  render: function(){
    console.log(this.props.state);
    console.log(this.props.props);
    return (
      <Image source={require('../../assets/bdg.jpeg')} style={styles.backgroundImage}>
        <View style = {styles.container}>
          <Text style = {styles.label1}>Your Round is complete</Text>
        </View>
        <View style = {styles.container2}></View>
      </Image>
    );
  },
});

var styles  = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container2:{
    flex: 1
  },
  backgroundImage: {
    marginTop:(Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: 'transparent',
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
  label:{
    fontSize: 18,
    color: 'white'
  },
  label1:{
    fontSize: 14,
    color: 'white'
  },

});
