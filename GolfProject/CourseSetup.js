"use strict";

var React = require("react-native");

var {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight,
} = React;
var GameSetup = require("./GameSetup");

var CourseSetup = React.createClass({
    getInitialState: function(){
      return {
        username: this.props.username,
        coursename: "",
        hole1par: "",
        hole1hcp: "",
        hole2par: "",
        hole2hcp: "",
        hole3par: "",
        hole3hcp: "",
        hole4par: "",
        hole4hcp: "",
        hole5par: "",
        hole5hcp: "",
        hole6par: "",
        hole6hcp: "",
        hole7par: "",
        hole7hcp: "",
        hole8par: "",
        hole8hcp: "",
        hole9par: "",
        hole9hcp: "",
        hole10par: "",
        hole10hcp: "",
        hole11par: "",
        hole11hcp: "",
        hole12par: "",
        hole12hcp: "",
        hole13par: "",
        hole13hcp: "",
        hole14par: "",
        hole14hcp: "",
        hole15par: "",
        hole15hcp: "",
        hole16par: "",
        hole16hcp: "",
        hole17par: "",
        hole17hcp: "",
        hole18par: "",
        hole18hcp: "",

      }
    },
  //  <Image source={require('./bcg.jpeg')} style={styles.backgroundImage}>
// logic to check login info here  - then render welcome user and enter course name annd info
    render: function() {
      console.log(this.state)
        return (

            <View style={styles.container}>
              <View style = {styles.flowright}>
                <Text style={styles.heading}>Course Name  </Text>
                  <TextInput
                    placeholder="Enter Course Name"
                    onChange={(event) => this.setState({coursename: event.nativeEvent.text})}
                    style={styles.formInput1}
                    value={this.state.coursename} />

              </View>
              <View>
                <View style = {styles.flowright}>
                  <Text style = {styles.subheading1}>Hole 1</Text>
                  <Text style={styles.subheading}>Par</Text>
                    <TextInput
                        placeholder="hole 1 par"
                        onChange={(event) => this.setState({hole1par: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole1par} />
                  <Text style={styles.subheading}>HCP</Text>
                    <TextInput
                        placeholder="hole 1 hcp"
                        onChange={(event) => this.setState({hole1hcp: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole1hcp} />
                </View>
                <View style = {styles.flowright}>
                  <Text style = {styles.subheading1}>Hole 2</Text>
                  <Text style={styles.subheading}>Par</Text>
                    <TextInput
                        placeholder="hole 2 par"
                        onChange={(event) => this.setState({hole2par: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole2par} />
                  <Text style={styles.subheading}>HCP</Text>
                    <TextInput
                        placeholder="hole 2 hcp"
                        onChange={(event) => this.setState({hole2hcp: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole2hcp} />
                </View>
                <View style = {styles.flowright}>
                  <Text style = {styles.subheading1}>Hole 3</Text>
                  <Text style={styles.subheading}>Par</Text>
                    <TextInput
                        placeholder="hole 3 par"
                        onChange={(event) => this.setState({hole3par: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole3par} />
                  <Text style={styles.subheading}>HCP</Text>
                    <TextInput
                        placeholder="hole 3 hcp"
                        onChange={(event) => this.setState({hole3hcp: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole3hcp} />
                </View>
                <View style = {styles.flowright}>
                  <Text style = {styles.subheading1}>Hole 4</Text>
                  <Text style={styles.subheading}>Par</Text>
                    <TextInput
                        placeholder="hole 4 par"
                        onChange={(event) => this.setState({hole4par: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole4par} />
                  <Text style={styles.subheading}>HCP</Text>
                    <TextInput
                        placeholder="hole 4 hcp"
                        onChange={(event) => this.setState({hole4hcp: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole4hcp} />
                </View>
                <View style = {styles.flowright}>
                  <Text style = {styles.subheading1}>Hole 5</Text>
                  <Text style={styles.subheading}>Par</Text>
                    <TextInput
                        placeholder="hole 5 par"
                        onChange={(event) => this.setState({hole5par: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole5par} />
                  <Text style={styles.subheading}>HCP</Text>
                    <TextInput
                        placeholder="hole 5 hcp"
                        onChange={(event) => this.setState({hole5hcp: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole5hcp} />
                </View>
                <View style = {styles.flowright}>
                  <Text style = {styles.subheading1}>Hole 6</Text>
                  <Text style={styles.subheading}>Par</Text>
                    <TextInput
                        placeholder="hole 6 par"
                        onChange={(event) => this.setState({hole6par: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole6par} />
                  <Text style={styles.subheading}>HCP</Text>
                    <TextInput
                        placeholder="hole 6 hcp"
                        onChange={(event) => this.setState({hole6hcp: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole6hcp} />
                 </View>
                 <View style = {styles.flowright}>
                  <Text style = {styles.subheading1}>Hole 7</Text>
                  <Text style={styles.subheading}>Par</Text>
                    <TextInput
                        placeholder="hole 7 par"
                        onChange={(event) => this.setState({hole7par: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole7par} />
                  <Text style={styles.subheading}>HCP</Text>
                    <TextInput
                        placeholder="hole 7 hcp"
                        onChange={(event) => this.setState({hole7hcp: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole7hcp} />
                </View>
                <View style = {styles.flowright}>
                  <Text style = {styles.subheading1}>Hole 8</Text>
                  <Text style={styles.subheading}>Par</Text>
                    <TextInput
                        placeholder="hole 8 par"
                        onChange={(event) => this.setState({hole8par: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole8par} />
                  <Text style={styles.subheading}>HCP</Text>
                    <TextInput
                        placeholder="hole 8 hcp"
                        onChange={(event) => this.setState({hole8hcp: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole8hcp} />
                </View>
                <View style = {styles.flowright}>
                  <Text style = {styles.subheading1}>Hole 9</Text>
                  <Text style={styles.subheading}>Par</Text>
                    <TextInput
                        placeholder="hole 9 par"
                        onChange={(event) => this.setState({hole9par: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole9par} />
                  <Text style={styles.subheading}>HCP</Text>
                    <TextInput
                        placeholder="hole 9 hcp"
                        onChange={(event) => this.setState({hole9hcp: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole9hcp} />
                </View>
                <View style = {styles.flowright}>
                  <Text style = {styles.subheading1}>Hole 10</Text>
                  <Text style={styles.subheading}>Par</Text>
                    <TextInput
                        placeholder="hole 10 par"
                        onChange={(event) => this.setState({hole10par: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole10par} />
                  <Text style={styles.subheading}>HCP</Text>
                    <TextInput
                        placeholder="hole 10 hcp"
                        onChange={(event) => this.setState({hole10hcp: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole10hcp} />
                </View>
                <View style = {styles.flowright}>
                  <Text style = {styles.subheading1}>Hole 11</Text>
                  <Text style={styles.subheading}>Par</Text>
                    <TextInput
                        placeholder="hole 11 par"
                        onChange={(event) => this.setState({hole11par: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole11par} />
                  <Text style={styles.subheading}>HCP</Text>
                    <TextInput
                        placeholder="hole 11 hcp"
                        onChange={(event) => this.setState({hole11hcp: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole11hcp} />
                </View>
                <View style = {styles.flowright}>
                  <Text style = {styles.subheading1}>Hole 12</Text>
                  <Text style={styles.subheading}>Par</Text>
                    <TextInput
                        placeholder="hole 12 par"
                        onChange={(event) => this.setState({hole12par: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole12par} />
                  <Text style={styles.subheading}>HCP</Text>
                    <TextInput
                        placeholder="hole 12 hcp"
                        onChange={(event) => this.setState({hole12hcp: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole12hcp} />
                </View>
                <View style = {styles.flowright}>
                  <Text style = {styles.subheading1}>Hole 13</Text>
                  <Text style={styles.subheading}>Par</Text>
                    <TextInput
                        placeholder="hole 13 par"
                        onChange={(event) => this.setState({hole13par: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole13par} />
                  <Text style={styles.subheading}>HCP</Text>
                    <TextInput
                        placeholder="hole 13 hcp"
                        onChange={(event) => this.setState({hole13hcp: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole13hcp} />
                </View>
                <View style = {styles.flowright}>
                  <Text style = {styles.subheading1}>Hole 14</Text>
                  <Text style={styles.subheading}>Par</Text>
                    <TextInput
                        placeholder="hole 14 par"
                        onChange={(event) => this.setState({hole14par: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole14par} />
                  <Text style={styles.subheading}>HCP</Text>
                    <TextInput
                        placeholder="hole 14 hcp"
                        onChange={(event) => this.setState({hole14hcp: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole14hcp} />
                </View>
                <View style = {styles.flowright}>
                  <Text style = {styles.subheading1}>Hole 15</Text>
                  <Text style={styles.subheading}>Par</Text>
                    <TextInput
                        placeholder="hole 15 par"
                        onChange={(event) => this.setState({hole15par: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole15par} />
                  <Text style={styles.subheading}>HCP</Text>
                    <TextInput
                        placeholder="hole 15 hcp"
                        onChange={(event) => this.setState({hole15hcp: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole15hcp} />
                 </View>
                 <View style = {styles.flowright}>
                  <Text style = {styles.subheading1}>Hole 16</Text>
                  <Text style={styles.subheading}>Par</Text>
                    <TextInput
                        placeholder="hole 16 par"
                        onChange={(event) => this.setState({hole16par: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole16par} />
                  <Text style={styles.subheading}>HCP</Text>
                    <TextInput
                        placeholder="hole 16 hcp"
                        onChange={(event) => this.setState({hole16hcp: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole16hcp} />
                </View>
                <View style = {styles.flowright}>
                  <Text style = {styles.subheading1}>Hole 17</Text>
                  <Text style={styles.subheading}>Par</Text>
                    <TextInput
                        placeholder="hole 17 par"
                        onChange={(event) => this.setState({hole17par: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole17par} />
                  <Text style={styles.subheading}>HCP</Text>
                    <TextInput
                        placeholder="hole 17 hcp"
                        onChange={(event) => this.setState({hole17hcp: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole17hcp} />
                </View>
                <View style = {styles.flowright}>
                  <Text style = {styles.subheading1}>Hole 18</Text>
                  <Text style={styles.subheading}>Par</Text>
                    <TextInput
                        placeholder="hole 18 par"
                        onChange={(event) => this.setState({hole18par: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole18par} />
                  <Text style={styles.subheading}>HCP</Text>
                    <TextInput
                        placeholder="hole 18 hcp"
                        onChange={(event) => this.setState({hole18hcp: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole18hcp} />
                </View>
                <TouchableHighlight underlayColor="gray" onPress={(this.onSubmitPressed)} style={styles.button}>
                  <Text style={styles.buttonText}>Save Course Info</Text>
                </TouchableHighlight>
              </View>
            </View>


        );
    },
    onSubmitPressed: function() {
        this.props.navigator.push({
            title: "Game Setup",
            component: GameSetup,
            passProps: {username: this.state.username},
        });
    }

});

var styles = StyleSheet.create({
    container: {
      backgroundColor: '#004304',
      padding: 30,
      marginTop: 65,
      alignItems: "stretch",
      flex: 1,
    },
    flowright: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    backgroundImage: {
    backgroundColor: 'transparent',
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    },
    formInput1: {
        height: 20,
        padding: 1,
        marginRight: 2,
        marginBottom: 2,
        marginTop: 2,
        textAlign: 'center',
        flex: 1,
        fontSize: 18,
        borderWidth: 1,
        //borderColor: 'white',
        borderRadius: 6,
        color: "white",
        opacity: 1,
        backgroundColor: 'black',
    },
    formInput: {
        height: 16,
        padding: 1,
        marginRight: 2,
        marginBottom: 2,
        marginTop: 2,
        textAlign: 'center',
        flex: 1,
        fontSize: 13,
        borderWidth: 1,
        //borderColor: 'white',
        borderRadius: 6,
        color: "white",
        opacity: 1,
        backgroundColor: 'black',
    },
    heading: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#cccccc',
    },
    subheading: {
        width: 30,
        color: "#cccccc"
    },
    subheading1: {
        width: 70,
        color: "#cccccc"
    },
    button: {
        height: 36,
        flex: 1,
        backgroundColor: 'black',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 10,
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
});

module.exports = CourseSetup
