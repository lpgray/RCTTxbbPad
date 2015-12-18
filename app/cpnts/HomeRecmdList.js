var React = require('react-native');
var {View, Text, StyleSheet, Image, TouchableHighlight} = React;
var Colors = require('../const/colors');

var App = React.createClass({
  getInitialState() {
    return {
      data : this.props.data || []
    };
  },

  render() {
    return (
      <View style={styles.ctn}>
        {
          this.state.data.act.id ?
          (<TouchableHighlight style={styles.itemWrap} underlayColor={Colors.touched}>
            <View style={styles.item}>
              <View style={styles.titleWrap}>
                <Image style={styles.titleImg} source={require('../img/home/ic_activity.png')}/>
              </View>
              <View style={styles.row}>
                <View style={styles.cell0}>
                  <Text style={styles.title}>{this.state.data.act.title}</Text>
                  <Text style={styles.body}>{this.state.data.act.body}</Text>
                  <Text style={styles.salary}>{this.state.data.act.salary}</Text>
                </View>
                <View style={styles.cell1}>
                  <Image style={styles.img} source={{uri:this.state.data.act.img}}/>
                </View>
              </View>
            </View>
          </TouchableHighlight>) :
          null
        }

        {
          this.state.data.gar.id ?
          (<TouchableHighlight style={styles.itemWrap} underlayColor={Colors.touched}>
            <View style={styles.item}>
              <View style={styles.titleWrap}>
                <Image style={styles.titleImg} source={require('../img/home/ic_guarante.png')}/>
              </View>
              <View style={styles.row}>
                <View style={styles.cell0}>
                  <Text style={styles.title}>{this.state.data.gar.title}</Text>
                  <Text style={styles.body}>{this.state.data.gar.body}</Text>
                  <Text style={styles.salary}>{this.state.data.gar.salary}</Text>
                </View>
                <View style={styles.cell1}>
                  <Image style={styles.img} source={{uri:this.state.data.gar.img}}/>
                </View>
              </View>
            </View>
          </TouchableHighlight>) :
          null
        }

        {
          this.state.data.amz.id ?
          (<TouchableHighlight style={styles.itemWrap} underlayColor={Colors.touched}>
            <View style={styles.item}>
              <View style={styles.titleWrap}>
                <Image style={styles.titleImg} source={require('../img/home/ic_amazingparttime.png')}/>
              </View>
              <View style={styles.row}>
                <View style={styles.cell0}>
                  <Text style={styles.title}>{this.state.data.amz.title}</Text>
                  <Text style={styles.body}>{this.state.data.amz.body}</Text>
                  <Text style={styles.salary}>{this.state.data.amz.salary}</Text>
                </View>
                <View style={styles.cell1}>
                  <Image style={styles.img} source={{uri:this.state.data.amz.img}}/>
                </View>
              </View>
            </View>
          </TouchableHighlight>) :
          null
        }
      </View>
    );
  }
});

var styles = StyleSheet.create({
  ctn : {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 5
  },
  itemWrap: {
    backgroundColor: 'transparent',
    flex: 1,
    borderRadius: 4,
    margin: 5
  },
  item: {
    flex: 1,
    backgroundColor: Colors.wit,
    borderRadius: 4,
    borderColor: Colors.bdColor,
    borderWidth: 1
  },
  titleWrap: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.bdColor2,
    backgroundColor: 'transparent',
    height: 50
  },
  titleImg: {
    backgroundColor: 'transparent',
    marginTop: -8
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'transparent'
  },
  cell0: {
    flex: 1,
    marginRight: 5
  },
  cell1: {
    width: 70,
    height: 70,
    alignSelf: 'flex-start'
  },
  title :{
    fontSize: 18,
    height: 20,
    color: Colors.blk,
    marginBottom: 5
  },
  body : {
    fontSize: 14,
    lineHeight: 18,
    color: Colors.gray,
    height: 36,
    marginBottom: 5
  },
  salary: {
    fontSize: 16,
    color: Colors.orange
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 4
  }
});

module.exports = App;
