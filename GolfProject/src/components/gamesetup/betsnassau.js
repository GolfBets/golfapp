var React = require('react-native');

var {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  Image,
  Platform
} = React;

var Button = require('../common/button');
var Tabbar = require('react-native-tabbar');
var Item = Tabbar.Item;

module.exports = React.createClass({
  getInitialState: function(){
    return {
      betFrontNassau: '',
      betBackNassau: '',
      betTotalNassau: '',
      auto9: false,
      auto18: false,
      answer1: null,
      answer2: null,
      teams:[],
      teamMember: null,
      selected: "bets"
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
                      <Text style  = {styles.label}>Nassau Bets</Text>
                      <Text style = {styles.label}></Text>
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
              </View>
            </Item.Content>
            <Item.Icon>
                <Text>Nassau Bets</Text>
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
    if (this.state.teamMember === 2){this.setState({teams:[1,2,3,4]});}
    if (this.state.teamMember === 3){this.setState({teams:[1,3,2,4]});}
    if (this.state.teamMember === 4){this.setState({teams:[1,4,2,3]});}


    this.props.navigator.push({name:'round', teams: this.state.teams, betFrontNassau: parseFloat(this.state.betFrontNassau), betBackNassau: parseFloat(this.state.betBackNassau), betTotalNassau: parseFloat(this.state.betTotalNassau), auto9: this.state.auto9, auto18: this.state.auto18, indexUsed: this.props.route.indexUsed, gameSelected: this.props.route.gameSelected, course : this.props.route.course, player1: this.props.route.player1, player2: this.props.route.player2, player3:this.props.route.player3, player4: this.props.route.player4, hcpPlayer1: this.props.route.hcpPlayer1, hcpPlayer2: this.props.route.hcpPlayer2, hcpPlayer3: this.props.route.hcpPlayer3, hcpPlayer4: this.props.route.hcpPlayer4, 'playerCount': this.props.route.playerCount});
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

   },
   flowright: {
     flex:1,
     flexDirection: 'row',
     justifyContent: 'space-around',
   },
   backgroundImage: {
     marginTop:(Platform.OS === 'ios') ? 20 : 0,
     backgroundColor: 'transparent',
     flex: 1,
     alignSelf: 'stretch',
     width: null,
   },

 });
