"use strict";

var React = require("react-native");

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
} = React;

var LoginView = require("./LoginView");

var GolfProject = React.createClass({
    render: function() {
        return (
            <NavigatorIOS
                style={styles.navigationContainer}
                initialRoute={{
                title: "GolfBets",
                component: LoginView,
            }} />
        );
    }
});

var styles = StyleSheet.create({
    navigationContainer: {
        color: 'white',
        flex: 1
    }
});

AppRegistry.registerComponent('GolfProject', () => GolfProject);
