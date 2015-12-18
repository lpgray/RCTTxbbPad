var React = require('react-native');
var {View, Text, StyleSheet, ScrollView, requireNativeComponent} = React;
var NavBar = require('../cpnts/NavBar');
var ParttimeList = require('../cpnts/ParttimeList');
var MainNav = require('../cpnts/MainNav');
var Colors = require('../const/colors');
var Server = require('../mock/server');
var HomeRecmdList = require('../cpnts/HomeRecmdList');

var RCTSwiper = requireNativeComponent('RCTSwiper', null);


var Home = React.createClass({
  getInitialState() {
    return {
      data : {}
    };
  },

  componentWillMount() {
    var _this = this;
    Server.getHomePageData(function(err, data){
      _this.setState({data});
    });
  },

  render() {
    return (
      <View style={styles.ctn}>
        <View>
          <NavBar />
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.swiper}>
            <Text>图片轮播区，待实现</Text>
          </View>

          <View style={styles.mainNavWrap}>
            <MainNav navData={this.state.data.nav}/>
          </View>

          <View style={styles.recmdListWrap}>
            <HomeRecmdList data={this.state.data.recmdData}/>
          </View>

          <View style={styles.titleWrap}>
            <Text style={styles.title}>最新机会</Text>
          </View>
          <View style={styles.main}>
            <ParttimeList pts={this.state.data.pts}/>
          </View>
        </ScrollView>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  ctn : {
    backgroundColor: Colors.bg,
    flex: 1
  },
  mainNavWrap: {
    backgroundColor: Colors.wit,
    padding: 15,
    borderBottomColor: Colors.bdColor,
    borderBottomWidth: 1
  },
  recmdListWrap: {
    marginTop: 5,
  },
  swiper: {
    backgroundColor: '#f5f5f5',
    height: 240,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleWrap: {
    borderBottomColor: Colors.bdColor2,
    borderBottomWidth: 1,
    borderTopColor: Colors.bdColor,
    borderTopWidth: 1,
    backgroundColor: Colors.wit,
    marginTop: 5
  },
  title: {
    fontSize: 16,
    color: Colors.gray,
    padding: 15,
    flex: 1
  },
  scrollView: {
    backgroundColor: Colors.bg
  }
});

module.exports = Home;
