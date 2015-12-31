var React  = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Platform
} = React;

var Parse = require('parse/react-native');
var Button = require('../common/button');

module.exports =  React.createClass({

  getInitialState: function(){
    return{
     username: '',
     password: '',
     errorMessage: ''
    };
  },

  render: function(){
    //console.log(this.state);
    return (
      <Image source={require('../../assets/bdg.jpeg')} style={styles.backgroundImage}>
        <View style = {styles.container}>
          <Text style = {styles.label1}>Sign In</Text>
          <Text style  = {styles.label}>Username:</Text>
          <TextInput
            style  = {styles.input}
            value  = {this.state.username}
            onChangeText = {(text)=>this.setState({username: text})}
            />
            <Text style  = {styles.label}>Password:</Text>
            <TextInput
            secureTextEntry = {true}
            style  = {styles.input}
            value = {this.state.password}
            onChangeText={(text)=>this.setState({password: text})}
            />
            <Text style = {styles.label}>{this.state.errorMessage}</Text>
            <Button text = {'Sign In'} onPress={this.onPress}/>
            <Button text = {"I need an account..."} onPress={this.onSignupPress}/>
          </View>
          <View style = {styles.container2}></View>
      </Image>
    );
  },

  onSignupPress: function(){
    this.props.navigator.push({name:'signup'}); // pass additional props here
  },

  onPress: function(){
    Parse.User.logIn(this.state.username, this.state.password,{
      success: (user) => {this.props.navigator.immediatelyResetRouteStack([{name: 'coursefav'}]);},
      error: (data, error) => {this.setState({errorMessage: error.message});}
    });
  }
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
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    margin: 5,
    width: 200,
    alignSelf: 'center'
  }

});
