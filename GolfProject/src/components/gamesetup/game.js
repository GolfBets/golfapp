var React  = require('react-native');

var {
  View,
  Text,
  ListView,
  StyleSheet,
  TouchableOpacity
} = React;
var Button = require('../common/button');
var games  = [{name: "Round Robin"}, {name: "Match Play"}, {name: "Nassau"}];

module.exports = React.createClass({
  getInitialState: function(){
    return {
    gameSelected: "",
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    }),
    loaded: false,
    games4player: [{name: "Round Robin"}, {name: "Match Play"}, {name: "Nassau"}, {name: "Skins"}],
    games2player: [{name: "Match Play"}, {name: "Nassau"}, {name: "Skins"}],
    games3player: [{name: "Skins"}]
    };
  },

  componentWillMount: function(){
    var games = `games${this.props.route.playerCount}player`;
    //console.log(games);
    //console.log(this.state[games]);
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.state[games]),
      loaded: true,
    });
  },

  render: function(){
    if (!this.state.loaded){
      return (<Text>Loading...</Text>);
    }
    if (this.state.gameSelected !== ""){
      return (
        <View style  = {styles.container}>
          <Button text = "Go Back" onPress = {()=> this.setState({'gameSelected':"", 'indexUsed':""})}/>
          <Text style = {styles.label}></Text>
          <Text style = {styles.label}>You selected {this.state.gameSelected}</Text>
          <Text style = {styles.label}></Text>
          <Text style = {styles.label}>and</Text>
          <Text style = {styles.label}></Text>
          <Text style = {styles.label}>{this.state.indexUsed} for Handicaps</Text>
          <Text style = {styles.label}></Text>
          <Button text = "Set up Bets" onPress = {this.onSetBets}/>
        </View>
      );
    }
    //console.log('game' ,this.state);
    //console.log('props', this.props);
    return (
      <View style = {styles.container}>
        <View  style  = {styles.container2}>
          <Text style = {styles.label}>Select your Game</Text>
          <ListView
            dataSource = {this.state.dataSource}
            renderRow = {this.renderGames}
            style = {styles.ListView}
          />
        </View>

      </View>

    );
  },
  renderGames: function(rowData){
    return (
    <TouchableOpacity onPress={() => this.onPressRow(rowData)}>
      <View style={styles.container2}>
        <Text style = {[styles.listView, styles.label]}>{rowData.name}</Text>
      </View>
    </TouchableOpacity>
    );
  },
  onPressRow: function(rowData){
    this.setState({
      gameSelected: rowData.name
    });
  },
  onSetBets: function(){
    if (this.state.gameSelected === "Round Robin"){
      this.props.navigator.push({name:'betsroundrobin', indexUsed: this.props.route.indexUsed, gameSelected: this.state.gameSelected, course : this.props.route.course, player1: this.props.route.player1, player2: this.props.route.player2, player3:this.props.route.player3, player4: this.props.route.player4, hcpPlayer1: this.props.route.hcpPlayer1, hcpPlayer2: this.props.route.hcpPlayer2, hcpPlayer3: this.props.route.hcpPlayer3, hcpPlayer4: this.props.route.hcpPlayer4, 'playerCount': this.props.route.playerCount});
    }
    if(this.state.gameSelected === "Nassau"){
      this.props.navigator.push({name:'betsnassau', indexUsed: this.state.indexUsed, gameSelected: this.state.gameSelected, course : this.props.route.course, player1: this.props.route.player1, player2: this.props.route.player2, player3:this.props.route.player3, player4: this.props.route.player4, hcpPlayer1: this.props.route.hcpPlayer1, hcpPlayer2: this.props.route.hcpPlayer2, hcpPlayer3: this.props.route.hcpPlayer3, hcpPlayer4: this.props.route.hcpPlayer4, 'playerCount': this.props.route.playerCount});
    }
  },
});

var styles  = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 5,
  },
  container2: {
    flex: 4,
    alignItems: 'center',
    backgroundColor: 'black',
    marginTop:20
  },
  container3: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  container4: {
    flex: 5,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  label: {
    fontSize: 15,
    color: 'white',
  },
  listView: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'transparent',
  },
  flowright: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

});
