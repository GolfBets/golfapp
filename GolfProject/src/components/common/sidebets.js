// var React = require('react-native');
//
// var {
//   View,
//   Text,
//   StyleSheet,
//   TextInput
// } = React;
//
// var Button  = require('./button');
//
// module.exports = React.createClass({
//   render: function(){
//     console.log(this.props)
//     return(
//       <View style = {styles.container}>
//         <Text style  = {styles.label}>Pick Your Side Bets Below</Text>
//         <TextInput
//           style  = {styles.input}
//           value  = {this.props.puttbet}
//           onChangeText = {(text)=>this.setState({puttbet: text})}
//         />
//       </View>
//     );
//   },
// });
//
// var styles  = StyleSheet.create({
//   container: {
//     flex:1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'black'
//   },
//   label: {
//     fontSize: 18,
//     color: 'white'
//   },
//   input: {
//     padding: 4,
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     backgroundColor: "white",
//     margin: 5,
//     width: 200,
//     alignSelf: 'center'
//   }
//
// });
