/**
 * Author: 笑翟 <gindis.wx>
 * Description: 详情视图组件
 * Create by: 05/17/2016
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Text
} from 'react-native';

import logger from '../lib/logger';
import NavigationBar from 'react-native-navbar';
import CustomScreen from './CustomScreen';
import {
  SongList,
  ImageSlider
} from '../module';

// 定义视图信息
const DEFAULT_CONFIG = {
  title: '阿里音乐'
}

const InitialScreen = class InitialScreen extends Component {
  /**
   * 初始化默认的属性和状态 getDefaultProps, getInitialState
   */
  constructor(props) {
    // 默认属性
    super(props)
    // 默认状态
    this.state = {
      title: '阿里音乐'
    }
    logger.cLog('constructor', '1，N')
  }

  /**
   * 准备加载组件
   */
  componentWillMount() {
    logger.cLog('componentWillMount', '=1，Y')
  }

  /**
   * 渲染
   */
  render() {
    logger.cLog('render', '>=0, N');
    const rightButtonConfig = {
      title: '活动',
      handler: () => this.props.navigator.push({
        component: CustomScreen
      })
    }
    return (
      <View style={styles.container}>
        <NavigationBar
          style={styles.navigatorBar}
          title={{ title: this.state.title, }}
          rightButton={rightButtonConfig} />
        <ImageSlider images={[
            'http://pic.xiami.net/images/common/uploadpic/56/14631921561498.jpg',
            'http://pic.xiami.net/images/common/uploadpic/40/14632784406139.jpg',
            'http://pic.xiami.net/images/common/uploadpic/3/14632784036254.jpg',
            'http://pic.xiami.net/images/common/uploadpic/98/14631921981852.jpg'
        ]} callbackParent={this._onChildChanged.bind(this)}/>
        <SongList
            navigator = {this.props.navigator}
        />
      </View>
    )
  }

  /**
   * 组件第一次绘制之后
   */
  componentDidMount() {
    // this.setState({
    //   title: DEFAULT_CONFIG.title
    // });
    logger.cLog('componentDidMount', '=1，Y')
  }

  /**
   * 组件收到新的属性
   */
  componentWillReceiveProps() {
    logger.cLog('componentWillReceiveProps', '>=0，Y')
  }

  /**
   * 组件接收到新的属性和状态改变
   */
  shouldComponentUpdate() {
    logger.cLog('shouldComponentUpdate', '>=0，N')
    return true;
  }

  /**
   * 组件状态或者属性改变
   */
  componentWillUpdate() {
    logger.cLog('componentWillUpdate', '>=0，N')
  }

  /**
   * 更新完之后
   */
  componentDidUpdate() {
    logger.cLog('componentDidUpdate', '>=0，N')
  }

  /**
   * 组件销毁
   */
  componentWillUnmount() {
    logger.cLog('componentWillUnmount', '=1，N')
  }

  /**
   * 打开新窗口
   */
  _openView() {
    this.props.navigator.push({
      component: CustomScreen
    })
  }

  /**
   * 子组件向父组件传参
   */
  _onChildChanged(title, index) {
    logger.cLog(title);
    this.setState({
      title: title
    });
    Alert.alert(
      'hello, #' + index
    )
  }

}

/**
 * 定义样式
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  navigatorBar: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#BBB'
  }
})
module.exports = InitialScreen;
