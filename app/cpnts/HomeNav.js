var React = require('react-native');
var {View, Text, StyleSheet, TouchableHighlight, Image, TouchableHighlight} = React;
var Colors = require('../const/colors');

var HomeNav = React.createClass({

  getInitialState(){
    return {data: []};
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({data: nextProps.data});
  },

  render() {
    var navItemArr = this.state.data;
    var firstGroup = navItemArr.slice(0,4);
    var lastGroup = [];
    if (navItemArr.length > 4) {
      lastGroup = navItemArr.slice(4, navItemArr.length);
      for (var i = lastGroup.length ; i < 4 ; i++) {
        lastGroup.push({});
      }
    }
    return (
      <View style={{paddingVertical: 10}}>
        <View style={styles.ctn}>
          {
            firstGroup.map((item, i) => {
              return (
                <TouchableHighlight style={styles.menuItem} key={`MenuItem${i}`} underlayColor={Colors.touched}>
                  <View style={styles.menuItem}>
                    <Image style={styles.menuItemImg} source={{uri:item.img}}/>
                    <Text style={styles.menuItemText}>{item.title}</Text>
                  </View>
                </TouchableHighlight>
              );
            })
          }
        </View>
        <View style={styles.ctn}>
          {
            lastGroup.map((item, i) => {
              return (
                <TouchableHighlight style={styles.menuItem} key={`MenuItem${i}`} underlayColor={Colors.touched}>
                  <View style={styles.menuItem}>
                    <Image style={styles.menuItemImg} source={{uri:item.img}}/>
                    <Text style={styles.menuItemText}>{item.title}</Text>
                  </View>
                </TouchableHighlight>
              );
            })
          }
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  ctn : {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    flex: 1
  },
  menuItem: {
    flex: 1,
    height: 66,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuItemText: {
    color: Colors.gray,
  },
  menuItemImg: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 10
  }
});

module.exports = HomeNav;
