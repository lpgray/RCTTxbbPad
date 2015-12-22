var React = require('react-native');
var {View, Text, StyleSheet, ScrollView, TouchableHighlight, Image} = React;
var Colors = require('../const/colors');
var NavBar = require('../cpnts/PageNavBar');
var Server = require('../mock/server');
var {Icon} = require('react-native-icons');

var UserCenter = React.createClass({
  getInitialState(){
    return {
      data:{},
      editting: false
    };
  },

  componentDidMount() {
    Server.getUserPageData(function(err, data){
      this.setState({data : data.userData});
    }.bind(this));
  },

  _edit(){
    this.setState({editting: true});
  },

  render() {
    var data = this.state.data;
    return (
      <View style={styles.ctn}>
        <NavBar
          title={'个人中心'}
          navigator={this.props.navigator}
          prevTitle={'首页'}
          />
        <ScrollView
          contentInset={{top:0}}
          automaticallyAdjustContentInsets={false}
          contentContainerStyle={styles.scrollView}>

          <View style={styles.mainWrap}>
            <View style={styles.wrap}>
              <View style={styles.left}>
                <Text style={styles.title}>{data.name}</Text>
                <View style={styles.infoGroup}>
                  <View style={styles.info}>
                    <Icon name='ion|ios-telephone' size={20} color={Colors.lightGray} style={styles.infoIcon}/>
                    <Text style={styles.infoText}>{data.mobile}</Text>
                  </View>
                </View>
                <View style={styles.infoGroup}>
                  <View style={styles.info}>
                    <Icon name='ion|ribbon-b' size={20} color={Colors.lightGray} style={styles.infoIcon}/>
                    <Text style={styles.infoText}>{data.levelText}</Text>
                  </View>
                  <View style={styles.info}>
                    <Icon name='ion|clipboard' size={20} color={Colors.lightGray} style={styles.infoIcon}/>
                    <Text style={styles.infoText}>简历完成度：{data.resumePercent}</Text>
                  </View>
                </View>
                <View style={[styles.infoGroup, {marginTop: 30}]}>
                  <TouchableHighlight style={styles.btn} onPress={this._edit} underlayColor={Colors.touched}>
                    <Text style={styles.btnText}>编辑</Text>
                  </TouchableHighlight>
                </View>
              </View>
              <View style={styles.right}>
                <View style={styles.avatarWrap}>
                  <Image style={styles.avatar} source={{uri : data.avatar}}/>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.mainWrap}>
            <View style={[styles.wrap, {flexDirection: 'column'}]}>
              <Text style={styles.subTitle}>我的实践</Text>
              <View style={styles.nav}>
                <TouchableHighlight style={styles.navItemWrap} underlayColor={Colors.touched}>
                  <View>
                    <Image style={styles.navItemImg} source={require('../img/usercenter/evaluate.png')}/>
                    <Text style={styles.navItemText}>待录用/确认</Text>
                    <Text style={styles.bubble}>99+</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.navItemWrap} underlayColor={Colors.touched}>
                  <View>
                    <Image style={styles.navItemImg} source={require('../img/usercenter/mountguard.png')}/>
                    <Text style={styles.navItemText}>待上岗</Text>
                    <Text style={[styles.bubble, {width: 18}]}>1</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.navItemWrap} underlayColor={Colors.touched}>
                  <View>
                    <Image style={styles.navItemImg} source={require('../img/usercenter/interview.png')}/>
                    <Text style={styles.navItemText}>待结算</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.navItemWrap} underlayColor={Colors.touched}>
                  <View>
                    <Image style={styles.navItemImg} source={require('../img/usercenter/evaluate.png')}/>
                    <Text style={styles.navItemText}>待评价</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </View>

          <TouchableHighlight style={[styles.btn, styles.btnDanger]} underlayColor={Colors.touched}>
            <Text style={[styles.btnText, styles.btnDangerText]}>退出登录</Text>
          </TouchableHighlight>

          <Text style={styles.wordsGray}>更多精彩，请下载手机版App</Text>

        </ScrollView>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  ctn : {
    flex: 1
  },
  scrollView: {
    flex: 1,
    backgroundColor: Colors.wit
  },
  mainWrap: {
    backgroundColor: Colors.wit,
    borderColor: Colors.bdColor2,
    borderBottomWidth: 1,
    width: 600,
    alignSelf: 'center',
    paddingVertical: 30
  },
  left: {
    flex: 2
  },
  right: {
    flex: 1
  },
  title: {
    color: Colors.blk,
    fontSize: 24
  },
  wrap: {
    width: 500,
    alignSelf: 'center',
    flexDirection: 'row'
  },
  infoGroup: {
    marginTop: 10,
    flexDirection: 'row'
  },
  info: {
    flexDirection: 'row',
    marginRight: 30,
    alignItems: 'center'
  },
  infoText: {
    color: Colors.gray,
    fontSize: 16
  },
  infoIcon: {
    width: 20,
    height: 20,
    marginRight: 5
  },
  btn: {
    borderWidth: 1,
    borderColor: Colors.main,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginRight: 10
  },
  btnText: {
    fontSize: 14,
    color: Colors.main
  },
  avatarWrap: {
    alignSelf: 'flex-end'
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55
  },
  subTitle: {
    fontSize: 20,
    color: Colors.blk
  },
  wordsGray: {
    textAlign: 'center',
    marginVertical: 50,
    color: Colors.lightGray
  },
  navItemImg: {
    alignSelf: 'center',
    marginBottom: 10
  },
  navItemText: {
    textAlign: 'center',
    color: Colors.gray
  },
  navItemWrap : {
    flex: 1,
    paddingVertical: 20
  },
  nav: {
    flexDirection: 'row',
    marginTop: 10
  },
  bubble: {
    color: Colors.wit,
    backgroundColor: Colors.red,
    position: 'absolute',
    padding: 3,
    borderRadius: 9,
    height: 18,
    textAlign: 'center',
    lineHeight: 13,
    top: -5,
    left: 80,
    fontSize: 12,
    overflow: 'hidden'
  },
  btnDanger: {
    marginVertical: 50,
    width: 300,
    alignSelf: 'center',
    paddingVertical: 14,
    borderColor: Colors.red
  },
  btnDangerText: {
    textAlign: 'center',
    color: Colors.red
  }
});

module.exports = UserCenter;
