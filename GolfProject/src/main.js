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
var Hole2 = require('./components/currentgame/hole2');
var Hole3 = require('./components/currentgame/hole3');
var Hole4 = require('./components/currentgame/hole4');
var Hole5 = require('./components/currentgame/hole5');
var Hole6 = require('./components/currentgame/hole6');
var Hole7 = require('./components/currentgame/hole7');
var Hole8 = require('./components/currentgame/hole8');
var Hole9 = require('./components/currentgame/hole9');
var Hole10 = require('./components/currentgame/hole10');
var Hole11 = require('./components/currentgame/hole11');
var Hole12 = require('./components/currentgame/hole12');
var Hole13 = require('./components/currentgame/hole13');
var Hole14 = require('./components/currentgame/hole14');
var Hole15 = require('./components/currentgame/hole15');
var Hole16 = require('./components/currentgame/hole16');
var Hole17 = require('./components/currentgame/hole17');
var Hole18 = require('./components/currentgame/hole18');

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
  hole2: Hole2,
  hole3: Hole3,
  hole4: Hole4,
  hole5: Hole5,
  hole6: Hole6,
  hole7: Hole7,
  hole8: Hole8,
  hole9: Hole9,
  hole10: Hole10,
  hole11: Hole11,
  hole12: Hole12,
  hole13: Hole13,
  hole14: Hole14,
  hole15: Hole15,
  hole16: Hole16,
  hole17: Hole17,
  hole18: Hole18,
};

module.exports = React.createClass({
  componentWillMount: function(){
    Parse.initialize('Ip4K6IbQ8ilmRFAh7dO5LUAlZGm0d423JLpcO39f','NbdmBpotlFLCnq2WY7TMuBT0sDtyNG7lxo28vRxP')
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
