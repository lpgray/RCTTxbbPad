var React = require('react-native');
var {View, Text, StyleSheet, ScrollView, TextInput, TouchableHighlight, Image} = React;
var Colors = require('../const/colors');
var {Icon} = require('react-native-icons');

var FormMobileCode = React.createClass({
  getInitialState(){
    return {
      captchaUrl: 'http://www.txbb.com/b/captcha',
      inputs: {
        mobile: '',
        code: ''
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
            <Icon name={'ion|android-phone-portrait'} size={20} style={styles.icon} color={this.state.inputs.mobile ? Colors.main : Colors.bdColor}/>
            <TextInput style={styles.input} onChangeText={this._onTextChange.bind(this, 'mobile')} placeholder={'输入手机号'} value={this.state.inputs.mobile}/>
          </View>
        </View>
        <View style={styles.formGroup}>
          <View style={styles.inputWrap}>
            <Icon name={'ion|android-create'} size={20} style={styles.icon} color={this.state.inputs.code ? Colors.main : Colors.bdColor}/>
            <TextInput style={styles.input} onChangeText={this._onTextChange.bind(this, 'code')} placeholder={'输入校验码'} value={this.state.inputs.code}/>
          </View>
          <View style={styles.inputRight}>
            <TouchableHighlight style={[styles.btn, {backgroundColor: Colors.wit, borderColor: Colors.main, borderWidth: 1}]} underlayColor={Colors.touched}>
              <Text style={[styles.btnText, {fontSize: 14,color: Colors.main}]}>获取校验码</Text>
            </TouchableHighlight>
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

module.exports = FormMobileCode;
