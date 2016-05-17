/**
 * Author: 笑翟 <gindis.wx>
 * Example
 */

'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Navigator
} from 'react-native';

import logger from './lib/logger';
import InitialScreen from './components/InitialScreen';

class Example extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  renderScene(route, navigator) {
    return <route.component route={route} navigator={navigator} />;
  }

  render() {
    const initialRoute = {
      component: InitialScreen
    }

    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={initialRoute}
          renderScene={this.renderScene}/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

AppRegistry.registerComponent('Example', () => Example);
