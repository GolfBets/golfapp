var React  = require('react-native');

var{
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableHighlight,
  Platform,
  AsyncStorage
} = React;

var Tabbar = require('react-native-tabbar');
var Item = Tabbar.Item;
var Button  = require('../common/button');
var RoundRobin  = require('../../roundRobin');
var Nassau  = require('../../nassau');
var PlayersHole = require('../common/playershole');
var ScoreCard  = require('./scorecard');
var BetResults = require('./betresults');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      holeNumber: 1,
      start: 1,
      player1score: {h1:null, h2:null, h3:null, h4:null, h5:null, h6:null, h7:null, h8:null, h9:null, h10:null, h11:null, h12:null, h13:null, h14:null, h15:null, h16:null, h17:null, h18:null, totalFront:null, totalBack:null, total: null},
      player2score: {h1:null, h2:null, h3:null, h4:null, h5:null, h6:null, h7:null, h8:null, h9:null, h10:null, h11:null, h12:null, h13:null, h14:null, h15:null, h16:null, h17:null, h18:null, totalFront:null, totalBack:null, total: null},
      player3score: {h1:null, h2:null, h3:null, h4:null, h5:null, h6:null, h7:null, h8:null, h9:null, h10:null, h11:null, h12:null, h13:null, h14:null, h15:null, h16:null, h17:null, h18:null, totalFront:null, totalBack:null, total: null},
      player4score: {h1:null, h2:null, h3:null, h4:null, h5:null, h6:null, h7:null, h8:null, h9:null, h10:null, h11:null, h12:null, h13:null, h14:null, h15:null, h16:null, h17:null, h18:null, totalFront:null, totalBack:null, total: null},
      player1Netscore: {h1:0, h2:0, h3:0, h4:0, h5:0, h6:0, h7:0, h8:0, h9:0, h10:0, h11:0, h12:0, h13:0, h14:0, h15:0, h16:0, h17:0, h18:0},
      player2Netscore: {h1:0, h2:0, h3:0, h4:0, h5:0, h6:0, h7:0, h8:0, h9:0, h10:0, h11:0, h12:0, h13:0, h14:0, h15:0, h16:0, h17:0, h18:0},
      player3Netscore: {h1:0, h2:0, h3:0, h4:0, h5:0, h6:0, h7:0, h8:0, h9:0, h10:0, h11:0, h12:0, h13:0, h14:0, h15:0, h16:0, h17:0, h18:0},
      player4Netscore: {h1:0, h2:0, h3:0, h4:0, h5:0, h6:0, h7:0, h8:0, h9:0, h10:0, h11:0, h12:0, h13:0, h14:0, h15:0, h16:0, h17:0, h18:0},
      score1:0,
      score2:0,
      score3:0,
      score4:0,
      netScore1: 0,
      netScore2: 0,
      netScore3: 0,
      netScore4: 0,
      player1Results: 0,
      player2Results: 0,
      player3Results: 0,
      player4Results:0,
      selected: "Hole",
      image: require('../../assets/grass4.jpeg'),
      frontPress: [1],
      backPress: [10],
      totalPress: [1],
    };
  },
  componentDidMount: function(){
    for (var i = 1; i<=this.props.route.playerCount; i++){
      var score ={};
      score[`score${i}`]=this.props.route.coursepar[this.state.holeNumber-1];

      if (this.props.route[`hcpPlayer${i}`] >= this.props.route.coursehcp[this.state.holeNumber-1]){
        if(this.props.route[`hcpPlayer${i}`]-18 >= this.props.route.coursehcp[this.state.holeNumber-1]){
            score[`netScore${i}`]=this.props.route.coursepar[this.state.holeNumber-1]-2;
        }
        else{
          score[`netScore${i}`]=this.props.route.coursepar[this.state.holeNumber-1]-1;
        }
      }
      else{
        score[`netScore${i}`]=this.props.route.coursepar[this.state.holeNumber-1];
      }
      this.setState(score);
    }

    AsyncStorage.setItem("currentGame", "true").done(console.log("game successfully saved to local storage"));
  },

  render: function(){
    if (this.state.holeNumber===19){

      return(
        <Tabbar selected={this.state.selected}  onTabItemPress={this.onTabItemPress}>
          <Item name="Scores">
            <Item.Content>
              <View style={{flex: 1}}>
                <ScoreCard courseInfo = {this.props.route.courseInfo} player1score = {this.state.player1score} player2score = {this.state.player2score} player3score = {this.state.player3score} player4score = {this.state.player4score} player1Netscore = {this.state.player1Netscore} player2Netscore={this.state.player2Netscore} player3Netscore={this.state.player3Netscore} player4Netscore= {this.state.player4Netscore}  player1={this.props.route.player1} player2={this.props.route.player2} player3={this.props.route.player3} player4= {this.props.route.player4} course ={this.props.route.course} player1Results= {this.state.player1Results} player2Results={this.state.player2Results} player3Results={this.state.player3Results} player4Results={this.state.player4Results} playerCount = {this.props.route.playerCount}/>
              </View>
            </Item.Content>
            <Item.Icon>
              <Text>Scores</Text>
            </Item.Icon>
          </Item>
          <Item name="Bets">
            <Item.Content>
              <View style={{flex:1}}>
                <Image source={this.state.image} style={styles.backgroundImage}>
                  <BetResults  player1={this.props.route.player1} player2={this.props.route.player2} player3={this.props.route.player3} player4= {this.props.route.player4} course ={this.props.route.course} player1Results= {this.state.player1Results} player2Results={this.state.player2Results} player3Results={this.state.player3Results} player4Results={this.state.player4Results} playerCount = {this.props.route.playerCount}/>
                </Image>
              </View>
            </Item.Content>
            <Item.Icon>
              <Text>Bets</Text>
            </Item.Icon>
          </Item>
          <Item name="Save Round">
            <Item.Content>
              <View style={{ flex: 1 }}>
                    <Image source={this.state.image} style={styles.backgroundImage}>
                    </Image>
              </View>
            </Item.Content>
            <Item.Icon>
                <Text>Save Round</Text>
            </Item.Icon>
          </Item>
        </Tabbar>
      );




    }
    var players = [];
    for (var i = 1; i <= this.props.route.playerCount;i++){
      players.push(<PlayersHole key = {i} text1 = {this.props.route[`player${i}`]} onPress1 = {this[`netScoreDownPlayer${i}`]} text2 = {this.state[`score${i}`]} onPress2 = {this[`netScoreUpPlayer${i}`]} text3 = {this.state[`netScore${i}`]}/>);
    }
    var team1;
    var team2;
    if (this.props.route.gameSelected === "Round Robin"){
      if (this.state.holeNumber<=6){
        team1 = this.props.route[`player${this.props.route.teams[0]}`] + " & " + this.props.route[`player${this.props.route.teams[1]}`];
        team2 = this.props.route[`player${this.props.route.teams[2]}`] + " & " + this.props.route[`player${this.props.route.teams[3]}`];
      }
      if (this.state.holeNumber > 6 && this.state.holeNumber <13 ){
        team1 = this.props.route[`player${this.props.route.teams[4]}`] + " & " + this.props.route[`player${this.props.route.teams[5]}`];
        team2 = this.props.route[`player${this.props.route.teams[6]}`] + " & " + this.props.route[`player${this.props.route.teams[7]}`];
      }
      if (this.state.holeNumber >= 13){
        team1 = this.props.route[`player${this.props.route.teams[8]}`] + " & " + this.props.route[`player${this.props.route.teams[9]}`];
        team2 = this.props.route[`player${this.props.route.teams[10]}`] + " & " + this.props.route[`player${this.props.route.teams[11]}`];
      }
    }
    if (this.props.route.gameSelected === "Nassau"){
      team1 = this.props.route[`player${this.props.route.teams[0]}`] + " & " + this.props.route[`player${this.props.route.teams[1]}`];
      team2 = this.props.route[`player${this.props.route.teams[2]}`] + " & " + this.props.route[`player${this.props.route.teams[3]}`];
    }


    // console.log('hole', this.props);
    // console.log('state', this.state);

    return(
      <Tabbar selected={this.state.selected}  onTabItemPress={this.onTabItemPress}>
        <Item name="Hole">
          <Item.Content>
            <View style={{ flex: 1 }}>
                  <Image source={this.state.image} style={styles.backgroundImage}>
                    <View style = {styles.container}>
                      <View style = {styles.container1}>
                        <Text style = {styles.label2}>{this.props.route.course}</Text>
                      </View>
                      <View style = {styles.container2}>
                        <Text style = {styles.label5}>Hole {this.state.holeNumber}</Text>
                      </View>
                      <View style = {[styles.container3,styles.flowright]}>
                        <Text style = {styles.subheading}>Par</Text>
                        <Text style = {styles.subheading}>{this.props.route.coursepar[this.state.holeNumber-1]}</Text>
                        <Text style = {styles.subheading}>Hdcp</Text>
                        <Text style = {styles.subheading}>{this.props.route.coursehcp[this.state.holeNumber-1]}</Text>
                      </View>
                      <Text style = {styles.label7}>Adjust Gross Score with + & - Net Score will update</Text>
                      <View style = {styles.container4}>{players}</View>
                      <View style = {[styles.container3,styles.flowright]}>
                        <Text style = {styles.subheading2}>Team 1</Text>
                        <Text style = {styles.subheading2}>{team1}</Text>
                        <Text style = {styles.subheading2}>Team 2</Text>
                        <Text style = {styles.subheading2}>{team2}</Text>
                      </View>
                      <Button text = "Submit Scores" onPress = {this.onSubmitScores}/>
                      <View style = {styles.container5}>
                        <Text style = {styles.subheading}></Text>
                      </View>
                    </View>
                  </Image>
            </View>
          </Item.Content>
          <Item.Icon>
              <Text>Current Hole</Text>
          </Item.Icon>
        </Item>
        <Item name="Scores">
          <Item.Content>
            <View style={{flex: 1}}>
              <ScoreCard courseInfo = {this.props.route.courseInfo} player1score = {this.state.player1score} player2score = {this.state.player2score} player3score = {this.state.player3score} player4score = {this.state.player4score} player1Netscore = {this.state.player1Netscore} player2Netscore={this.state.player2Netscore} player3Netscore={this.state.player3Netscore} player4Netscore= {this.state.player4Netscore}  player1={this.props.route.player1} player2={this.props.route.player2} player3={this.props.route.player3} player4= {this.props.route.player4} course ={this.props.route.course} player1Results= {this.state.player1Results} player2Results={this.state.player2Results} player3Results={this.state.player3Results} player4Results={this.state.player4Results} playerCount = {this.props.route.playerCount}/>
            </View>
          </Item.Content>
          <Item.Icon>
            <Text>Scores</Text>
          </Item.Icon>
        </Item>
        <Item name="Bets">
          <Item.Content>
            <View style={{flex:1}}>
              <Image source={this.state.image} style={styles.backgroundImage}>
                <BetResults  player1={this.props.route.player1} player2={this.props.route.player2} player3={this.props.route.player3} player4= {this.props.route.player4} course ={this.props.route.course} player1Results= {this.state.player1Results} player2Results={this.state.player2Results} player3Results={this.state.player3Results} player4Results={this.state.player4Results} playerCount = {this.props.route.playerCount}/>
              </Image>
            </View>
          </Item.Content>
          <Item.Icon>
            <Text>Bets</Text>
          </Item.Icon>
        </Item>
      </Tabbar>
    );
  },

  onTabItemPress: function (name) {
    // console.log(`click on ${name} item`);
    this.setState({
      selected: name
    });
    if (this.state.selected === "Save Round"){
      this.setState({selected:"Bets"});
      this.endGame();
    }
    if (this.state.selected === 'Scores'){
      // console.log("hello");
      for (var i = 1; i<=this.props.route.playerCount;i++){
        var updatedscore = this.state[`player${i}score`];
        var player = {};
        if (this.state.holeNumber>=9){
          updatedscore.totalFront = 0;
          for (var x=1; x<=9; x++){
            updatedscore.totalFront += this.state[`player${i}score`][`h${x}`];
            player[`player${i}score`] = updatedscore;
          }
        }
        if (this.state.holeNumber>=18){
          updatedscore.totalBack = 0;
          for (var y=10; y<=18; y++){
            updatedscore.totalBack += this.state[`player${i}score`][`h${y}`];
            player[`player${i}score`] = updatedscore;
            updatedscore.total = updatedscore.totalFront + updatedscore.totalBack;
          }
        }
        this.setState(player);
      }
    }
    var playerResults;
    if (this.state.selected ==="Bets"){
      if (this.props.route.gameSelected === "Round Robin"){
        playerResults  = RoundRobin(this.state, this.props.route);
      }
      if (this.props.route.gameSelected === "Nassau"){
        playerResults  = Nassau(this.state, this.props.route);
      }
      this.setState({
        player1Results: playerResults[1],
        player2Results: playerResults[2],
        player3Results: playerResults[3],
        player4Results: playerResults[4],
      });
    }
  },
