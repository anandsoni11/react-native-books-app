'use strict';

import React, {
  Component,
  Text,
  StyleSheet,
  NavigatorIOS,
  View
} from 'react-native';

var BookList = require('./BookList');

var styles = StyleSheet.create({
                               container: {
                               flex: 1,
                               }
                               });

class Featured extends Component {
  render() {
    return (
            <NavigatorIOS
            style={styles.container}
            initialRoute={{
            title: 'Available Books',
            component: BookList
            }}/>
            );
  }
}

module.exports = Featured;