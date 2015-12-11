var React = require('react-native');

var {View, Text, StyleSheet} = React;

var App = React.createClass({
  render() {
    return (
      <View style={styles.ctn}>
        <View style={styles.nav}>
          <Text>导航区</Text>
        </View>
        <View style={styles.secNav}>
          <Text>次导航区</Text>
        </View>
        <View style={styles.main}>
          <Text>主内容区，未来是响应式</Text>
        </View>
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
  },
  nav: {
    backgroundColor: 'aaa',
    width: 50
  },
  secNav: {
    backgroundColor: 'ccc',
    flex: 2
  },
  main: {
    backgroundColor: 'bbb',
    flex: 2
  }
});

module.exports = App;
