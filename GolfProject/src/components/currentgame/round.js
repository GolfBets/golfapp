var React  = require('react-native');

var{
  View,
  Text,
  StyleSheet,
  Image,
  Platform
} = React;

var Tabbar = require('react-native-tabbar');
var Item = Tabbar.Item;
var Api = require('../common/api');
var Button  = require('../common/button');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      coursepar: [],
      coursehcp: [],
      selected: "teams"
    };
  },
  componentDidMount: function(){
    Api(`course/${this.props.route.course}`)
      .then((data) =>{
        //console.log("componentDidMount", data);
        this.setState({
          courseInfo: data,
          coursepar: data.par,
          coursehcp: data.hdcp
        });
      })
      .done();
  },
  onTabItemPress: function (name) {
    this.setState({
      selected: name
    });
    if (this.state.selected === "goback"){
      this.props.navigator.pop();
    }
    if (this.state.selected === "next"){
      this.onHole();
    }
  },



  render: function(){
    //console.log("round", this.state.teams);

    return(
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
        <Item name="teams">
          <Item.Content>
            <View style={{ flex: 1}}>
              <Image source={require('../../assets/grass4.jpeg')} style={styles.backgroundImage}>
                <View style = {styles.container}>
                  <View>
                    <Text style = {styles.label2}>{this.props.route.course}</Text>
                    <Text style = {styles.label2}></Text>
                  </View>
                  {this.gamePicked()}
                  <Button text = "Start your Round" onPress = {this.onHole}/>
                </View>
              </Image>
            </View>
          </Item.Content>
          <Item.Icon>
              <Text>Teams</Text>
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

  gamePicked: function(){
    if (this.props.route.gameSelected === "Round Robin"){
      return(
        <View>
          <Text style = {styles.label3}>Pairs for Holes 1 to 6</Text>
          <Text style = {styles.label2}></Text>
          <View style = {styles.flowright}>
            <Text style = {styles.label}>Team 1</Text>
            <Text style = {styles.label}>{this.props.route[`player${this.props.route.teams[0]}`]}</Text>
            <Text style = {styles.label}>{this.props.route[`player${this.props.route.teams[1]}`]}</Text>
          </View>
          <View style = {styles.flowright}>
            <Text style = {styles.label}>Team 2</Text>
            <Text style = {styles.label}>{this.props.route[`player${this.props.route.teams[2]}`]}</Text>
            <Text style = {styles.label}>{this.props.route[`player${this.props.route.teams[3]}`]}</Text>
          </View>
          <Text style = {styles.label2}></Text>
          <Text style = {styles.label3}>Pairs for Holes 7 to 12</Text>
          <Text style = {styles.label2}></Text>
          <View style = {styles.flowright}>
            <Text style = {styles.label}>Team 1</Text>
            <Text style = {styles.label}>{this.props.route[`player${this.props.route.teams[4]}`]}</Text>
            <Text style = {styles.label}>{this.props.route[`player${this.props.route.teams[5]}`]}</Text>
          </View>
          <View style = {styles.flowright}>
            <Text style = {styles.label}>Team 2</Text>
            <Text style = {styles.label}>{this.props.route[`player${this.props.route.teams[6]}`]}</Text>
            <Text style = {styles.label}>{this.props.route[`player${this.props.route.teams[7]}`]}</Text>
          </View>
          <Text style = {styles.label2}></Text>
          <Text style = {styles.label3}>Pairs for Holes 13 to 18</Text>
          <Text style = {styles.label2}></Text>
          <View style = {styles.flowright}>
            <Text style = {styles.label}>Team 1</Text>
            <Text style = {styles.label}>{this.props.route[`player${this.props.route.teams[8]}`]}</Text>
            <Text style = {styles.label}>{this.props.route[`player${this.props.route.teams[9]}`]}</Text>
          </View>
          <View style = {styles.flowright}>
            <Text style = {styles.label}>Team 2</Text>
            <Text style = {styles.label}>{this.props.route[`player${this.props.route.teams[10]}`]}</Text>
            <Text style = {styles.label}>{this.props.route[`player${this.props.route.teams[11]}`]}</Text>
          </View>
        </View>
      );
    }
    if (this.props.route.gameSelected === "Nassau"){
      return(
        <View>
          <Text style = {styles.label3}>Pairs for the Match</Text>
          <Text style = {styles.label2}></Text>
          <View style = {styles.flowright}>
            <Text style = {styles.label}>Team 1</Text>
            <Text style = {styles.label}>{this.props.route[`player${this.props.route.teams[0]}`]}</Text>
            <Text style = {styles.label}>{this.props.route[`player${this.props.route.teams[1]}`]}</Text>
          </View>
          <View style = {styles.flowright}>
            <Text style = {styles.label}>Team 2</Text>
            <Text style = {styles.label}>{this.props.route[`player${this.props.route.teams[2]}`]}</Text>
            <Text style = {styles.label}>{this.props.route[`player${this.props.route.teams[3]}`]}</Text>
          </View>
        </View>
      );
    }
  },

  onHole: function(){

    this.props.navigator.immediatelyResetRouteStack([{name:'hole', courseInfo: this.state.courseInfo, betFrontNassau: this.props.route.betFrontNassau, betBackNassau: this.props.route.betBackNassau, betTotalNassau: this.props.route.betTotalNassau, auto9: this.props.route.auto9, auto18: this.props.route.auto18, coursepar: this.state.coursepar, coursehcp: this.state.coursehcp,teams:this.props.route.teams, betLowScore: this.props.route.betLowScore, lowScore: this.props.route.lowScore, lowTotal: this.props.route.lowTotal, indexUsed: this.props.route.indexUsed, gameSelected: this.props.route.gameSelected, course : this.props.route.course, player1: this.props.route.player1, player2: this.props.route.player2, player3:this.props.route.player3, player4: this.props.route.player4, hcpPlayer1: this.props.route.hcpPlayer1, hcpPlayer2: this.props.route.hcpPlayer2, hcpPlayer3: this.props.route.hcpPlayer3, hcpPlayer4: this.props.route.hcpPlayer4, 'playerCount': this.props.route.playerCount}]);

  },
});

var styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  backgroundImage: {
    marginTop:(Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: 'transparent',
    flex: 1,
    alignSelf: 'stretch',
    width: null,
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
    alignSelf: "center"

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
