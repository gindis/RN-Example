/**
 * Created by songyi on 16/3/30.
 */
'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import VotingArtistItemSongCell from './ArtistSongCell'

export default class VotingArtistItem extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.list}>
                    <VotingArtistItemSongCell />
                </View>
                <View style={styles.footer} >
                    <View style={styles.leftFooter}>
                        <Text style={styles.footerFont}>来自艺人</Text>
                    </View>
                    <View style={styles.rightFooter}>
                        <Image style={styles.footerAvatar} />
                        <Text style={styles.footerName}>陈粒</Text>
                        <Text style={styles.footerFont}>的投稿</Text>
                    </View>
                </View>
            </View>
        )
    }

    componentWillMount(){

    }

    componentDidMount(){

    }
}

var styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 155,
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        marginTop: 5,
        marginBottom: 5
    },
    list: {
        alignSelf: 'stretch',
        height: 100
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        height: 55
    },
    leftFooter: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerFont: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, .5)'
    },
    rightFooter: {
        height: 55,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    footerAvatar: {
        width: 25,
        height: 25,
        backgroundColor: '#ffffff',
        borderRadius: 13
    },
    footerName: {
        fontSize: 14,
        marginLeft: 10,
        marginRight: 10,
        color: 'rgba(255, 255, 255, .8)'
    }
});
