var React = require('react-native');
var {View, Text, StyleSheet, ScrollView, TextInput, TouchableHighlight, Image} = React;
var Colors = require('../const/colors');
var {Icon} = require('react-native-icons');

var FormNamePwd = React.createClass({
  getInitialState(){
    return {
      captchaUrl: 'http://www.txbb.com/b/captcha',
      inputs: {
        name: '',
        pwd: ''
      }
    };
  },

  _changeCaptcha(){
    var captchaUrl = `http://www.txbb.com/b/captcha?v=${parseInt(Math.random() * 10000)}`;
    this.setState({captchaUrl});
  },

  _onTextChange(type, text) {
    var inputs = this.state.inputs;
    inputs[type] = text;
    this.setState({inputs});
  },

  render() {
    return (
      <View style={{marginVertical: 30}}>
        <View style={styles.formGroup}>
          <View style={styles.inputWrap}>
            <Icon name={'ion|person'} size={20} style={styles.icon} color={this.state.inputs.name ? Colors.main : Colors.bdColor}/>
            <TextInput style={styles.input} onChangeText={this._onTextChange.bind(this, 'name')} placeholder={'手机号/账号/邮箱'} value={this.state.inputs.name}/>
          </View>
        </View>
        <View style={styles.formGroup}>
          <View style={styles.inputWrap}>
            <Icon name={'ion|key'} size={20} style={styles.icon} color={this.state.inputs.pwd ? Colors.main : Colors.bdColor}/>
            <TextInput
              style={styles.input}
              onChangeText={this._onTextChange.bind(this, 'pwd')}
              placeholder={'密码'}
              value={this.state.inputs.pwd}
              secureTextEntry={true}/>
          </View>
        </View>
        <View style={[styles.formGroup, {marginTop: 20}]}>
          <TouchableHighlight style={styles.btn} underlayColor={Colors.touched}>
            <Text style={styles.btnText}>{this.props.submitText}</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  formGroup: {
    marginBottom: 10,
    flexDirection: 'row'
  },
  icon: {
    width: 30,
    height: 30
  },
  inputWrap: {
    flex: 1,
    height: 40,
    borderRadius: 4,
    borderColor: Colors.bdColor,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 40,
    backgroundColor: 'transparent',
    flex: 1,
    paddingHorizontal: 10,
    borderRadius: 4,
    paddingLeft: 0,
    color: Colors.gray
  },
  inputRight: {
    width: 100,
    height: 36,
    marginLeft: 10
  },
  captcha: {
    flex: 1,
    borderRadius: 4
  },
  btn: {
    height: 40,
    borderRadius: 4,
    backgroundColor: Colors.main,
    justifyContent: 'center',
    flex: 1
  },
  btnText: {
    color: Colors.wit,
    fontSize: 16,
    textAlign: 'center'
  },
  btnWit: {
    backgroundColor: 'transparent',
    borderColor: Colors.wit,
    borderWidth: 1
  },
  btnTextWit: {
    color: Colors.gray
  },
  text: {
    color: Colors.gray,
    textAlign: 'center'
  }
});

module.exports = FormNamePwd;
