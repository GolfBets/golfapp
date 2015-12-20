var React  = require('react-native');
var {
  StyleSheet,
  Navigator
} = React;

var Parse  = require('parse/react-native');
var Signin = require('./components/authentication/signin');
var Signup = require('./components/authentication/signup');
var CourseFav = require('./components/coursesetup/coursefav');
var CourseCity = require('./components/coursesetup/coursecity');
var Players = require('./components/playersetup/players');
var Game  = require('./components/gamesetup/game');
var Bets = require('./components/gamesetup/bets');
var Round = require('./components/currentgame/round');
var Hole = require('./components/currentgame/hole');
var Results = require('./components/currentgame/results');

var ROUTES = {
  signin: Signin,
  signup: Signup,
  coursefav: CourseFav,
  coursecity: CourseCity,
  players: Players,
  game: Game,
  bets: Bets,
  round: Round,
  hole: Hole,
  results: Results

};

module.exports = React.createClass({
  componentWillMount: function(){
    Parse.initialize('Ip4K6IbQ8ilmRFAh7dO5LUAlZGm0d423JLpcO39f','NbdmBpotlFLCnq2WY7TMuBT0sDtyNG7lxo28vRxP');
  },
  renderScene: function(route, navigator, props){
    var Component = ROUTES[route.name];
    return <Component route ={route} navigator = {navigator} props = {props}/>;
  },
  render: function(){
    console.log('navigate');

    return(
      <Navigator
      style = {styles.container}
      initialRoute={{name: 'coursefav'}}
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
