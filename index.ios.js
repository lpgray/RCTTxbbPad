var React = require('react-native');
var App = require('./app/App');
var {AppRegistry} = React;

var RCTTxbbPad = React.createClass({
  render: function() {
    return (
      <App />
    );
  }
});

AppRegistry.registerComponent('RCTTxbbPad', () => RCTTxbbPad);
