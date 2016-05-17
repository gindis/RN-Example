/**
 * Author: 笑翟 <gindis.wx>
 * Description: 活动视图组件
 * Create by: 05/17/2016
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import { CompaignVotingList } from '../module/compaign';

// 定义视图信息
const DEFAULT_CONFIG = {
  title: '阿里星球'
}

const CustomScreen = class CustomScreen extends Component {

  /**
   * 初始化属性和状态
   */
  constructor(props) {
    console.log(props.route.params);
    super(props);
  }

  /**
   * 渲染视图
   */
  render() {
    const leftButtonConfig = {
      title: '返回',
      handler: () => this.props.navigator.pop(),
    }

    return (
      <View style={styles.container}>
        <NavigationBar
          style={styles.navigatorBar}
          title={{ title: DEFAULT_CONFIG.title, }}
          leftButton={leftButtonConfig} />
        <CompaignVotingList/>
      </View>
    )
  }
  
}

/**
 * 定义样式
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  navigatorBar: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#BBB'
  }
})

module.exports = CustomScreen;
