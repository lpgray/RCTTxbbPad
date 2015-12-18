var React = require('react-native');
var {View, Text, StyleSheet, Image, TouchableHighlight, Dimensions} = React;
var Colors = require('../const/colors');
var Server = require('../mock/server');
var {Icon} = require('react-native-icons');

var PtItem = React.createClass({
  render(){
    var item = this.props;
    return (
      <TouchableHighlight underlayColor={Colors.touched}>
        <View style={[styles.ptItem, {width: 256}]}>
          <View style={styles.row}>
            <View style={styles.cell0}>
              <Image source={{uri:item.thum}} style={styles.logo}/>
            </View>
            <View style={styles.cell1}>
              <Text numberOfLines={1} style={styles.ptTitle}>{item.title}</Text>
              <View style={styles.ptInfoGroup}>
                <Icon name='ion|bag' size={16} color={'#ccc'} style={styles.icon}/>
                <Text style={styles.ptInfoWords}>{item.company}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.ptInfoGroup}>
                  <Icon name='ion|clock' size={16} color={'#ccc'} style={styles.icon}/>
                  <Text style={styles.ptInfoWords}>{item.dateText}</Text>
                </View>
                <View style={styles.ptInfoGroup}>
                  <Icon name='ion|ios-location' size={16} color={'#ccc'} style={[styles.icon, {width: 10,marginLeft: 10}]}/>
                  <Text style={styles.ptInfoWords}>{item.distance}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.row, {marginTop: 2}]}>
            <View style={styles.cell0}>
              <Text style={styles.ptSalary}>{item.salary/100}{item.salaryUnit}</Text>
            </View>
            <View style={[styles.cell1, styles.tagsWrap]}>
              {
                item.recmd ? <Text style={[styles.badge, styles.recmd]}>保</Text> : null
              }
              {
                item.good ? <Text style={[styles.badge, styles.good]}>精</Text> : null
              }
              {
                item.tags.map(function(txt, index){
                  return <Text key={index} style={styles.tag}>{txt}</Text>;
                })
              }
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.cell0}></View>
            <View style={styles.cell1}>

            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
});

var PtList = React.createClass({
  getInitialState(){
    return {data: this.props.pts || []};
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({data: nextProps.pts});
  },

  render() {
    return (
      <View>
        <View style={styles.ctn}>
        {
          this.state.data.map((item) => {
            return <PtItem key={item.id} {...item} />;
          })
        }
        </View>
        <TouchableHighlight underlayColor={Colors.touched}>
          <View style={styles.viewMoreWrap}>
            <Text style={styles.viewMore}>查看更多</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  ctn : {
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row: {
    flexDirection: 'row'
  },
  icon: {
    width: 16,
    height: 22,
    marginRight: 4
  },
  ptItem: {
    padding: 14,
    borderBottomWidth: 1,
    borderColor: '#f5f5f5'
  },
  cell0: {
    alignItems: 'center',
    width: 66
  },
  cell1: {
    marginLeft: 10,
    flex: 1
  },
  ptSalary: {
    fontSize: 14,
    color: Colors.orange
  },
  ptTitle: {
    fontSize: 16,
    color: Colors.blk,
    lineHeight: 18,
    marginBottom: 5
  },
  ptInfoGroup: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ptInfoWords: {
    fontSize: 14,
    color: Colors.lightGray
  },
  tagsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden',
    alignItems: 'center'
  },
  tag: {
    fontSize: 12,
    color: Colors.orange,
    borderWidth: 1,
    padding: 1,
    borderRadius: 2,
    borderColor: Colors.orange,
    textAlign: 'center',
    height: 16,
    lineHeight: 14,
    marginRight: 4
  },
  logo: {
    flex: 1,
    borderRadius: 4,
    borderColor: '#f5f5f5',
    borderWidth: 1,
    height: 66,
    width: 66
  },
  badge: {
    width: 16,
    height: 16,
    borderRadius: 2,
    color: '#fff',
    backgroundColor: '#ddd',
    textAlign: 'center',
    lineHeight: 14,
    fontSize: 12,
    marginRight: 4
  },
  recmd: {
    backgroundColor: '#9ACF00'
  },
  good: {
    backgroundColor: '#ffba18'
  },
  viewMoreWrap: {
    backgroundColor: Colors.wit
  },
  viewMore: {
    flex: 1,
    textAlign: 'center',
    padding: 20,
    color: Colors.gray
  }
});

module.exports = PtList;
