var React = require('react-native');

var {
  View,
  Text,
  TextInput,
  StyleSheet,
} = React;

var Button = require('../common/button');
// var SideBets = require('../common/sidebets');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      betPerHole: '',
      betPerRound: '0',
      lowScore: true,
      lowTotal: null,
      puttbet: '0',
      greensRegulation: '0',
      fairwaysHit: '0',
      answer1:"",
      answer2:''

    };
  },

  render: function(){
    console.log("bets props",this.props);
    console.log('bets state', this.state);
    if (this.props.route.gameSelected === "Round Robin"){
      return (
        <View style = {styles.container}>
          <View style = {styles.container2}>
            <Text style  = {styles.label}>Round Robin Bets</Text>
            
            <Text style = {styles.label}>Enter Bet amount per hole per player</Text>
            <Text style = {styles.label2}>This is amount that applies to Low Score Bet</Text>
            <TextInput
              style = {styles.input}
              value = {this.state.betPerHole}
              onChangeText = {(text)=>{this.setState({betPerHole:text});}}
            />
            <Text style = {styles.label}>Your Bet is ${this.state.betPerHole} per player per hole</Text>
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
    }
    if(this.props.route.gameSelected === 'Nassau'){
      return (
        <View style = {styles.container}>
          <Text style  = {styles.label}>Nassau Bets Page</Text>

          <Button text = "Go Back" onPress = {this.onGoBack}/>
        </View>
      );
    }
    if(this.props.route.gameSelected === 'Skins'){
      return (
        <View style = {styles.container}>
          <Text style  = {styles.label}>Skins Bets Page</Text>

          <Button text = "Go Back" onPress = {this.onGoBack}/>
        </View>
      );
    }
    if(this.props.route.gameSelected === 'Match Play'){
      return (
        <View style = {styles.container}>
          <Text style  = {styles.label}>Match Play Bets Page</Text>

          <Button text = "Go Back" onPress = {this.onGoBack}/>
        </View>
      );
    }
  },

  onGoBack: function(){
    this.props.navigator.pop();
  },
  onStartRound: function(){
    this.props.navigator.push({name:'round', betPerHole: parseFloat(this.state.betPerHole), lowScore: this.state.lowScore, lowTotal: this.state.lowTotal, indexUsed: this.props.route.indexUsed, gameSelected: this.props.route.gameSelected, course : this.props.route.course, player1: this.props.route.player1, player2: this.props.route.player2, player3:this.props.route.player3, player4: this.props.route.player4, hcpPlayer1: this.props.route.hcpPlayer1, hcpPlayer2: this.props.route.hcpPlayer2, hcpPlayer3: this.props.route.hcpPlayer3, hcpPlayer4: this.props.route.hcpPlayer4, 'playerCount': this.props.route.playerCount});
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