// in order to dynamically update the player scores  - a clone of the object needs to be created because you can't set state on a nested object or a specific array index - in this case two clones needed to be made to dynamically change all the info
  onSubmitScores: function(){
    if (this.state.image === require('../../assets/grass4.jpeg')){
      this.setState({image: require('../../assets/grass5.jpeg')});
    }
    else{
      this.setState({image: require('../../assets/grass4.jpeg')});
    }
    for (var i = 1; i<=this.props.route.playerCount;i++){
      var updatedscore = this.state[`player${i}score`];
      updatedscore[`h${this.state.holeNumber}`] = this.state[`score${i}`];
      var player = {};
      player[`player${i}score`] = updatedscore;
      this.setState(player);
      if (this.props.route.indexUsed === "YES"){
        var updatednetscore = this.state[`player${i}Netscore`];
        updatednetscore[`h${this.state.holeNumber}`] = this.state[`netScore${i}`];
        var playernet = {};
        playernet[`player${i}Netscore`] = updatednetscore;
        this.setState(playernet);
      }
    }
    this.setState({holeNumber: this.state.holeNumber+1});
    if (this.state.holeNumber<= 18){
      for (i = 1; i<=this.props.route.playerCount; i++){
        var score ={};
        score[`score${i}`]=this.props.route.coursepar[this.state.holeNumber-1];
        if (this.props.route[`hcpPlayer${i}`] >= this.props.route.coursehcp[this.state.holeNumber-1]){
          if(this.props.route[`hcpPlayer${i}`]-18 >= this.props.route.coursehcp[this.state.holeNumber-1]){
              score[`netScore${i}`]=this.props.route.coursepar[this.state.holeNumber-1]-2;
          }
          else{
            score[`netScore${i}`]=this.props.route.coursepar[this.state.holeNumber-1]-1;
          }
        }
        else{
          score[`netScore${i}`]=this.props.route.coursepar[this.state.holeNumber-1];
        }
        this.setState(score);
      }
      console.log("async", AsyncStorage.getItem("currentGame"));
    }
    if (this.state.holeNumber===19){
      var playerResults;
      if (this.props.route.gameSelected === "Round Robin"){
        playerResults  = RoundRobin(this.state, this.props.route);
      }
      if (this.props.route.gameSelected === "Nassau"){
        playerResults  = Nassau(this.state, this.props.route);
      }
      this.setState({
        player1Results: playerResults[1],
        player2Results: playerResults[2],
        player3Results: playerResults[3],
        player4Results: playerResults[4],
      });
      this.setState({selected:"Bets"});
      //this.endGame();
    }
  },
  endGame: function(){
    this.props.navigator.push({name:'endgame', player1score: this.state.player1score, player2score: this.state.player2score, player3score: this.state.player3score, player4score: this.state.player4score, course : this.props.route.course, player1: this.props.route.player1, player2: this.props.route.player2, player3:this.props.route.player3, player4: this.props.route.player4, player1Results: this.state.player1Results, player2Results: this.state.player2Results, player3Results: this.state.player3Results, player4Results: this.state.player4Results, gameSelected: this.props.route.gameSelected});
  },
  netScoreUpPlayer1: function(){
    this.setState({score1: ++this.state.score1});
    if (this.props.route.hcpPlayer1 >= this.props.route.coursehcp[this.state.holeNumber-1]){
        if (this.props.route.hcpPlayer1 - 18 >= this.props.route.coursehcp[this.state.holeNumber-1]){
          this.setState({netScore1: (this.state.score1 - 2)});
        }
        else{
          this.setState({netScore1: (this.state.score1 - 1)});
        }
    }
    else{
      this.setState({netScore1: this.state.score1});
    }
  },


  netScoreDownPlayer1: function(){
    this.setState({score1: --this.state.score1});
    if (this.props.route.hcpPlayer1 >= this.props.route.coursehcp[this.state.holeNumber-1]){
      if (this.props.route.hcpPlayer1 - 18 >= this.props.route.coursehcp[this.state.holeNumber-1]){
        this.setState({netScore1: (this.state.score1 - 2)});
      }
      else{
        this.setState({netScore1: (this.state.score1 - 1)});
      }
    }
    else{
      this.setState({netScore1: this.state.score1});
    }
  },
  netScoreUpPlayer2: function(){
    this.setState({score2: ++this.state.score2});
    if (this.props.route.hcpPlayer2 >= this.props.route.coursehcp[this.state.holeNumber-1]){
      if (this.props.route.hcpPlayer2 - 18 >= this.props.route.coursehcp[this.state.holeNumber-1]){
        this.setState({netScore2: (this.state.score2 - 2)});
      }
      else{
        this.setState({netScore2: (this.state.score2 - 1)});
      }
    }
    else{
      this.setState({netScore2: this.state.score2});
    }
  },
  netScoreDownPlayer2: function(){
    this.setState({score2: --this.state.score2});
    if (this.props.route.hcpPlayer2 >= this.props.route.coursehcp[this.state.holeNumber-1]){
      if (this.props.route.hcpPlayer2 - 18 >= this.props.route.coursehcp[this.state.holeNumber-1]){
        this.setState({netScore2: (this.state.score2 - 2)});
      }
      else{
        this.setState({netScore2: (this.state.score2 - 1)});
      }
    }
    else{
      this.setState({netScore2: this.state.score2});
    }
  },
  netScoreUpPlayer3: function(){
    this.setState({score3: ++this.state.score3});
    if (this.props.route.hcpPlayer3 >= this.props.route.coursehcp[this.state.holeNumber-1]){
      if (this.props.route.hcpPlayer3 - 18 >= this.props.route.coursehcp[this.state.holeNumber-1]){
        this.setState({netScore3: (this.state.score3 - 2)});
      }
      else{
      this.setState({netScore3: (this.state.score3 - 1)});
      }
    }
    else{
      this.setState({netScore3: this.state.score3});
    }
  },
  netScoreDownPlayer3: function(){
    this.setState({score3: --this.state.score3});
    if (this.props.route.hcpPlayer3 >= this.props.route.coursehcp[this.state.holeNumber-1]){
      if (this.props.route.hcpPlayer3 - 18 >= this.props.route.coursehcp[this.state.holeNumber-1]){
        this.setState({netScore3: (this.state.score3 - 2)});
      }
      else{
      this.setState({netScore3: (this.state.score3 - 1)});
      }
    }
    else{
      this.setState({netScore3: this.state.score3});
    }
  },
  netScoreUpPlayer4: function(){
    this.setState({score4: ++this.state.score4});
    if (this.props.route.hcpPlayer4 >= this.props.route.coursehcp[this.state.holeNumber-1]){
      if (this.props.route.hcpPlayer4 - 18 >= this.props.route.coursehcp[this.state.holeNumber-1]){
        this.setState({netScore4: (this.state.score4 - 2)});
      }
      else{
      this.setState({netScore4: (this.state.score4 - 1)});
      }
    }
    else{
      this.setState({netScore4: this.state.score4});
    }
  },
  netScoreDownPlayer4: function(){
    this.setState({score4: --this.state.score4});
    if (this.props.route.hcpPlayer4 >= this.props.route.coursehcp[this.state.holeNumber-1]){
      if (this.props.route.hcpPlayer4 - 18 >= this.props.route.coursehcp[this.state.holeNumber-1]){
        this.setState({netScore4: (this.state.score4 - 2)});
      }
      else{
      this.setState({netScore4: (this.state.score4 - 1)});
      }
    }
    else{
      this.setState({netScore4: this.state.score4});
    }
  },
});

