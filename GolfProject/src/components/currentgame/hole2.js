var React  = require('react-native');

var{
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableHighlight
} = React;


var Button  = require('../common/button');
var i = 1;
module.exports = React.createClass({
  getInitialState: function(){
    return {
      p1ScrHole2:0,
      p2ScrHole2:0,
      p3ScrHole2:0,
      p4ScrHole2:0,
      p1NetScrHole2:0,
      p2NetScrHole2:0,
      p3NetScrHole2:0,
      p4NetScrHole2:0,
      holeNumber: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
      score1:this.props.route.coursepar[i],
      score2:this.props.route.coursepar[i],
      score3:this.props.route.coursepar[i],
      score4:this.props.route.coursepar[i],
      netScore1: null,
      netScore2: null,
      netScore3: null,
      netScore4: null,

    };
  },
  componentWillMount: function(){
    if (this.props.route.hcpPlayer1 >= this.props.route.coursehcp[i]){
      this.setState({netScore1: (this.state.score1 - 1)});
    }
    else{
      this.setState({netScore1: this.state.score1});
    }
    if (this.props.route.hcpPlayer2 >= this.props.route.coursehcp[i]){
      this.setState({netScore2: (this.state.score2 - 1)});
    }
    else{
      this.setState({netScore2: this.state.score2});
    }
    if (this.props.route.hcpPlayer3 >= this.props.route.coursehcp[i]){
      this.setState({netScore3: (this.state.score3 - 1)});
    }
    else{
      this.setState({netScore3: this.state.score3});
    }
    if (this.props.route.hcpPlayer4 >= this.props.route.coursehcp[i]){
      this.setState({netScore4: (this.state.score4 - 1)});
    }
    else{
      this.setState({netScore4: this.state.score4});
    }

  },

  render: function(){

    console.log('hole2', this.props)
    console.log('statehole2', this.state)

    return(
      <Image source={require('../../assets/grass4.jpeg')} style={styles.backgroundImage}>
        <View style = {styles.container}>
          <View style = {styles.container1}>
            <Text style = {styles.label2}>{this.props.route.course}</Text>
          </View>
          <View style = {styles.container2}>
            <Text style = {styles.label5}>Hole {i+1}</Text>
          </View>
          <View style = {[styles.container3,styles.flowright]}>
            <Text style = {styles.subheading}>Par</Text>
            <Text style = {styles.subheading}>{this.props.route.coursepar[i]}</Text>
            <Text style = {styles.subheading}>Hdcp</Text>
            <Text style = {styles.subheading}>{this.props.route.coursehcp[i]}</Text>
          </View>
          <Text style = {styles.label7}>Adjust Gross Score with + & - Net Score will update</Text>
          <View style = {styles.container4}>
            <View style = {styles.flowright}>
              <Text style = {styles.label1}>{this.props.route.player1}</Text>
              <TouchableHighlight
                onPress={this.netScoreDownPlayer1}>
                <Text style={styles.label4}>-</Text>
              </TouchableHighlight>
              <Text style = {styles.label6}>{this.state.score1}</Text>
              <TouchableHighlight
                onPress={this.netScoreUpPlayer1}>
                <Text style={styles.label4}>+</Text>
              </TouchableHighlight>
              <Text style = {styles.label3}>Net {this.state.netScore1}</Text>
            </View>
            <View style = {styles.flowright}>
              <Text style = {styles.label1}>{this.props.route.player2}</Text>
              <TouchableHighlight
                onPress={this.netScoreDownPlayer2}>
                <Text style={styles.label4}>-</Text>
              </TouchableHighlight>
              <Text style = {styles.label6}>{this.state.score2}</Text>
              <TouchableHighlight
                onPress={this.netScoreUpPlayer2}>
                <Text style={styles.label4}>+</Text>
              </TouchableHighlight>
              <Text style = {styles.label3}>Net {this.state.netScore2}</Text>
            </View>
            <View style = {styles.flowright}>
              <Text style = {styles.label1}>{this.props.route.player3}</Text>
              <TouchableHighlight
                onPress={this.netScoreDownPlayer3}>
                <Text style={styles.label4}>-</Text>
              </TouchableHighlight>
              <Text style = {styles.label6}>{this.state.score3}</Text>
              <TouchableHighlight
                onPress={this.netScoreUpPlayer3}>
                <Text style={styles.label4}>+</Text>
              </TouchableHighlight>
              <Text style = {styles.label3}>Net {this.state.netScore3}</Text>
            </View>
            <View style = {styles.flowright}>
              <Text style = {styles.label1}>{this.props.route.player4}</Text>
              <TouchableHighlight
                onPress={this.netScoreDownPlayer4}>
                <Text style={styles.label4}>-</Text>
              </TouchableHighlight>
              <Text style = {styles.label6}>{this.state.score4}</Text>
              <TouchableHighlight
                onPress={this.netScoreUpPlayer4}>
                <Text style={styles.label4}>+</Text>
              </TouchableHighlight>
              <Text style = {styles.label3}>Net {this.state.netScore4}</Text>
            </View>
          </View>
          <Button text = "Submit Scores" onPress = {this.onSubmitScores}/>
          <Button text = "Go Back" onPress = {this.onGoBack}/>
          <View style = {styles.container5}>
            <Text style = {styles.subheading}></Text>
          </View>
        </View>
      </Image>
    );
  },
  onGoBack: function(){
    this.props.navigator.pop();
  },
  onSubmitScores: function(){
    if (this.props.route.playerCount === 4){
      this.setState({p1ScrHole2:this.state.score1});
      this.setState({p2ScrHole2:this.state.score2});
      this.setState({p3ScrHole2:this.state.score3});
      this.setState({p4ScrHole2:this.state.score4});
      if (this.props.route.indexUsed === "YES"){
        this.setState({p1NetScrHole2:this.state.netScore1});
        this.setState({p2NetScrHole2:this.state.netScore2});
        this.setState({p3NetScrHole2:this.state.netScore3});
        this.setState({p4NetScrHole2:this.state.netScore4});
      };
    };
    //this.props.navigator.push({name:'hole2', p1ScrHole1: this.props.route.p1ScrHole1,coursepar: this.props.route.coursepar, coursehcp: this.props.route.coursehcp,teams: this.props.route.teams,betPerHole: this.props.route.betPerHole, lowScore: this.props.route.lowScore, lowTotal: this.props.route.lowTotal, indexUsed: this.props.route.indexUsed, gameSelected: this.props.route.gameSelected, course : this.props.route.course, player1: this.props.route.player1, player2: this.props.route.player2, player3:this.props.route.player3, player4: this.props.route.player4, hcpPlayer1: this.props.route.hcpPlayer1, hcpPlayer2: this.props.route.hcpPlayer2, hcpPlayer3: this.props.route.hcpPlayer3, hcpPlayer4: this.props.route.hcpPlayer4, 'playerCount': this.props.route.playerCount});

  },
  netScoreUpPlayer1: function(){
    this.setState({score1: ++this.state.score1})
    if (this.props.route.hcpPlayer1 >= this.props.route.coursehcp[i]){
      this.setState({netScore1: (this.state.score1 - 1)});
    }
    else{
      this.setState({netScore1: this.state.score1});
    }
  },
  netScoreDownPlayer1: function(){
    this.setState({score1: --this.state.score1})
    if (this.props.route.hcpPlayer1 >= this.props.route.coursehcp[i]){
      this.setState({netScore1: (this.state.score1 - 1)});
    }
    else{
      this.setState({netScore1: this.state.score1});
    }
  },
  netScoreUpPlayer2: function(){
    this.setState({score2: ++this.state.score2})
    if (this.props.route.hcpPlayer2 >= this.props.route.coursehcp[i]){
      this.setState({netScore2: (this.state.score2 - 1)});
    }
    else{
      this.setState({netScore2: this.state.score2});
    }
  },
  netScoreDownPlayer2: function(){
    this.setState({score2: --this.state.score2})
    if (this.props.route.hcpPlayer2 >= this.props.route.coursehcp[i]){
      this.setState({netScore2: (this.state.score2 - 1)});
    }
    else{
      this.setState({netScore2: this.state.score2});
    }
  },
  netScoreUpPlayer3: function(){
    this.setState({score3: ++this.state.score3})
    if (this.props.route.hcpPlayer3 >= this.props.route.coursehcp[i]){
      this.setState({netScore3: (this.state.score3 - 1)});
    }
    else{
      this.setState({netScore3: this.state.score3});
    }
  },
  netScoreDownPlayer3: function(){
    this.setState({score3: --this.state.score3})
    if (this.props.route.hcpPlayer3 >= this.props.route.coursehcp[i]){
      this.setState({netScore3: (this.state.score3 - 1)});
    }
    else{
      this.setState({netScore3: this.state.score3});
    }
  },
  netScoreUpPlayer4: function(){
    this.setState({score4: ++this.state.score4})
    if (this.props.route.hcpPlayer4 >= this.props.route.coursehcp[i]){
      this.setState({netScore4: (this.state.score4 - 1)});
    }
    else{
      this.setState({netScore4: this.state.score4});
    }
  },
  netScoreDownPlayer4: function(){
    this.setState({score4: --this.state.score4})
    if (this.props.route.hcpPlayer4 >= this.props.route.coursehcp[i]){
      this.setState({netScore4: (this.state.score4 - 1)});
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
    flex:5,
    backgroundColor: 'transparent',

  },
  container5:{
    flex:5,
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
      opacity: .3,
      backgroundColor: 'white',
  },
});
