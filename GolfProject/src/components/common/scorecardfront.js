var React  = require('react-native');

var {
  View,
  Text,
  StyleSheet
}=React;


module.exports= React.createClass({

  render: function(){
    //console.log(this.props.route);
    return (

        <View style = {styles.flowright}>
          <Text style = {styles.labelName}>{this.props.text1}</Text>
          <Text style = {styles.label}>{this.props.h1}</Text>
          <Text style = {styles.label}>{this.props.h2}</Text>
          <Text style = {styles.label}>{this.props.h3}</Text>
          <Text style = {styles.label}>{this.props.h4}</Text>
          <Text style = {styles.label}>{this.props.h5}</Text>
          <Text style = {styles.label}>{this.props.h6}</Text>
          <Text style = {styles.label}>{this.props.h7}</Text>
          <Text style = {styles.label}>{this.props.h8}</Text>
          <Text style = {styles.label}>{this.props.h9}</Text>
          <Text style = {styles.label}>{this.props.totalFront}</Text>
          <Text style = {styles.label}></Text>
        </View>

    );
  },

});

var styles = StyleSheet.create({
  label: {
    fontSize: 12,
    color: 'white',
    width:21,
    textAlign:'center'
  },
  labelName: {
    fontSize: 12,
    color: 'white',
    width:60
  },
  flowright: {
    flex:1,
    justifyContent: "space-between",
    flexDirection: 'row',

  },


});
