var React = require('react-native');
var {View, Text, StyleSheet, ScrollView, TextInput, TouchableHighlight, Image} = React;
var Colors = require('../const/colors');
var NavBar = require('../cpnts/PageNavBar');
var {Icon} = require('react-native-icons');
var FormMobileCode = require('../cpnts/FormMobileCode');

var FastLogin = React.createClass({
  getInitialState(){
    return {
      captchaUrl: 'http://www.txbb.com/b/captcha'
    };
  },

  _changeCaptcha(){
    var captchaUrl = `http://www.txbb.com/b/captcha?v=${parseInt(Math.random() * 10000)}`;
    this.setState({captchaUrl});
  },

  render() {
    return (
      <View style={styles.ctn}>
        <NavBar
          title={'快速登录'}
          navigator={this.props.navigator}/>
        <View style={styles.wrap}>
          <FormMobileCode submitText={'登录'}/>
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
  wrap: {
    width: 300,
    alignSelf: 'center'
  }
});

module.exports = FastLogin;
