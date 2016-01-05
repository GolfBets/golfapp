var React  = require('react-native');

var{
  View,
  Text,
  StyleSheet,
  Image,
  Platform
} = React;

var Button = require('../common/button');
var Post = require('../common/post');
var Tabbar = require('react-native-tabbar');
var Item = Tabbar.Item;

module.exports =  React.createClass({
  getInitialState: function(){
    return {
      selected: "endgame"
    };
  },
  render: function(){
    console.log(this.props.route);
    return (
      <Tabbar selected={this.state.selected} onTabItemPress={this.onTabItemPress}>
        <Item name="View Results">
          <Item.Content>
            <View style={{ flex: 1}}>

            </View>
          </Item.Content>
          <Item.Icon>
              <Text>View Results</Text>
          </Item.Icon>
        </Item>
        <Item name="endgame">
          <Item.Content>
            <View style={{ flex: 1}}>
              <Image source={require('../../assets/bdg.jpeg')} style={styles.backgroundImage}>
                <View style = {styles.container}>
                  <Text style = {styles.label1}>Your Round is complete</Text>
                  <Text style = {styles.label1}>If you aren't done viewing</Text>
                  <Text style = {styles.label1}>the results click View Results</Text>
                  <Text style = {styles.label1}>otherwise click</Text>
                  <Text style = {styles.label1}>Save Game</Text>
                  <Text style = {styles.label1}>to end this game</Text>
                </View>
                <View style = {styles.container2}></View>
                <View style={styles.container}>
                  <Button text = {"Save Game"} onPress = {this.saveGame}/>
                </View>
              </Image>
            </View>
          </Item.Content>
          <Item.Icon>
              <Text>End Game</Text>
          </Item.Icon>
        </Item>
      </Tabbar>
    );


  },
  onTabItemPress: function (name) {
    this.setState({
      selected: name
    });
    if (this.state.selected === "View Results"){
      this.props.navigator.pop();
    }
  },

  saveGame: function(){
    Post('submitGame', this.props.route);
    this.props.navigator.immediatelyResetRouteStack([{name: 'coursefav'}]);
  },
});

var styles  = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container2:{
    flex: 2
  },
  backgroundImage: {
    marginTop:(Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: 'transparent',
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
  label:{
    fontSize: 18,
    color: 'white'
  },
  label1:{
    fontSize: 18,
    color: 'white',
    alignSelf: "center"
  },

});
