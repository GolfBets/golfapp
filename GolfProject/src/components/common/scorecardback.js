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
          <Text style = {styles.label}>{this.props.h10}</Text>
          <Text style = {styles.label}>{this.props.h11}</Text>
          <Text style = {styles.label}>{this.props.h12}</Text>
          <Text style = {styles.label}>{this.props.h13}</Text>
          <Text style = {styles.label}>{this.props.h14}</Text>
          <Text style = {styles.label}>{this.props.h15}</Text>
          <Text style = {styles.label}>{this.props.h16}</Text>
          <Text style = {styles.label}>{this.props.h17}</Text>
          <Text style = {styles.label}>{this.props.h18}</Text>
          <Text style = {styles.label}>{this.props.totalBack}</Text>
          <Text style = {styles.label}>{this.props.total}</Text>
        </View>

    );
  },

});

var styles = StyleSheet.create({
  label: {
    fontSize: 12,
    color: 'black',
    textAlign:'center',
    borderColor:'black',
    borderWidth:1,
    flex:1
  },
  labelName: {
    fontSize: 12,
    color: 'black',
    flex:1.5
  },
  flowright: {
    flex:1,
    justifyContent: "space-between",
    flexDirection: 'row',

  },


});
