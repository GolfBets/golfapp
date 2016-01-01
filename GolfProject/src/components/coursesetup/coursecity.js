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
      <Image source={require('../../assets/grass4.jpeg')} style={styles.backgroundImage}>
        <View style = {styles.container}>
          <View style= {styles.container}>
            <Text style = {styles.label}>Select your course below</Text>
            <Text style = {styles.label}>If you don't see your course below</Text>
            <Button text = "Enter new city" onPress={this.onPressNewCity}/>
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
