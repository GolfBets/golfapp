var React = require('react-native');

var {
  View,
  Text,
  TextInput,
  StyleSheet,
} = React;

var Button = require('../common/button');
var Partners = require('../common/random');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      betLowScore:"",
      betLowTotal:"",
      lowScore: true,
      lowTotal: null,
      betFrontNassau: null,
      betBackNassua: null,
      betTotalNassau: null,
      answer1:"",
      answer2:'',
      teams:[],

    };
  },

  render: function(){
    //console.log("bets props",this.props);
    //console.log('bets state', this.state);

      return (
        <View style = {styles.container}>
          <View style = {styles.container2}>
            <Text style  = {styles.label}>Round Robin Bets</Text>
            <Text style = {styles.label}>Enter Bet amount per hole per player</Text>
            <Text style = {styles.label2}>Low Score Bet </Text>
            <TextInput
              style = {styles.input}
              keyboardType = 'numbers-and-punctuation'
              value = {this.state.betLowScore}
              onChangeText = {(text)=>{this.setState({betLowScore:text});}}
            />
          <Text style = {styles.label}>Your Bet is ${this.state.betLowScore} per player per hole</Text>
            <Text style = {styles.label}>   </Text>
            <Text style = {styles.label}>Would you like to Bet Low Total per hole</Text>
            <Text style = {styles.label2}>This will double the Bet per hole you entered above</Text>
            <Text style = {styles.label}>   {this.state.answer2}   </Text>
            <View style  = {styles.flowright}>
              <Button text = "Yes" onPress = {()=> this.setState({'lowTotal':true, 'answer2':"Yes"})}/>
              <Text style = {styles.label}>        </Text>
              <Button text = "No" onPress = {()=> this.setState({'lowTotal':false, 'answer2':"No"})}/>
            </View>
            <Text style = {styles.label}>        </Text>
            <View style  = {styles.flowright}>
              <Button text = "Go Back to Games" onPress = {this.onGoBack}/>
              <Text style = {styles.label}>        </Text>
              <Button text = "Start Round" onPress = {this.onStartRound}/>
            </View>
          </View>
        </View>
      );
  },

  onGoBack: function(){
    this.props.navigator.pop();
  },
  onStartRound: function(){

    this.props.navigator.immediatelyResetRouteStack([{name:'round', teams: Partners(), betLowScore: parseFloat(this.state.betLowScore), lowScore: this.state.lowScore, lowTotal: this.state.lowTotal, indexUsed: this.props.route.indexUsed, gameSelected: this.props.route.gameSelected, course : this.props.route.course, player1: this.props.route.player1, player2: this.props.route.player2, player3:this.props.route.player3, player4: this.props.route.player4, hcpPlayer1: this.props.route.hcpPlayer1, hcpPlayer2: this.props.route.hcpPlayer2, hcpPlayer3: this.props.route.hcpPlayer3, hcpPlayer4: this.props.route.hcpPlayer4, 'playerCount': this.props.route.playerCount}]);
  },
});
 var styles  = StyleSheet.create({
   container: {
     flex:1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'black'
   },
   container2: {
     flex: 3,
     alignItems: 'center',
     backgroundColor: 'black',
     marginTop:20
   },
   container3: {
     flex:1,
     justifyContent: 'flex-start',
     alignItems: 'center',
     backgroundColor: 'black'
   },
   label: {
     fontSize: 18,
     color: 'white',
   },
   label2: {
     fontSize: 12,
     color: 'white',
     flexWrap: 'wrap',
     padding: 10,
     alignSelf: 'center'
   },
   input: {
     padding: 4,
     height: 25,
     borderColor: 'gray',
     borderWidth: 1,
     borderRadius: 5,
     backgroundColor: "white",
     margin: 5,
     width: 40,
     alignSelf: 'center'
   },
   flowright: {
     flexDirection: 'row',
     justifyContent: 'center'

   },

 });
