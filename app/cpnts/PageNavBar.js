var React = require('react-native');
var Colors = require('../const/colors');
var {View, Text, StyleSheet, TouchableHighlight, TextInput} = React;
var {Icon} = require('react-native-icons');

var PageNavBar = React.createClass({
  _back() {
    this.props.navigator.pop();
  },

  render() {
    return (
      <View style={styles.navbar}>
        <View style={styles.left}>
          <TouchableHighlight onPress={this._back} underlayColor={'#fff'}>
            <View style={styles.linkWrap}>
              <Icon name='ion|ios-arrow-left' size={30} color={Colors.main} style={{width: 30,height: 30}}/>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.middle}>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
        <View style={styles.right}></View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  navbar : {
    backgroundColor: Colors.wit,
    borderColor: Colors.bdColor,
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 86,
    paddingTop: 22,
    justifyContent: 'center'
  },
  left: {
    width: 200,
    justifyContent: 'center'
  },
  right: {
    width: 200
  },
  linkWrap: {
    width: 80,
    paddingLeft: 15,
    paddingRight: 15,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  linkText: {
    fontSize: 16,
    color: Colors.main
  },
  middle: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    textAlign: 'center'
  }
});

module.exports = PageNavBar;
