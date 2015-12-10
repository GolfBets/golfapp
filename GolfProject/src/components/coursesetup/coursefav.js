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
    };
  },

  componentWillMount: function(){
    Parse.User.currentAsync()
      .then((user)=>{this.setState({user: user});})
  },

  componentDidMount: function(){
    Api('coursenames/Orange')
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
      return <Text>Loading...</Text>
    }
    var username = this.state.user.get('username');

    return (
      <View style = {styles.container}>
        <View style= {styles.container}>
          <Text style = {styles.label}>Welcome Back {username}!</Text>
          <Text style = {styles.label}></Text>
          <Text style = {styles.label}>Select from your favorite courses below</Text>
          <Text style = {styles.label}>or</Text>
          <Text style = {styles.label}>enter the city name of a new course</Text>
          <TextInput
            style  = {styles.input}
            value  = {this.state.city}
            onChangeText = {(text)=>this.setState({city: text})}
          />
          <Button text={'Select City'} onPress={this.onSelectCity}/>
        </View>
        <View style = {styles.container2}>
          <ListView
            dataSource = {this.state.dataSource}
            renderRow = {this.renderCourse}
            style = {styles.ListView}
          />
        </View>
      </View>
    );
  },
  onSelectCity: function(){
    this.props.navigator.push({name:'coursecity', city: this.state.city})
    this.setState({city:""})
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

  },
});

var styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  container2:{
    flex: 1
  },
  backgroundImage: {
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
