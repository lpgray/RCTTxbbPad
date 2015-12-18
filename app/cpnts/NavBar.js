var React = require('react-native');
var Colors = require('../const/colors');
var {View, Text, StyleSheet, TouchableHighlight, TextInput} = React;
var {Icon} = require('react-native-icons');

var NavBar = React.createClass({
  render() {
    return (
      <View style={styles.navbar}>
        <View style={styles.profile}>
          <TouchableHighlight underlayColor={'#fff'}>
            <View style={styles.linkWrap}>
              <Text style={styles.linkText}>登录</Text>
              <Icon name='ion|ios-arrow-down' size={16} color={Colors.gray} style={{width: 30,height: 30}}/>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.searchWrap}>
          <TextInput style={styles.input} placeholder={'输入工作内容/商家关键词'}/>
        </View>
        <View style={styles.navWrap}>
          <TouchableHighlight underlayColor={Colors.touched}>
            <View style={styles.iconWrap}>
              <Icon name='ion|ios-briefcase-outline' size={30} color={Colors.main} style={styles.icon}/>
              <Text style={styles.iconText}>实践</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={Colors.touched}>
            <View style={styles.iconWrap}>
              <Icon name='ion|ios-star-outline' size={30} color={Colors.main} style={styles.icon}/>
              <Text style={styles.iconText}>优选</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={Colors.touched}>
            <View style={styles.iconWrap}>
              <Icon name='ion|ios-chatbubble-outline' size={30} color={Colors.main} style={styles.icon}/>
              <Text style={styles.iconText}>消息</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={Colors.touched}>
            <View style={styles.iconWrap}>
              <Icon name='ion|ios-person-outline' size={30} color={Colors.main} style={styles.icon}/>
              <Text style={styles.iconText}>我的</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  navbar : {
    backgroundColor: Colors.wit,
    flex: 1,
    borderColor: Colors.bdColor,
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingTop: 10,
  },
  profile: {
    width: 200
  },
  linkWrap: {
    paddingLeft: 15,
    paddingRight: 15,
    height: 66,
    flexDirection: 'row',
    alignItems: 'center'
  },
  linkText: {
    fontSize: 16,
    color: Colors.main
  },
  searchWrap: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30
  },
  input: {
    height: 28,
    borderColor: '#e3e3e3',
    backgroundColor: '#eee',
    borderRadius: 14,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 12,
    borderWidth: 1,
    marginTop: 20
  },
  navWrap: {
    flexDirection: 'row',
    width: 240,
    alignSelf: 'flex-end'
  },
  icon: {
    width: 60,
    height: 50
  },
  iconText: {
    fontSize: 14,
    textAlign: 'center',
    width: 40,
    lineHeight: 14,
    color: Colors.gray,
    marginTop: -6
  },
  iconWrap: {
    width: 60,
    height: 66,
    alignItems: 'center'
  }
});

module.exports = NavBar;
