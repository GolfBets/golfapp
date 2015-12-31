var React = require('react-native');

var {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  Image
} = React;

var Button = require('../common/button');
// var SideBets = require('../common/sidebets');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      betFrontNassau: 0,
      betBackNassau: 0,
      betTotalNassau: 0,
      auto9: false,
      auto18: false,
      answer1: null,
      answer2: null,
      teams:[],
      teamMember: null
    };
  },

  render: function(){
    //console.log("bets props",this.props);
    //console.log('bets state', this.state);
      return (
        <Image source={require('../../assets/grass4.jpeg')} style={styles.backgroundImage}>
          <View style = {styles.container}>
            <View style = {styles.container2}>
              <Text style  = {styles.label}>Nassau</Text>
              <Text style = {styles.label}>Enter Bets</Text>
              <View style = {styles.flowright}>
                <Text style = {styles.label2}>Front Nine Bet</Text>
                <Text style = {styles.label2}>Front Nine Bet</Text>
                <Text style = {styles.label2}>Front Nine Bet</Text>
              </View>
              <View style = {styles.flowright}>
                <TextInput
                  style = {styles.input}
                  keyboardType = 'numbers-and-punctuation'
                  value = {this.state.betFrontNassau}
                  onChangeText = {(text)=>{this.setState({betFrontNassau:text});}}
                />
                <TextInput
                  style = {styles.input}
                  keyboardType = 'numbers-and-punctuation'
                  value = {this.state.betBackNassau}
                  onChangeText = {(text)=>{this.setState({betBackNassau:text});}}
                />
                <TextInput
                  style = {styles.input}
                  keyboardType = 'numbers-and-punctuation'
                  value = {this.state.betTotalNassau}
                  onChangeText = {(text)=>{this.setState({betTotalNassau:text});}}
                />
              </View>
              <View>
                <Text style = {styles.label}>Your Bet is {this.state.betFrontNassau} for the front nine</Text>
                <Text style = {styles.label}>Your Bet is {this.state.betBackNassau} for the back nine</Text>
                <Text style = {styles.label}>Your Bet is {this.state.betTotalNassau} for the full 18</Text>
                <Text style = {styles.label}>   </Text>
                <Text style = {styles.label}>Automatically press Nine hole bet when down 2</Text>
                <Text style = {styles.label}>   {this.state.answer1}   </Text>
              </View>
              <View style  = {styles.flowright}>
                <Button text = "Yes" onPress = {()=> this.setState({'auto9':true, 'answer1':"Yes"})}/>
                <Text style = {styles.label}>        </Text>
                <Button text = "No" onPress = {()=> this.setState({'auto9':false, 'answer1':"No"})}/>
              </View>
              <Text style = {styles.label}>Automatically press 18 hole bet when down 2</Text>
              <Text style = {styles.label}>   {this.state.answer2}   </Text>
              <View style  = {styles.flowright}>
                <Button text = "Yes" onPress = {()=> this.setState({'auto18':true, 'answer2':"Yes"})}/>
                <Text style = {styles.label}>        </Text>
                <Button text = "No" onPress = {()=> this.setState({'auto18':false, 'answer2':"No"})}/>
              </View>
              <View style  = {styles.flowright}>
                <Button text = "Go Back to Games" onPress = {this.onGoBack}/>
                <Text style = {styles.label}>        </Text>
                <Button text = "Start Round" onPress = {this.onStartRound}/>
              </View>
              <Text style  = {styles.label}>Select your Team Member </Text>
              <Text style  = {styles.label}></Text>
              <Text style  = {styles.label}></Text>
              <View style  = {styles.flowright}>
                <TouchableHighlight
                  onPress={()=>this.setState({teamMember: 2})}>
                  <Text style={styles.label}>{this.props.route.player2}</Text>
                </TouchableHighlight>
                <Text style  = {styles.label}></Text>
                <TouchableHighlight
                  onPress={()=>this.setState({teamMember: 3})}>
                  <Text style={styles.label}>{this.props.route.player3}</Text>
                </TouchableHighlight>
                <Text style  = {styles.label}></Text>
                <TouchableHighlight
                  onPress={()=>this.setState({teamMember: 4})}>
                  <Text style={styles.label}>{this.props.route.player4}</Text>
                </TouchableHighlight>
              </View>
              <Text style  = {styles.label}>You selected {this.props.route[`player${this.state.teamMember}`]}</Text>
            </View>
          </View>
        </Image>
      );
  },

  onGoBack: function(){
    this.props.navigator.pop();
  },
  onStartRound: function(){
    if (this.state.teamMember === 2){this.state.teams = [1,2,3,4];}
    if (this.state.teamMember === 3){this.state.teams = [1,3,2,4];}
    if (this.state.teamMember === 4){this.state.teams = [1,4,2,3];}


    this.props.navigator.immediatelyResetRouteStack([{name:'round', teams: this.state.teams, betFrontNassau: parseFloat(this.state.betFrontNassau), betBackNassau: parseFloat(this.state.betBackNassau), betTotalNassau: parseFloat(this.state.betTotalNassau), auto9: this.state.auto9, auto18: this.state.auto18, indexUsed: this.props.route.indexUsed, gameSelected: this.props.route.gameSelected, course : this.props.route.course, player1: this.props.route.player1, player2: this.props.route.player2, player3:this.props.route.player3, player4: this.props.route.player4, hcpPlayer1: this.props.route.hcpPlayer1, hcpPlayer2: this.props.route.hcpPlayer2, hcpPlayer3: this.props.route.hcpPlayer3, hcpPlayer4: this.props.route.hcpPlayer4, 'playerCount': this.props.route.playerCount}]);
  },
});
 var styles  = StyleSheet.create({
   container: {
     flex:1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'transparent'
   },
   container2: {
     flex: 3,
     alignItems: 'center',
     backgroundColor: 'transparent',
     marginTop:20
   },
   container3: {
     flex:1,
     justifyContent: 'flex-start',
     alignItems: 'center',
     backgroundColor: 'transparent'
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
     justifyContent: 'space-around',
   },
   backgroundImage: {
     marginTop: 20,
     backgroundColor: 'transparent',
     flex: 1,
     alignSelf: 'stretch',
     width: null,
   },

 });
