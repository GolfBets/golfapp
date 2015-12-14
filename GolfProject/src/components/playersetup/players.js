var React = require('react-native');

var {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} =  React;

var Button = require('../common/button');

module.exports = React.createClass({
//this.props.route.course coursename info from router
  getInitialState: function(){
    return {
      player1: "",
      player2: "",
      player3: "",
      player4: "",
      hcpPlayer1: null,
      hcpPlayer2: null,
      hcpPlayer3: null,
      hcpPlayer4: null,
      playerCount: 1,

    };
  },
  render: function(){
    console.log(this.state)
    if (this.state.playerCount === 1){
      return (
          <View style  = {styles.container}>
            <Text style  = {styles.label}>Tap number of players</Text>
            <Text style  = {styles.label}>Including yourself</Text>
            <Text style  = {styles.label}></Text>
              <TouchableHighlight
                onPress={()=>this.setState({playerCount: 2})}>
                <Text style={styles.label3}>2</Text>
              </TouchableHighlight>
              <Text style  = {styles.label}></Text>
              <TouchableHighlight
                onPress={()=>this.setState({playerCount: 3})}>
                <Text style={styles.label3}>3</Text>
              </TouchableHighlight>
              <Text style  = {styles.label}></Text>
              <TouchableHighlight
                onPress={()=>this.setState({playerCount: 4})}>
                <Text style={styles.label3}>4</Text>
              </TouchableHighlight>
          </View>
      );
    };
    if (this.state.playerCount=== 2){
      return(
        <View style={styles.container}>
          <Text style ={styles.header}>Enter players below and HCP Indexes </Text>
          <View style  = {styles.flowright}>
            <Text style ={styles.label}>Player 1 </Text>
            <Text style ={styles.label2}>{this.props.route.player1}</Text>
            <Text  style ={styles.label}>HCP </Text>
            <TextInput
              style  = {styles.input2}
              placeholder = "HCP"
              value  = {this.state.hcpPlayer1}
              onChangeText = {(text)=>this.setState({hcpPlayer1:text})}
              />
          </View>
          <View style  = {styles.flowright}>
            <Text style ={styles.label}>Player 2 </Text>
            <TextInput
              style  = {styles.input}
              placeholder = "Name"
              value  = {this.state.Player2}
              onChangeText = {(text)=>this.setState({player2: text})}
              />
            <Text  style ={styles.label}>HCP </Text>
            <TextInput
              style  = {styles.input2}
              placeholder = "HCP"
              value  = {this.state.hcpPlayer2}
              onChangeText = {(text)=>this.setState({hcpPlayer2:text})}
              />
          </View>
          <Button text = {"Submit Players"} onPress = {this.onSubmitPlayers}/>
            <Text  style ={styles.label}></Text>
          <Button text = {"Oops! Go Back"} onPress = {()=>this.setState({playerCount: 1})}/>
          <View style = {styles.container2}></View>

        </View>
      )
    };
    if (this.state.playerCount=== 3){
      return(
        <View style={styles.container}>
          <Text style ={styles.header}>Enter players below and HCP Indexes </Text>
          <View style  = {styles.flowright}>
            <Text style ={styles.label}>Player 1 </Text>
            <Text style ={styles.label2}>{this.props.route.player1}</Text>
            <Text  style ={styles.label}>HCP </Text>
            <TextInput
              style  = {styles.input2}
              placeholder = "HCP"
              value  = {this.state.hcpPlayer1}
              onChangeText = {(text)=>this.setState({hcpPlayer1:text})}
              />
          </View>
          <View style  = {styles.flowright}>
            <Text style ={styles.label}>Player 2 </Text>
            <TextInput
              style  = {styles.input}
              placeholder = "Name"
              value  = {this.state.Player2}
              onChangeText = {(text)=>this.setState({player2: text})}
              />
            <Text  style ={styles.label}>HCP </Text>
            <TextInput
              style  = {styles.input2}
              placeholder = "HCP"
              value  = {this.state.hcpPlayer2}
              onChangeText = {(text)=>this.setState({hcpPlayer2:text})}
              />
          </View>
          <View style  = {styles.flowright}>
            <Text style ={styles.label}>Player 3 </Text>
            <TextInput
              style  = {styles.input}
              placeholder = "Name"
              value  = {this.state.Player3}
              onChangeText = {(text)=>this.setState({player3: text})}
              />
            <Text  style ={styles.label}>HCP </Text>
            <TextInput
              style  = {styles.input2}
              placeholder = "HCP"
              value  = {this.state.hcpPlayer3}
              onChangeText = {(text)=>this.setState({hcpPlayer3: text})}
              />
          </View>
          <Button text = {"Submit Players"} onPress = {this.onSubmitPlayers}/>
          <Text  style ={styles.label}></Text>
          <Button text = {"Oops! Go Back"} onPress = {()=>this.setState({playerCount: 1})}/>
          <View style = {styles.container2}></View>

        </View>
      )
    };
    if (this.state.playerCount=== 4){
      return(
        <View style={styles.container}>
          <Text style ={styles.header}>Enter players below and HCP Indexes </Text>
          <View style  = {styles.flowright}>
            <Text style ={styles.label}>Player 1 </Text>
            <Text style ={styles.label2}>{this.props.route.player1}</Text>
            <Text  style ={styles.label}>HCP </Text>
            <TextInput
              style  = {styles.input2}
              placeholder = "HCP"
              value  = {this.state.hcpPlayer1}
              onChangeText = {(text)=>this.setState({hcpPlayer1:text})}
              />
          </View>
          <View style  = {styles.flowright}>
            <Text style ={styles.label}>Player 2 </Text>
            <TextInput
              style  = {styles.input}
              placeholder = "Name"
              value  = {this.state.Player2}
              onChangeText = {(text)=>this.setState({player2: text})}
              />
            <Text  style ={styles.label}>HCP </Text>
            <TextInput
              style  = {styles.input2}
              placeholder = "HCP"
              value  = {this.state.hcpPlayer2}
              onChangeText = {(text)=>this.setState({hcpPlayer2:text})}
              />
          </View>
          <View style  = {styles.flowright}>
            <Text style ={styles.label}>Player 3 </Text>
            <TextInput
              style  = {styles.input}
              placeholder = "Name"
              value  = {this.state.Player3}
              onChangeText = {(text)=>this.setState({player3: text})}
              />
            <Text  style ={styles.label}>HCP </Text>
            <TextInput
              style  = {styles.input2}
              placeholder = "HCP"
              value  = {this.state.hcpPlayer3}
              onChangeText = {(text)=>this.setState({hcpPlayer3: text})}
              />
          </View>
          <View style  = {styles.flowright}>
            <Text style ={styles.label}>Player 4 </Text>
            <TextInput
              style  = {styles.input}
              placeholder = "Name"
              value  = {this.state.Player4}
              onChangeText = {(text)=>this.setState({player4: text})}
              />
            <Text  style ={styles.label}>HCP </Text>
            <TextInput
              style  = {styles.input2}
              placeholder = "HCP"
              value  = {this.state.hcpPlayer4}
              onChangeText = {(text)=>this.setState({hcpPlayer4:text})}
              />
          </View>
          <Button text = {"Submit Players"} onPress = {this.onSubmitPlayers}/>
          <Text  style ={styles.label}></Text>
          <Button text = {"Oops! Go Back"} onPress = {()=>this.setState({playerCount: 1})}/>
          <View style = {styles.container2}></View>

        </View>
      )
    };
  },

  onSubmitPlayers: function(){
    this.props.navigator.push({name: "game", course : this.props.route.course, player1: this.props.route.player1, player2: this.state.player2, player3:this.state.player3, player4: this.state.player4, hcpPlayer1: parseFloat(this.state.hcpPlayer1), hcpPlayer2: parseFloat(this.state.hcpPlayer2), hcpPlayer3: parseFloat(this.state.hcpPlayer3), hcpPlayer4: parseFloat(this.state.hcpPlayer4), 'playerCount': this.state.playerCount});
  },

});
//enter input style
var styles  = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  container2:{
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  header:{
    fontSize: 18,
    color: "white",
    marginTop: 25
  },

  label:{
    fontSize: 18,
    color: "white"
  },
  label2:{
    fontSize: 18,
    color: "white",
    width: 150,
    margin: 5
  },
  label3:{
    fontSize: 40,
    color: "white",
    justifyContent: "space-between"



  },
  input: {
    padding: 4,
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    margin: 5,
    width: 150,
    alignSelf: 'center'
  },
  input2: {
    padding: 4,
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    margin: 5,
    width: 45,
    alignSelf: 'center'
  },
  flowright: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  flowright2: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },



});
