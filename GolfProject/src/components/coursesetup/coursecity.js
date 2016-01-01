var React = require('react-native');

var {
  View,
  StyleSheet,
  Text,
  Image,
  ListView,
  TouchableOpacity,
  Platform
} = React;
var Tabbar = require('react-native-tabbar');
var Item = Tabbar.Item;
var Parse  = require('parse/react-native');
var Button = require('../common/button');
var Api  = require('../common/api');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      user: null,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
      course: "",
      selected: "courses"
    };
  },

  componentWillMount: function(){
    Parse.User.currentAsync()
      .then((user)=>{this.setState({user: user});});

    Api(`coursesbycity/${this.props.route.city}`)
      .then((data) =>{
        //console.log("componentDidMount", data)
        //console.log("datasource",this.state.dataSource)
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(data),
          loaded: true,
        });
        //console.log("datasource",this.state.dataSource)
      })
      .done();
  },
  onTabItemPress: function (name) {
    this.setState({
      selected: name
    });
    if (this.state.selected === "newsearch"){
      this.onPressNewCity();
    }
  },

  render: function(){
    if (!this.state.user || !this.state.loaded){
      return (
        <Image source={require('../../assets/grass4.jpeg')} style={styles.backgroundImage}>
          <View style = {styles.container}>
            <Text style = {styles.label}>Loading...</Text>
          </View>
        </Image>
      );
    }
    var username = this.state.user.get('username');
    //console.log("this.props",this.props);
    //console.log(this.state);
    return (
      <Tabbar selected={this.state.selected} onTabItemPress={this.onTabItemPress}>
        <Item name="newsearch">
          <Item.Content>
            <View style={{ flex: 1}}>
            </View>
          </Item.Content>
          <Item.Icon>
              <Text>New Search</Text>
          </Item.Icon>
        </Item>
        <Item name="courses">
          <Item.Content>
            <View style={{ flex: 1}}>
              <Image source={require('../../assets/grass4.jpeg')} style={styles.backgroundImage}>
                <View style = {styles.container}>
                  <View style= {styles.container}>
                    <Text style = {styles.label}>Select your course below</Text>
                    <Text style = {styles.label}>If you don't see your course below</Text>
                    <Text style = {styles.label}>it may not be in our system yet</Text>
                    <Text style = {styles.label}>double check the spelling of your city</Text>
                    <Text style = {styles.label}></Text>
                    <Text style = {styles.label}>You entered {this.props.route.city}</Text>

                  </View>
                  <View style = {styles.container2}>
                    <ListView
                      dataSource = {this.state.dataSource}
                      renderRow = {this.renderCourse}
                      style = {styles.ListView}
                    />
                  </View>
                </View>
              </Image>
            </View>
          </Item.Content>
          <Item.Icon>
              <Text>Courses</Text>
          </Item.Icon>
        </Item>
        <Item name="Notify Us">
          <Item.Content>
            <View style={{flex:1}}>
              <Image source={require('../../assets/grass4.jpeg')} style={styles.backgroundImage}>
                <View style = {styles.container}>
                  <Text style = {styles.label}>This Page will eventually contain a form </Text>
                  <Text style = {styles.label}>to notify us of a missing course</Text>
                  <Text style = {styles.label}>so we can add to database</Text>
                </View>
              </Image>
            </View>
          </Item.Content>
          <Item.Icon>
              <Text>Notify Us</Text>
          </Item.Icon>
        </Item>
      </Tabbar>

    );
  },

  renderCourse: function(rowData){
    // console.log('sectionID', sectionID);
    // console.log('rowID', rowID);
      return (
      <TouchableOpacity onPress={() => this.onPressRow(rowData)}>
        <View style={styles.container}>
          <Text style = {[styles.listView, styles.label]}>{rowData.name}</Text>
        </View>
      </TouchableOpacity>
      );
  },
  onPressNewCity: function(){
    this.props.navigator.pop();
  },
  onPressRow: function(rowData){
    this.setState({
      course: rowData.name
    });
    var player1 = this.state.user.get('username');
    this.props.navigator.immediatelyResetRouteStack([{name: 'players', course: this.state.course, player1: player1 }]);
  },
});

var styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  container2:{
    flex: 1
  },
  backgroundImage: {
    marginTop:(Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: 'transparent',
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: 'transparent',
    justifyContent:'center'
  },
  label: {
    fontSize: 18,
    color: 'white'
  }
});
