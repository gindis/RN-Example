/**
 * Author: 笑翟 <gindis.wx>
 * Description: 歌曲列表组件
 * Create by: 05/17/2016
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ListView,
  View,
  Navigator,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import logger from '../lib/logger';
import DetailScreen from '../components/DetailScreen';

// const MOCKED_MOVIES_DATA = [
//   {title: 'Title', year: '2016', posters: {thumbnail: 'https://facebook.github.io/react/img/logo_og.png'}},
// ];

// const API_KEY = '7waqfqbprs7pajbz28mqf6vz';
// const API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
// const PAGE_SIZE = 25;
// const PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
// const REQUEST_URL = API_URL + PARAMS;

// 域名
const DOMAIN = {
  'imgUrl': 'http://img.xiami.net/'
}

// 加载图片
const LOADING = {
  'local': 'http://gtms02.alicdn.com/tps/i2/T1pOySFxxcXXbHygfc-30-30.gif'
}

// 请求地址
const REQUEST_URL = 'http://www.xiami.com/song/playlist-default/cat/json';

const SongList = class SongList extends Component {

  /**
   * 初始化属性和状态
   */
  constructor(props) {
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    }

  }

  /**
   * 渲染绘制视图
   */
  render() {
    if (!this.state.loaded`) {
      return this._renderLoadingView();
    }
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow.bind(this)}
        style={styles.listView}
      />
    )
  }

  /**
   * 组件第一次绘制之后
   */
  componentDidMount() {
    this._fetchData();
  }

  /**
   * 加载loading
   */
  _renderLoadingView() {
    return (
      <View style={styles.loading}>
        <Image
          source={{uri: LOADING.local}}
          style={{width:30,height: 30}}
        />
      </View>
    )
  }

  /**
   * 操作row
   */
  _pressRow(rowData){
    // this.setState({
    //   dataSource: this.state.dataSource.cloneWithRows({}),
    //   loaded: false,
    // });
    // return;
    this.props.navigator.push({
      component: DetailScreen,
      params: {
        songID: rowData.song_id,
        songName: rowData.songName,
        artistName: rowData.artist_name,
      }
    });
  }

  /**
   * 请求数据
   */
  _fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        logger.cLog(responseData);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.data.trackList),
          loaded: true
        });
      })
      .done();
  }

  /**
   * 绘制行
   */
  _renderRow(rowData: array, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {
    return (
      <TouchableOpacity onPress={() => {
        highlightRow(sectionID, rowID)
        this._pressRow(rowData);
      }}>
      <View style={styles.container}>
        <Image
          source={{uri: DOMAIN.imgUrl + rowData.album_logo}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{rowData.songName}</Text>
          <Text style={styles.albumName}>{rowData.artist_name}</Text>
        </View>
      </View>
      </TouchableOpacity>
    )
  }
}

/**
 * 定义样式
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee'
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  rightContainer: {
    flex: 1,
    width: 300,
    paddingLeft: 5
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'left',
  },
  albumName: {
    textAlign: 'left',
    color: '#999',
  },
  thumbnail: {
    width: 56,
    height: 56,
  },
  listView: {
    paddingTop: 2.5,
    backgroundColor: '#FFF',
  },
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
});

module.exports = SongList;
