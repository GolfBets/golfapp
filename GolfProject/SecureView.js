"use strict";

var React = require("react-native");

var {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
} = React;


var SecureView = React.createClass({
    getInitialState: function(){
      return {
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
      }
    },
// logic to check login info here  - then render welcome user and enter course name annd info
    render: function() {
      console.log(this.state)
        return (
          <Image source={require('./bcg.jpeg')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <Text style={styles.heading}>
                    Welcome {this.props.username}!
                </Text>
                <Text style={styles.subheading}>
                    Enter Course Info Below
                </Text>
                <View>
                    <TextInput
                        placeholder="hole 1 par"
                        type= "number"
                        onChange={(event) => this.setState({hole1par: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole1par} />
                    <TextInput
                        placeholder="hole 1 hcp"
                        onChange={(event) => this.setState({hole1hcp: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole1hcp} />
                    <TextInput
                        placeholder="hole 2 par"
                        onChange={(event) => this.setState({hole2par: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole2par} />
                    <TextInput
                        placeholder="hole 2 hcp"
                        onChange={(event) => this.setState({hole2hcp: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole2hcp} />
                    <TextInput
                        placeholder="hole 3 par"
                        onChange={(event) => this.setState({hole3par: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole3par} />
                    <TextInput
                        placeholder="hole 3 hcp"
                        onChange={(event) => this.setState({hole3hcp: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole3hcp} />
                    <TextInput
                        placeholder="hole 4 par"
                        onChange={(event) => this.setState({hole4par: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole4par} />
                    <TextInput
                        placeholder="hole 4 hcp"
                        onChange={(event) => this.setState({hole4hcp: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole4hcp} />
                    <TextInput
                        placeholder="hole 5 par"
                        onChange={(event) => this.setState({hole5par: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole5par} />
                    <TextInput
                        placeholder="hole 5 hcp"
                        onChange={(event) => this.setState({hole5hcp: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole5hcp} />
                    <TextInput
                        placeholder="hole 6 par"
                        onChange={(event) => this.setState({hole6par: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole6par} />
                    <TextInput
                        placeholder="hole 6 hcp"
                        onChange={(event) => this.setState({hole6hcp: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole6hcp} />
                    <TextInput
                        placeholder="hole 7 par"
                        onChange={(event) => this.setState({hole7par: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole7par} />
                    <TextInput
                        placeholder="hole 7 hcp"
                        onChange={(event) => this.setState({hole7hcp: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole7hcp} />
                    <TextInput
                        placeholder="hole 8 par"
                        onChange={(event) => this.setState({hole8par: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole8par} />
                    <TextInput
                        placeholder="hole 7 hcp"
                        onChange={(event) => this.setState({hole8hcp: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole8hcp} />
                    <TextInput
                        placeholder="hole 9 par"
                        onChange={(event) => this.setState({hole9par: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole9par} />
                    <TextInput
                        placeholder="hole 9 hcp"
                        onChange={(event) => this.setState({hole9hcp: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.hole9hcp} />
                </View>
            </View>

          </Image>
        );
    },
    // onSubmitPressed: function() {
    //     this.props.navigator.push({
    //         title: "Secure Page",
    //         component: SecureView,
    //         passProps: {username: this.state.username, password: this.state.password},
    //     });
    // }

});

var styles = StyleSheet.create({
  container: {
      padding: 30,
      marginTop: 65,
      alignItems: "stretch"
    },
    backgroundImage: {
    backgroundColor: 'transparent',
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    },
    formInput: {
        height: 18,
        padding: 10,
        marginRight: 2,
        marginBottom: 1,
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
    heading: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565',
    },
    subheading: {
        color: "#cccccc"
    }
});

module.exports = SecureView;
