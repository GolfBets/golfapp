var React  = require('react-native');
var {
  StyleSheet,
  Navigator,
  AsyncStorage,
  View,
  Text,
} = React;

var Parse  = require('parse/react-native');
var Signin = require('./components/authentication/signin');
var Signup = require('./components/authentication/signup');
var CourseFav = require('./components/coursesetup/coursefav');
var CourseCity = require('./components/coursesetup/coursecity');
var Players = require('./components/playersetup/players');
var Game  = require('./components/gamesetup/game');
var Round = require('./components/currentgame/round');
var Hole = require('./components/currentgame/hole');
var BetsRoundRobin = require('./components/gamesetup/betsroundrobin');
var BetsNassau = require('./components/gamesetup/betsnassau');
var Profile = require('./components/profile/profile');
var EndGame = require('./components/endgame/endgame');

var ROUTES = {
  signin: Signin,
  signup: Signup,
  coursefav: CourseFav,
  coursecity: CourseCity,
  players: Players,
  game: Game,
  betsroundrobin: BetsRoundRobin,
  betsnassau: BetsNassau,
  round: Round,
  hole: Hole,
  profile: Profile,
  endgame: EndGame,
};

module.exports = React.createClass({

  getInitialState: function(){
    return {
      currentGame:'2',
    };
  },

  componentWillMount: function(){
    Parse.initialize('Ip4K6IbQ8ilmRFAh7dO5LUAlZGm0d423JLpcO39f','NbdmBpotlFLCnq2WY7TMuBT0sDtyNG7lxo28vRxP');
  },

  componentDidMount: function(){
    AsyncStorage.getItem("currentGame").then((value) => {
        this.setState({"currentGame": value});
    }).done();
  },


  renderScene: function(route, navigator, props){
    var Component = ROUTES[route.name];
    return <Component route ={route} navigator = {navigator} props = {props}/>;
  },
  render: function(){
    console.log('navigate');
    console.log('this.state.currentGame ', this.state.currentGame);

    if (this.state.currentGame === '2'){
      return (<View>
        <Text>Loading...</Text>
      </View>);
    }
    if (this.state.currentGame === "true"){
      return(
        <Navigator
        style = {styles.container}
        initialRoute={{name: 'signup'}}
        renderScene={this.renderScene}
        configureScene = {()=>{return Navigator.SceneConfigs.FloatFromRight;}}
        />
      );
    } else {
      return(
        <Navigator
        style = {styles.container}
        initialRoute={{name: 'signin'}}
        renderScene={this.renderScene}
        configureScene = {()=>{return Navigator.SceneConfigs.FloatFromRight;}}
        />
      );
    }
  }
});

var styles  = StyleSheet.create({
  container: {
    flex: 1,
  },
});
