var React  = require('react-native');

var{
  View,
  Text,
  StyleSheet,
  Image,
  Platform
} = React;

var Button = require('../common/button');
var Post = require('../common/post');

module.exports =  React.createClass({

  render: function(){
    console.log(this.props.route);
    return (
      <Image source={require('../../assets/bdg.jpeg')} style={styles.backgroundImage}>
        <View style = {styles.container}>
          <Text style = {styles.label1}>Your Round is complete</Text>
        </View>
        <Button text = "Save Game to database" onPress = {this.saveGame}/>
        <View style = {styles.container2}></View>
      </Image>
    );
  },
  saveGame: function(){
    Post('submitGame', this.props.route);
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
    fontSize: 18,
    color: 'white'
  },

});
