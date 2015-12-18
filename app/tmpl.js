var React = require('react-native');
var {View, Text, StyleSheet} = React;
var Colors = require('../const/colors');

var App = React.createClass({
  render() {
    return (
      <View style={styles.ctn}>
        
      </View>
    );
  }
});

var styles = StyleSheet.create({
  ctn : {
    flex: 1,
    flexDirection: 'row'
  }
});

module.exports = App;
