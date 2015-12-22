var React = require('react-native');
var Home = require('./pages/Home');
var {NavigatorIOS} = React;

var App = React.createClass({
  render() {
    return (
      <NavigatorIOS
        style={{flex: 1}}
        navigationBarHidden={true}
        ref="nav"
        initialRoute={{
            component: Home,
            title: '首页',
            itemWrapperStyle: {flex: 1}
        }}/>
    );
  }
});

module.exports = App;
