/**
 * Created by songyi on 16/3/31.
 */
'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { VotingItemArtist, VotingItemSong } from '../../components/compaign/VotingItem';

export default class BaseButton extends Component {

    static THEME = {
        PRIMARY: 'primary',
        DEFAULT: 'default'
    }

    static SIZE = {
        SMALL: 'small',
        DEFAULT: 'default'
    }

    static defaultProps = {
        theme: 'default',
        size: 'default',
        width: 70,
        text: 'Button'
    }

    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        };

        this.buttonStyles = [styles.button];
        this.buttonTextStyles = [];

        this._setStyle();
    }

    _setStyle () {
        var customStyle = {
            width: this.props.width
        };

        if (this.props.theme == BaseButton.THEME.DEFAULT) {
            this.buttonStyles.push(styles.buttonDefault);
            this.buttonTextStyles.push(styles.buttonDefaultText);
        } else if (this.props.theme == BaseButton.THEME.PRIMARY) {
            this.buttonStyles.push(styles.buttonPrimary);
            this.buttonTextStyles.push(styles.buttonPrimaryText);
        } else {
            this.buttonStyles.push(styles.buttonDisable);
            this.buttonTextStyles.push(styles.buttonDisableText);
        }

        if (this.props.size == BaseButton.SIZE.DEFAULT) {
            this.buttonStyles.push(styles.sizeDefault);
        } else {
            this.buttonStyles.push(styles.sizeSmall);
        }

        this.buttonStyles.push(customStyle);
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={[this.buttonStyles]}>
                    <Text style={this.buttonTextStyles}>按钮</Text>
                </View>
            </View>
        )
    }

    componentWillMount(){
    }
}

var styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1
    },
    buttonPrimary: {
        borderColor: '#818FFF',
        backgroundColor: 'rgba(129, 143, 255, .06)'
    },
    buttonPrimaryText: {
        color: '#818FFF'
    },
    buttonPrimaryActive: {
        backgroundColor: 'rgba(129, 143, 255, .2)'
    },
    buttonDefault: {
        borderColor: 'rgba(255, 255, 255, .8)',
        backgroundColor: 'rgba(255, 255, 255, .06)'
    },
    buttonDefaultText: {
        color: 'rgba(255, 255, 255, .8)'
    },
    buttonDefaultActive: {
        backgroundColor: 'rgba(255, 255, 255, .2)',
        color: 'rgba(255, 255, 255, .2)'
    },
    buttonDisable: {
        borderColor: 'rgba(255, 255, 255, .2)'
    },
    buttonDisableText: {
        color: 'rgba(255, 255, 255, .2)'
    },
    sizeDefault: {
        height: 40,
        borderRadius: 20
    },
    sizeSmall: {
        height: 30,
        borderRadius: 15
    }
});
