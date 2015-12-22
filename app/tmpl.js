var React = require('react-native');
var {View, Text, StyleSheet, ScrollView} = React;
var Colors = require('../const/colors');
var NavBar = require('../cpnts/PageNavBar');

var UserCenter = React.createClass({
  render() {
    return (
      <View style={styles.ctn}>
        <NavBar title={'个人中心'} navigator={this.props.navigator}/>
        <ScrollView>

        </ScrollView>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  ctn : {
    flex: 1
  }
});

module.exports = UserCenter;
