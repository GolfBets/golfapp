var React = require('react-native');

var {
  View,
  StyleSheet,
  Text,
  Image,
  ListView,
  TouchableOpacity,
  TextInput
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
      city:"",
      selected:"Favorites"
    };
  },

  componentWillMount: function(){
    Parse.User.currentAsync()
      .then((user)=>{this.setState({user: user});});
  },
  componentDidMount: function(){
    var username = this.state.user.get('username');
    Api(`getFavorites/${username}`)
      .then((data) =>{
        console.log(this.state.user);
        console.log("componentDidMount", data);
        console.log("datasource",this.state.dataSource);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(data),
          loaded: true,
        });
        //console.log("datasource",this.state.dataSource)
      })
      .done();
  },
  onTabItemPress: function (name) {
    console.log(`click on ${name} item`);
    this.setState({
      selected: name
    });
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

    return (

        <Tabbar selected={this.state.selected} onTabItemPress={this.onTabItemPress}>
          <Item name="Search By City">
            <Item.Content>
              <View style = {{flex: 1}}>
                <Image source={require('../../assets/grass4.jpeg')} style={styles.backgroundImage}>
                  <View style = {styles.container}>
                    <View style= {styles.container}>
                      <Text style = {styles.label}>Search for a new course by city</Text>
                      <TextInput
                        placeholder ="Enter City"
                        style  = {styles.input}
                        value  = {this.state.city}
                        onChangeText = {(text)=>this.setState({city: text})}
                      />
                    <Button text={'Search'} onPress={this.onSelectCity}/>
                    </View>
                  </View>
                </Image>
              </View>
            </Item.Content>
            <Item.Icon>
                <Text>Search for Course</Text>
            </Item.Icon>
          </Item>
          <Item name="Favorites">
            <Item.Content>
              <View style={{ flex: 1}}>
                  <Image source={require('../../assets/grass4.jpeg')} style={styles.backgroundImage}>
                    <View style = {styles.container}>
                      <View style= {styles.container}>
                        <Text style = {styles.label}>Welcome Back {username}!</Text>
                        <Text style = {styles.label}></Text>
                        <Text style = {styles.label}>Select from your favorites</Text>
                      </View>
                      <View style = {styles.row}>
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
                <Text>Favorites</Text>
            </Item.Icon>
          </Item>
          <Item name="test3">
            <Item.Content>
              <View style={{flex:1, backgroundColor: 'yellow' }}></View>
            </Item.Content>
            <Item.Icon>
                <Text>Test3 Icon</Text>
            </Item.Icon>
          </Item>
        </Tabbar>

    );
  },
  onSelectCity: function(){
    this.props.navigator.push({name:'coursecity', city: this.state.city});
    this.setState({city:""});
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

  },
  row:{
    flex:3,
    flexDirection: 'row',
    justifyContent: 'center',

    padding:10,
    backgroundColor: 'transparent',
  },
  backgroundImage: {
    marginTop: 20,
    backgroundColor: 'transparent',
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: 'transparent',

  },
  label: {
    fontSize: 18,
    color: 'white'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    margin: 5,
    width: 200,
    alignSelf: 'center'
  }
});
