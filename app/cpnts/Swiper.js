var React = require('react-native');
var {View, Text, StyleSheet} = React;
var Colors = require('../const/colors');

var Swiper = React.createClass({
  render() {
    return (
      <View style={styles.ctn}>
        
      </View>
    );
  }
});

var styles = StyleSheet.create({
  ctn : {
    backgroundColor: '#eee',
    flex: 1,
    paddingTop: 22,
    flexDirection: 'row'
  }
});

module.exports = Swiper;
