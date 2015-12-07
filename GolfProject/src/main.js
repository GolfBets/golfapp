var React  = require('react-native');
var {
  StyleSheet,
  Navigator
} = React;

var Parse  = require('parse/react-native');
var Signin = require('./components/authentication/signin');
var Signup = require('./components/authentication/signup');
var Course = require('./components/coursesetup/course');

var ROUTES = {
  signin: Signin,
  signup: Signup,
  course: Course,
};

module.exports = React.createClass({
  componentWillMount: function(){
    Parse.initialize('Ip4K6IbQ8ilmRFAh7dO5LUAlZGm0d423JLpcO39f','NbdmBpotlFLCnq2WY7TMuBT0sDtyNG7lxo28vRxP')
  },
  renderScene: function(route, navigator){
    var Component = ROUTES[route.name];
    return <Component route ={route} navigator = {navigator}/>;
  },
  render: function(){
    return(
      <Navigator
      style = {styles.container}
      initialRoute={{name: 'signin'}}
      renderScene={this.renderScene}
      configureScene = {()=>{return Navigator.SceneConfigs.FloatFromRight;}}
      />
    );
  }
});

var styles  = StyleSheet.create({
  container: {
    flex: 1,
  },
});
