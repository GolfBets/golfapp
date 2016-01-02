var React = require('react-native');

var {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  Image
} = React;

var Tabbar = require('react-native-tabbar');
var Item = Tabbar.Item;
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
      selected: 'bets'
    };
  },
  onTabItemPress: function (name) {
    this.setState({
      selected: name
    });
    if (this.state.selected === "goback"){
      this.props.navigator.pop();
    }
    if (this.state.selected === "next"){
      this.setState({selected:"bets"});
      this.onStartRound();
    }
    if (this.state.selected === "sidebets"){
      // need route to sidebets called here!
    }


  },
  render: function(){
    //console.log("bets props",this.props);
    //console.log('bets state', this.state);

      return (
        <Tabbar selected={this.state.selected} onTabItemPress={this.onTabItemPress}>
          <Item name="goback">
            <Item.Content>
              <View style={{ flex: 1}}>
              </View>
            </Item.Content>
            <Item.Icon>
                <Text>Go Back</Text>
            </Item.Icon>
          </Item>
          <Item name="bets">
            <Item.Content>
              <View style={{ flex: 1}}>
                <Image source={require('../../assets/grass4.jpeg')} style={styles.backgroundImage}>
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
                    </View>
                  </View>
                </Image>
              </View>
            </Item.Content>
            <Item.Icon>
                <Text>RR Bets</Text>
            </Item.Icon>
          </Item>
          <Item name="sidebets">
            <Item.Content>
              <View style={{flex:1}}>
                <Image source={require('../../assets/grass4.jpeg')} style={styles.backgroundImage}>
                  <View style = {styles.container}>
                    <Text>This will link to sidebet setup</Text>
                  </View>
                </Image>
              </View>
            </Item.Content>
            <Item.Icon>
                <Text>Side Bets</Text>
            </Item.Icon>
          </Item>
          <Item name="next">
            <Item.Content>
              <View style={{flex:1}}>
              </View>
            </Item.Content>
            <Item.Icon>
                <Text>Next</Text>
            </Item.Icon>
          </Item>
        </Tabbar>

      );
  },

  onGoBack: function(){
    this.props.navigator.pop();
  },
  onStartRound: function(){
    this.setState({teams:Partners()});

    this.props.navigator.push({name:'round', teams: this.state.teams , betLowScore: parseFloat(this.state.betLowScore), lowScore: this.state.lowScore, lowTotal: this.state.lowTotal, indexUsed: this.props.route.indexUsed, gameSelected: this.props.route.gameSelected, course : this.props.route.course, player1: this.props.route.player1, player2: this.props.route.player2, player3:this.props.route.player3, player4: this.props.route.player4, hcpPlayer1: this.props.route.hcpPlayer1, hcpPlayer2: this.props.route.hcpPlayer2, hcpPlayer3: this.props.route.hcpPlayer3, hcpPlayer4: this.props.route.hcpPlayer4, 'playerCount': this.props.route.playerCount});
  },
});
 var styles  = StyleSheet.create({
   backgroundImage: {
     marginTop:(Platform.OS === 'ios') ? 20 : 0,
     backgroundColor: 'transparent',
     flex: 1,
     alignSelf: 'stretch',
     width: null,
   },
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