var styles = StyleSheet.create({
  backgroundImage: {
    backgroundColor: 'transparent',
    flex: 1,
    marginTop:(Platform.OS === 'ios') ? 20 : 0,
    alignSelf: 'stretch',
    width: null,
  },
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  container1: {
    flex:1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  container2: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  container3:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  container4:{
    flex:4,
    backgroundColor: 'transparent',

  },
  container5:{
    flex:2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  flowright: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  label: {
    fontSize: 18,
    color: 'white',
  },
  label1: {
    fontSize: 18,
    color: 'white',
    width: 75,
  },
  label2: {
    fontSize: 23,
    color: 'white',
  },
  label3: {
    fontSize: 20,
    color: 'white',
    marginLeft:20,
    marginRight:5

  },
  label4: {
    fontSize:40,
    fontWeight: '900',
    color: 'white',
    marginRight:10,
    marginLeft:10,
  },
  label5: {
    fontSize: 20,
    color: 'white',
  },
  label6: {
    fontSize: 20,
    color: 'white',

  },
  label7: {
    fontSize: 12,
    color: 'white',
    flexWrap: 'wrap',
    padding: 10,
    alignSelf: 'center'
  },
  subheading: {
      padding: 5,
      fontSize: 18,
      textAlign: 'center',
      color: 'white',
  },
  subheading2: {
      padding: 5,
      fontSize: 12,
      textAlign: 'center',
      color: 'white',
  },
  formInput: {
      height: 36,
      padding: 10,
      marginRight: 5,
      marginBottom: 5,
      marginTop: 5,
      flex: 1,
      textAlign:'center',
      fontSize: 18,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 8,
      color: "black",
      opacity: 0.3,
      backgroundColor: 'white',
  },
});
