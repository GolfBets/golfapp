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


module.exports = React.createClass({
  getInitialState: function(){
    return {
      holeNumber: 1,
      player1score: {h1:0, h2:0, h3:0, h4:4, h5:0, h6:0, h7:0, h8:0, h9:0, h10:0, h11:0, h12:0, h13:0, h14:0, h15:0, h16:0, h17:0, h18:0},
      player2score: {h1:0, h2:0, h3:0, h4:4, h5:0, h6:0, h7:0, h8:0, h9:0, h10:0, h11:0, h12:0, h13:0, h14:0, h15:0, h16:0, h17:0, h18:0},
      player3score: {h1:0, h2:0, h3:0, h4:4, h5:0, h6:0, h7:0, h8:0, h9:0, h10:0, h11:0, h12:0, h13:0, h14:0, h15:0, h16:0, h17:0, h18:0},
      player4score: {h1:0, h2:0, h3:0, h4:4, h5:0, h6:0, h7:0, h8:0, h9:0, h10:0, h11:0, h12:0, h13:0, h14:0, h15:0, h16:0, h17:0, h18:0},
      player1Netscore: {h1:0, h2:0, h3:0, h4:4, h5:0, h6:0, h7:0, h8:0, h9:0, h10:0, h11:0, h12:0, h13:0, h14:0, h15:0, h16:0, h17:0, h18:0},
      player2Netscore: {h1:0, h2:0, h3:0, h4:4, h5:0, h6:0, h7:0, h8:0, h9:0, h10:0, h11:0, h12:0, h13:0, h14:0, h15:0, h16:0, h17:0, h18:0},
      player3Netscore: {h1:0, h2:0, h3:0, h4:4, h5:0, h6:0, h7:0, h8:0, h9:0, h10:0, h11:0, h12:0, h13:0, h14:0, h15:0, h16:0, h17:0, h18:0},
      player4Netscore: {h1:0, h2:0, h3:0, h4:4, h5:0, h6:0, h7:0, h8:0, h9:0, h10:0, h11:0, h12:0, h13:0, h14:0, h15:0, h16:0, h17:0, h18:0},
      score1:0,
      score2:0,
      score3:0,
      score4:0,
      netScore1: null,
      netScore2: null,
      netScore3: null,
      netScore4: null,

    };
  },
  componentDidMount: function(){

    this.setState({score1:this.props.route.coursepar[this.state.holeNumber-1],score2:this.props.route.coursepar[this.state.holeNumber-1], score3:this.props.route.coursepar[this.state.holeNumber-1],score4:this.props.route.coursepar[this.state.holeNumber-1]});
    if (this.props.route.hcpPlayer1 >= this.props.route.coursehcp[this.state.holeNumber-1]){
      this.setState({netScore1: this.props.route.coursepar[this.state.holeNumber-1]-1});
    }
    else{
      this.setState({netScore1: this.props.route.coursepar[this.state.holeNumber-1]});
    }
    if (this.props.route.hcpPlayer2 >= this.props.route.coursehcp[this.state.holeNumber-1]){
      this.setState({netScore2: this.props.route.coursepar[this.state.holeNumber-1]-1});
    }
    else{
      this.setState({netScore2: this.props.route.coursepar[this.state.holeNumber-1]});
    }
    if (this.props.route.hcpPlayer3 >= this.props.route.coursehcp[this.state.holeNumber-1]){
      this.setState({netScore3: this.props.route.coursepar[this.state.holeNumber-1]-1});
    }
    else{
      this.setState({netScore3: this.props.route.coursepar[this.state.holeNumber-1]});
    }
    if (this.props.route.hcpPlayer4 >= this.props.route.coursehcp[this.state.holeNumber-1]){
      this.setState({netScore4: this.props.route.coursepar[this.state.holeNumber-1]-1});
    }
    else{
      this.setState({netScore4: this.props.route.coursepar[this.state.holeNumber-1]});
    }
  },

  render: function(){

    console.log('hole', this.props)
    console.log('state', this.state)

    return(

      <Image source={require('../../assets/grass4.jpeg')} style={styles.backgroundImage}>
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
          <View style = {styles.container5}>
            <Text style = {styles.subheading}></Text>
          </View>
        </View>
      </Image>
    );
  },
  onSubmitScores: function(){
      var updatedscore1 = Object.assign({}, this.state.player1score);
      updatedscore1[`h${this.state.holeNumber}`] = this.state.score1;
      this.setState({player1score:updatedscore1});
      var updatedscore2 = Object.assign({}, this.state.player2score);
      updatedscore2[`h${this.state.holeNumber}`] = this.state.score2;
      this.setState({player2score:updatedscore2});
      var updatedscore3 = Object.assign({}, this.state.player3score);
      updatedscore3[`h${this.state.holeNumber}`] = this.state.score3;
      this.setState({player3score:updatedscore3});
      var updatedscore4 = Object.assign({}, this.state.player4score);
      updatedscore4[`h${this.state.holeNumber}`] = this.state.score4;
      this.setState({player4score:updatedscore4});
    if (this.props.route.indexUsed === "YES"){
      var updatednetscore1 = Object.assign({}, this.state.player1Netscore);
      updatednetscore1[`h${this.state.holeNumber}`]=this.state.netScore1;
      this.setState({player1Netscore:updatednetscore1});
      var updatednetscore2 = Object.assign({}, this.state.player2Netscore);
      updatednetscore2[`h${this.state.holeNumber}`]=this.state.netScore2;
      this.setState({player2Netscore:updatednetscore2});
      var updatednetscore3 = Object.assign({}, this.state.player3Netscore);
      updatednetscore3[`h${this.state.holeNumber}`]=this.state.netScore3;
      this.setState({player3Netscore:updatednetscore3});
      var updatednetscore4 = Object.assign({}, this.state.player4Netscore);
      updatednetscore4[`h${this.state.holeNumber}`]=this.state.netScore4;
      this.setState({player4Netscore:updatednetscore4});
    };

    this.setState({holeNumber: this.state.holeNumber+1})


    this.setState({score1:this.props.route.coursepar[this.state.holeNumber-1],score2:this.props.route.coursepar[this.state.holeNumber-1], score3:this.props.route.coursepar[this.state.holeNumber-1],score4:this.props.route.coursepar[this.state.holeNumber-1]});


    if (this.props.route.hcpPlayer1 >= this.props.route.coursehcp[this.state.holeNumber-1]){
      this.setState({netScore1: this.props.route.coursepar[this.state.holeNumber-1]-1});
    }
    else{
      this.setState({netScore1: this.props.route.coursepar[this.state.holeNumber-1]});
    }
    if (this.props.route.hcpPlayer2 >= this.props.route.coursehcp[this.state.holeNumber-1]){
      this.setState({netScore2: this.props.route.coursepar[this.state.holeNumber-1]-1});
    }
    else{
      this.setState({netScore2: this.props.route.coursepar[this.state.holeNumber-1]});
    }
    if (this.props.route.hcpPlayer3 >= this.props.route.coursehcp[this.state.holeNumber-1]){
      this.setState({netScore3: this.props.route.coursepar[this.state.holeNumber-1]-1});
    }
    else{
      this.setState({netScore3: this.props.route.coursepar[this.state.holeNumber-1]});
    }
    if (this.props.route.hcpPlayer4 >= this.props.route.coursehcp[this.state.holeNumber-1]){
      this.setState({netScore4: this.props.route.coursepar[this.state.holeNumber-1]-1});
    }
    else{
      this.setState({netScore4: this.props.route.coursepar[this.state.holeNumber-1]});
    }
  },

  netScoreUpPlayer1: function(){
    this.setState({score1: ++this.state.score1})
    if (this.props.route.hcpPlayer1 >= this.props.route.coursehcp[this.state.holeNumber-1]){
      this.setState({netScore1: (this.state.score1 - 1)});
    }
    else{
      this.setState({netScore1: this.state.score1});
    }
  },
  netScoreDownPlayer1: function(){
    this.setState({score1: --this.state.score1})
    if (this.props.route.hcpPlayer1 >= this.props.route.coursehcp[this.state.holeNumber-1]){
      this.setState({netScore1: (this.state.score1 - 1)});
    }
    else{
      this.setState({netScore1: this.state.score1});
    }
  },
  netScoreUpPlayer2: function(){
    this.setState({score2: ++this.state.score2})
    if (this.props.route.hcpPlayer2 >= this.props.route.coursehcp[this.state.holeNumber-1]){
      this.setState({netScore2: (this.state.score2 - 1)});
    }
    else{
      this.setState({netScore2: this.state.score2});
    }
  },
  netScoreDownPlayer2: function(){
    this.setState({score2: --this.state.score2})
    if (this.props.route.hcpPlayer2 >= this.props.route.coursehcp[this.state.holeNumber-1]){
      this.setState({netScore2: (this.state.score2 - 1)});
    }
    else{
      this.setState({netScore2: this.state.score2});
    }
  },
  netScoreUpPlayer3: function(){
    this.setState({score3: ++this.state.score3})
    if (this.props.route.hcpPlayer3 >= this.props.route.coursehcp[this.state.holeNumber-1]){
      this.setState({netScore3: (this.state.score3 - 1)});
    }
    else{
      this.setState({netScore3: this.state.score3});
    }
  },
  netScoreDownPlayer3: function(){
    this.setState({score3: --this.state.score3})
    if (this.props.route.hcpPlayer3 >= this.props.route.coursehcp[this.state.holeNumber-1]){
      this.setState({netScore3: (this.state.score3 - 1)});
    }
    else{
      this.setState({netScore3: this.state.score3});
    }
  },
  netScoreUpPlayer4: function(){
    this.setState({score4: ++this.state.score4})
    if (this.props.route.hcpPlayer4 >= this.props.route.coursehcp[this.state.holeNumber-1]){
      this.setState({netScore4: (this.state.score4 - 1)});
    }
    else{
      this.setState({netScore4: this.state.score4});
    }
  },
  netScoreDownPlayer4: function(){
    this.setState({score4: --this.state.score4})
    if (this.props.route.hcpPlayer4 >= this.props.route.coursehcp[this.state.holeNumber-1]){
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
