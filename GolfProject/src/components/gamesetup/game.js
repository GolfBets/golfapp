// "use strict";
//
// var React = require("react-native");
//
// var {
//     StyleSheet,
//     Text,
//     View,
//     Image,
//     TextInput,
//     TouchableHighlight,
//     PickerIOS,
// } = React;
//
// var PickerItemIOS = PickerIOS.Item;
//
// var GAMES = {
//   roundrobin : {name: 'Round Robin'},
//   nassau: {name: 'Nassau'},
//   matchplay: {name: 'Match Play'},
// };
//
// var GameSetup = React.createClass({
// // probably need to use Picker IOS to create the dropdown menu for game Selection
//
// getInitialState: function(){
//   console.log(this.props.username)
//   return {
//     player1: this.props.username,
//     player2: "",
//     player3: "",
//     player4: "",
//     games: 'roundrobin',
//
//   }
// },
// render: function() {
//   console.log(this.state)
//     var game  = GAMES[this.state.games];
//     var selectionString  = game.name;
//     return (
//     <Image source={require('./bcg.jpeg')} style={styles.backgroundImage}>
//         <View style={styles.container}>
//             <Text style={styles.heading}>
//                 Enter Players Below
//             </Text>
//             <Text></Text>
//             <Text style= {styles.heading}>Player 1 {this.state.player1}</Text>
//                 <TextInput
//                     placeholder="Player 2"
//                     onChange={(event) => this.setState({player2: event.nativeEvent.text})}
//                     style={styles.formInput}
//                     value={this.state.player2} />
//                 <TextInput
//                     placeholder="Player 3"
//                     onChange={(event) => this.setState({player3: event.nativeEvent.text})}
//                     style={styles.formInput}
//                     value={this.state.player3} />
//                 <TextInput
//                     placeholder="Player 4"
//                     onChange={(event) => this.setState({player4: event.nativeEvent.text})}
//                     style={styles.formInput}
//                     value={this.state.player4} />
//                 <Text></Text>
//
//
//               <Text style  = {styles.heading}>Select your Game Below</Text>
//               <PickerIOS
//                 selectedValue = {this.state.games}
//                 onValueChange = {(games) => this.setState({games})}>
//                 {Object.keys(GAMES).map((games)=>(
//                   <PickerItemIOS
//                     key={games}
//                     value={games}
//                     label={GAMES[games].name}
//                     />
//                   )
//                 )}
//               </PickerIOS>
//               <Text style  = {styles.heading}>You Selected: {selectionString}</Text>
//
//             <TouchableHighlight onPress={(this.onSubmitPressed)} style={styles.button}>
//                 <Text style={styles.buttonText}>Submit</Text>
//             </TouchableHighlight>
//         </View>
//      </Image>
//     );
// },
//
// });
// var styles = StyleSheet.create({
//     container: {
//     //  backgroundColor: '#006400',
//       padding: 30,
//       marginTop: 65,
//       alignItems: "stretch",
//       flexDirection: 'column'
//     },
//     halfHeight: {
//         flex: 2,
//       //  backgroundColor: 'darkgreen'
//     },
//     quarterHeight: {
//         flex: 1,
//         backgroundColor: 'white'
//     },
//     flowright: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       alignSelf: 'stretch'
//     },
//     backgroundImage: {
//     backgroundColor: 'transparent',
//     flex: 1,
//     alignSelf: 'stretch',
//     width: null,
//     },
//     formInput: {
//         height: 20,
//         padding: 1,
//         marginRight: 2,
//         marginBottom: 2,
//         marginTop: 2,
//         textAlign: 'center',
//         flex: 1,
//         fontSize: 16,
//         borderWidth: 1,
//         borderColor: 'white',
//         borderRadius: 6,
//         color: "black",
//         opacity: 1,
//         backgroundColor: 'white',
//     },
//     heading: {
//         //marginBottom: 20,
//         fontSize: 18,
//         textAlign: 'center',
//         color: 'white',
//     },
//     subheading: {
//         color: "#cccccc"
//     },
//     button: {
//         height: 36,
//         flex: 1,
//         backgroundColor: 'black',
//         borderColor: 'white',
//         borderWidth: 1,
//         borderRadius: 8,
//         marginTop: 10,
//         justifyContent: "center"
//     },
//     buttonText: {
//         fontSize: 18,
//         color: 'white',
//         alignSelf: 'center'
//     },
// });
//
//
// module.exports = GameSetup
