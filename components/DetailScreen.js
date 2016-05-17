/**
 * Author: 笑翟 <gindis.wx>
 * Description: 详情视图组件
 * Create by: 05/17/2016
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  WebView
} from 'react-native';

import logger from '../lib/logger';
import NavigationBar from 'react-native-navbar';

// 定义视图信息
const DEFAULT_CONFIG = {
  title: '歌曲详情'
}

const WEBVIEW_REF = 'webview';

const DetailScreen = class DetailScreen extends Component {
  /**
   * 初始化属性和状态
   */
  constructor(props) {
    super(props);
    this.state = {
      title: DEFAULT_CONFIG.title,
      params: {
        songName: DEFAULT_CONFIG.title,
        artistName: ''
      }
    }
  }

  /**
   * 渲染绘制视图
   */
  render() {
    const leftButtonConfig = {
      title: '返回',
      handler: () => this.props.navigator.pop(),
    }
    const params = this.state.params;
    return (
      <View style={styles.container}>
        <NavigationBar
          style={styles.navigatorBar}
          title={{ title: this.state.title, }}
          leftButton={leftButtonConfig} />
          <View style={styles.content}>
            <Text>{params.songName}</Text>
            <Text>{params.artistName}</Text>
            <Text onPress={() => {
              this._setTitle('你好');
            }}>设置标题</Text>
          </View>
          <WebView
            ref={WEBVIEW_REF}
            automaticallyAdjustContentInsets={false}
            style={styles.webView}
            source={{uri: 'http://m.xiami.com/'}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            decelerationRate="normal"
            startInLoadingState={true}
          />
      </View>
    )
  }

  /**
   * 组件第一次绘制之后
   */
  componentDidMount() {
    let params = this.props.route.params;
    this.setState({
      title: params.songName + '-' + params.artistName,
      params: params
    });
  }

  /**
   * 设置标题
   */
  _setTitle(title) {
    this.setState({
      title: title
    })
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
  },
  content: {
    height: 100,
    backgroundColor: '#FFF'
  },
  webView: {
    flex: 1,
  }
})

module.exports = DetailScreen;
