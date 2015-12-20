var React  = require('react-native');

var{
  View,
  Text,
  StyleSheet
} = React;

var Api = require('../common/api');
var Partners = require('../common/random');
var Button  = require('../common/button');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      player1score:[],
      player2score:[],
      player3score:[],
      player4score:[],
      coursepar: null,
      coursehcp: null,
      teams: [],
    };
  },
  componentDidMount: function(){
    Api(`course/${this.props.route.course}`)
      .then((data) =>{
        //console.log("componentDidMount", data);
        this.setState({
          coursepar: data.par,
          coursehcp: data.hdcp
        });
      })
      .done();
  },

  componentWillMount: function(){
    //console.log(Partners);
    if (this.state.teams.length === 0){
      this.setState({teams: Partners()});

    }
  },

  render: function(){
    //console.log("round", this.state.teams);
  if (this.props.route.playerCount === 4){
      return(
        <View style = {styles.container}>
          <View>
            <Text style = {styles.label2}>{this.props.route.course}</Text>
            <Text style = {styles.label2}></Text>
            <Text style = {styles.label3}>Pairs for Holes 1 to 6</Text>
            <Text style = {styles.label2}></Text>
            <View style = {styles.flowright}>
              <Text style = {styles.label}>Team 1</Text>
              <Text style = {styles.label}>{this.props.route[`player${this.state.teams[0]}`]}</Text>
              <Text style = {styles.label}>{this.props.route[`player${this.state.teams[1]}`]}</Text>
            </View>
            <View style = {styles.flowright}>
              <Text style = {styles.label}>Team 2</Text>
              <Text style = {styles.label}>{this.props.route[`player${this.state.teams[2]}`]}</Text>
              <Text style = {styles.label}>{this.props.route[`player${this.state.teams[3]}`]}</Text>
            </View>
            <Text style = {styles.label2}></Text>
            <Text style = {styles.label3}>Pairs for Holes 7 to 12</Text>
            <Text style = {styles.label2}></Text>
            <View style = {styles.flowright}>
              <Text style = {styles.label}>Team 1</Text>
              <Text style = {styles.label}>{this.props.route[`player${this.state.teams[4]}`]}</Text>
              <Text style = {styles.label}>{this.props.route[`player${this.state.teams[5]}`]}</Text>
            </View>
            <View style = {styles.flowright}>
              <Text style = {styles.label}>Team 2</Text>
              <Text style = {styles.label}>{this.props.route[`player${this.state.teams[6]}`]}</Text>
              <Text style = {styles.label}>{this.props.route[`player${this.state.teams[7]}`]}</Text>
            </View>
            <Text style = {styles.label2}></Text>
            <Text style = {styles.label3}>Pairs for Holes 13 to 18</Text>
            <Text style = {styles.label2}></Text>
            <View style = {styles.flowright}>
              <Text style = {styles.label}>Team 1</Text>
              <Text style = {styles.label}>{this.props.route[`player${this.state.teams[8]}`]}</Text>
              <Text style = {styles.label}>{this.props.route[`player${this.state.teams[9]}`]}</Text>
            </View>
            <View style = {styles.flowright}>
              <Text style = {styles.label}>Team 2</Text>
              <Text style = {styles.label}>{this.props.route[`player${this.state.teams[10]}`]}</Text>
              <Text style = {styles.label}>{this.props.route[`player${this.state.teams[11]}`]}</Text>
            </View>
          </View>
          <Button text = "Hole 1" onPress = {this.onHole}/>
        </View>
      );
    }
  },
  onHole: function(){
    this.props.navigator.immediatelyResetRouteStack([{name:'hole', coursepar: this.state.coursepar, coursehcp: this.state.coursehcp,teams:this.state.teams,betPerHole: this.props.route.betPerHole, lowScore: this.props.route.lowScore, lowTotal: this.props.route.lowTotal, indexUsed: this.props.route.indexUsed, gameSelected: this.props.route.gameSelected, course : this.props.route.course, player1: this.props.route.player1, player2: this.props.route.player2, player3:this.props.route.player3, player4: this.props.route.player4, hcpPlayer1: this.props.route.hcpPlayer1, hcpPlayer2: this.props.route.hcpPlayer2, hcpPlayer3: this.props.route.hcpPlayer3, hcpPlayer4: this.props.route.hcpPlayer4, 'playerCount': this.props.route.playerCount}]);
  },
});

var styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },

  label: {
    fontSize: 18,
    color: 'white',
    width: 100,
    padding: 5
  },
  label2: {
    fontSize: 18,
    color: 'white',

  },
  label3: {
    fontSize: 18,
    color: 'white',

  },
  flowright: {
    flexDirection: 'row',
    justifyContent: 'flex-start'

  },

});
