var React = require('react-native');
var {View, Text, StyleSheet, ScrollView, TextInput, TouchableHighlight, Image} = React;
var Colors = require('../const/colors');
var NavBar = require('../cpnts/PageNavBar');
var {Icon} = require('react-native-icons');
var FormMobileCode = require('../cpnts/FormMobileCode');
var FastLogin = require('./FastLogin');

var Reg = React.createClass({
  getInitialState(){
    return {
      captchaUrl: 'http://www.txbb.com/b/captcha'
    };
  },

  _changeCaptcha(){
    var captchaUrl = `http://www.txbb.com/b/captcha?v=${parseInt(Math.random() * 10000)}`;
    this.setState({captchaUrl});
  },

  _showFastLoginPage() {
    this.props.navigator.push({
      name : 'fastlogin',
      title: 'fastlogin',
      component: FastLogin
    });
  },

  render() {
    return (
      <View style={styles.ctn}>
        <NavBar
          title={'注册帮帮账号'}
          navigator={this.props.navigator}/>
        <View style={styles.wrap}>
          <FormMobileCode submitText={'注册'}/>
          <Text style={styles.text}>或者</Text>
          <TouchableHighlight onPress={this._showFastLoginPage} underlayColor={'transparent'}>
            <View style={styles.linkWrap}>
              <Text style={styles.linkText}>使用手机号快捷登录</Text>
              <Icon name={'ion|ios-arrow-right'} size={18} style={{width:18,height:24}} color={Colors.gray}/>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  ctn : {
    flex: 1,
    backgroundColor: Colors.wit
  },
  text: {
    color: Colors.lightGray,
    textAlign: 'center'
  },
  wrap: {
    width: 300,
    alignSelf: 'center'
  },
  linkWrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 46
  },
  linkText: {
    fontSize: 16,
    color: Colors.gray
  }
});

module.exports = Reg;
