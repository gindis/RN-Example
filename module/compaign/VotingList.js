/**
 * Created by songyi on 16/3/28.
 */
'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  NavigatorIOS,
  TouchableOpacity,
  Alert
} from 'react-native';

import { VotingItemArtist, VotingItemSong } from '../../components/compaign/VotingItem';

const VotingArtistItem = VotingItemArtist.VotingArtistItem;

export default class CompaignVotingList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
          })
        };
    }

    render () {
        return (
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderView}
            style={styles.container}
          />
        )
    }

    componentWillMount(){

    }

    _pressRow(){
      Alert.alert(
        'My Alert Msg'
      )
    }

    _renderView(data) {
      return (
        <TouchableOpacity onPress={() => {
          Alert.alert(
            'My Alert Msg'
          )
        }}>
        <VotingArtistItem />
       </TouchableOpacity>
      )
    }

    componentDidMount(){
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows([
          {id: 1},
          {id: 2},
          {id: 2},
          {id: 2},
          {id: 2}
        ]),
        loaded: true,
      });
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       flexDirection: 'column',
      //  alignItems: 'center',
      //  justifyContent: 'flex-start',
       backgroundColor: 'rgba(37, 43, 47, 1)',
       paddingTop: 5,
       paddingBottom: 55
   }
});
