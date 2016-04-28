/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  TabBarIOS,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Featured = require('./Featured');
var Search = require('./Search');

class Books extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        selectedTab: 'available'
        };
    }
  render() {
    return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
            <TabBarIOS.Item
            selected={this.state.selectedTab === 'available'}
            systemIcon="featured"
            onPress={() => {
            this.setState({
                          selectedTab: 'available'
                          });
            }}>
            <Featured/>
            </TabBarIOS.Item>
            <TabBarIOS.Item
            selected={this.state.selectedTab === 'search'}
            systemIcon="search"
            onPress={() => {
            this.setState({
                          selectedTab: 'search'
                          });
            }}>
            <Search/>
            </TabBarIOS.Item>
            </TabBarIOS>
    );
  }
}


AppRegistry.registerComponent('Books', () => Books);