/**
 * Created by songyi on 16/3/30.
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text
} from 'react-native';

import Button from '../../../base/Button';

export default class VotingArtistItemSongCell extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.leftCell}>
                    <Image style={styles.avatar} />
                    <Image style={styles.btnPlay} source={require('../../../../assets/btn-play.png')} />
                </View>
                <View style={styles.rightCell}>
                    <View style={styles.info}>
                        <Text style={styles.title}>白亦初白亦初白亦白亦初白亦初白亦</Text>
                        <Text style={styles.num}>白亦初</Text>
                    </View>
                    <View style={styles.action}>
                        <Button text="投票" theme={Button.THEME.PRIMARY} size={Button.SIZE.SMALL} />
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
        flex: 1,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    leftCell: {
        position: 'relative',
        width: 100,
        height: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 70,
        height: 70,
        backgroundColor: '#ffffff',
        borderRadius: 3
    },
    btnPlay: {
        width: 25,
        height: 25,
        borderRadius: 13,
        position: 'absolute',
        left: 37,
        top: 37
    },
    rightCell: {
        borderColor: 'rgba(255, 255, 255, 0.06)',
        height: 100,
        borderBottomWidth: 1,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    info: {
        width: 175,
        height: 100,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    title: {
        fontSize: 14,
        lineHeight: 21,
        color: 'rgba(255, 255, 255, .8)'
    },
    num: {
        fontSize: 14,
        lineHeight: 21,
        color: 'rgba(245, 49, 114, 1)'
    },
    action: {
        width: 100,
        height: 100,
        paddingLeft: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
