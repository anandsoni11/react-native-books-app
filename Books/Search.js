'use strict';

import React, {
  Component,
  NavigatorIOS,
  Text,
  StyleSheet,
  View
} from 'react-native';

var SearchBooks = require('./SearchBooks');

var styles = StyleSheet.create({
                               container: {
                               flex: 1,
                               }
                              });

class Search extends Component {
  render() {
    return (
            <NavigatorIOS
            style={styles.container}
            initialRoute={{
            title: 'Search Books',
            component: SearchBooks
            }}/>
            );
  }
}

module.exports = Search;