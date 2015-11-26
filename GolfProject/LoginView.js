"use strict";

var React = require("react-native");

var {
    StyleSheet,
    Text,
    Image,
    TextInput,
    TouchableHighlight,
    View,
} = React;

var CourseSetup = require("./CourseSetup");

var LoginView  = React.createClass({


    getInitialState: function(){
      return {
        username: '',
        password: '',
      }
    },


    render: function() {
      console.log(this.state)
        return (
        <Image source={require('./bdg.jpeg')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Sign In
                </Text>
                <View>
                    <TextInput
                        placeholder="Username"
                        onChange={(event) => this.setState({username: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.username} />
                    <TextInput
                        placeholder="Password"
                        secureTextEntry={true}
                        onChange={(event) => this.setState({password: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.password} />
                    <TouchableHighlight onPress={(this.onSubmitPressed)} style={styles.button}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableHighlight>
                </View>
            </View>
         </Image>
        );
    },

    onSubmitPressed: function() {
        this.props.navigator.push({
            title: "Course Info",
            component: CourseSetup,
            passProps: {username: this.state.username, password: this.state.password},
        });
    }

});

var styles = StyleSheet.create({
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: "stretch"
    },
    title: {
        fontSize: 18,
        marginBottom: 10,
        color: 'white',
    },
    backgroundImage: {
    backgroundColor: 'transparent',
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    },

    formInput: {
        height: 36,
        padding: 10,
        marginRight: 5,
        marginBottom: 5,
        marginTop: 5,
        flex: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: "black",
        opacity: 1,
        backgroundColor: 'white',
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

module.exports = LoginView;
