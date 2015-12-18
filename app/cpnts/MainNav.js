var React = require('react-native');
var {View, Text, StyleSheet, TouchableHighlight, Image, TouchableHighlight} = React;
var Colors = require('../const/colors');

var MainNav = React.createClass({
  getInitialState() {
    return {
      data : this.props.navData || [{}, {}, {}, {}]
    };
  },

  render() {
    var navItemArr = this.state.data;
    var firstGroup = navItemArr.splice(0,4);
    var lastGroup = [];
    if (navItemArr.length) {
      for (let i = navItemArr.length ; i<4 ; i++) {
        navItemArr.push({});
      }
      lastGroup = navItemArr;
    }
    return (
      <View>
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
    padding: 5
  },
  menuItemText: {
    textAlign: 'center',
    color: Colors.gray
  },
  menuItemImg: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignSelf: 'center',
    marginBottom: 10
  }
});

module.exports = MainNav;
