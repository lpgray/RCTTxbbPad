var React = require('react-native');
var Colors = require('../const/colors');
var {View, Text, StyleSheet, TouchableHighlight, TextInput} = React;
var {Icon} = require('react-native-icons');
var UserCenter = require('../pages/UserCenter');
var Login = require('../pages/Login');
var Reg = require('../pages/Reg');
var HomeNavBar = React.createClass({

  _onTabPressed(type) {
    if (type === 'UserCenter') {
      this.props.navigator.push({
        name : type,
        title: type,
        component: UserCenter
      });
    } else if (type === 'Login') {
      this.props.navigator.push({
        name : type,
        title: type,
        component: Login
      });
    } else if (type === 'Reg') {
      this.props.navigator.push({
        name : type,
        title: type,
        component: Reg
      });
    }
  },

  render() {
    return (
      <View style={styles.navbar}>
        <View style={styles.profile}>
          <TouchableHighlight onPress={this._onTabPressed.bind(this, 'Login')} style={{flexDirection:'row'}} underlayColor={'#fff'}>
            <View style={styles.linkWrap}>
              <Text style={styles.linkText}>登录</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._onTabPressed.bind(this, 'Reg')} style={{flexDirection:'row'}} underlayColor={Colors.touched}>
            <View style={styles.linkWrap}>
              <Text style={styles.linkText}>注册账号</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.searchWrap}>
          <TextInput style={styles.input} placeholder={'输入工作内容/商家关键词'}/>
        </View>

        <View style={styles.navWrap}>
          <TouchableHighlight underlayColor={Colors.touched}>
            <View style={styles.iconWrap}>
              <Icon name='ion|ios-briefcase-outline' size={34} color={Colors.main} style={styles.icon}/>
              <Text style={styles.iconText}>实践</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={Colors.touched}>
            <View style={styles.iconWrap}>
              <Icon name='ion|ios-star-outline' size={34} color={Colors.main} style={styles.icon}/>
              <Text style={styles.iconText}>优选</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={Colors.touched}>
            <View style={styles.iconWrap}>
              <Icon name='ion|ios-chatbubble-outline' size={34} color={Colors.main} style={styles.icon}/>
              <Text style={styles.iconText}>消息</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._onTabPressed.bind(this, 'UserCenter')} underlayColor={Colors.touched}>
            <View style={styles.iconWrap}>
              <Icon name='ion|ios-person-outline' size={34} color={Colors.main} style={styles.icon}/>
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
    borderColor: Colors.bdColor2,
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 86,
    paddingTop: 22,
    justifyContent: 'center'
  },
  profile: {
    width: 200,
    flexDirection: 'row',
    paddingLeft: 20
  },
  linkWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  linkText: {
    fontSize: 18,
    color: Colors.main
  },
  searchWrap: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'center'
  },
  input: {
    height: 36,
    borderColor: '#e3e3e3',
    backgroundColor: '#eee',
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 14,
    borderWidth: 1
  },
  navWrap: {
    flexDirection: 'row',
    width: 260,
    justifyContent: 'center'
  },
  icon: {
    width: 50,
    height: 40
  },
  iconText: {
    fontSize: 16,
    textAlign: 'center',
    width: 40,
    color: Colors.gray
  },
  iconWrap: {
    width: 65,
    alignItems: 'center'
  }
});

module.exports = HomeNavBar;
