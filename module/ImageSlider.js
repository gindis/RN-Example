/**
 * Author: 笑翟 <gindis.wx>
 * Description: 图片轮播组件
 * Create by: 05/17/2016
 */

'use strict';

import React, { Component } from 'react';
import {
	Image,
	Text,
	View,
	StyleSheet,
	Animated,
	PanResponder,
	TouchableHighlight,
	TouchableOpacity,
	Dimensions,
	Alert
} from 'react-native';

import logger from '../lib/logger';

const ImageSlider = class ImageSlider extends Component {
	/**
	 * 初始化属性和状态
	 */
    constructor(props) {
        super(props);

        this.state = {
            position: 0,
            height: Dimensions.get('window').width * (4 / 9),
            left: new Animated.Value(0)
        };
    }

		/**
	   * 准备加载组件
	   */

    componentWillMount() {
        let release = (e, gestureState) => {
            let width = Dimensions.get('window').width;
            let relativeDistance = gestureState.dx / width;
            let vx = gestureState.vx;
            let change = 0;

            if (relativeDistance < -0.5 || (relativeDistance < 0 && vx <= 0.5)) {
                change = 1;
            } else if (relativeDistance > 0.5 || (relativeDistance > 0 && vx >= 0.5)) {
                change = -1;
            }
            if (this.state.position === 0 && change === -1) {
                change = 0;
            } else if (this.state.position + change >= this.props.images.length) {
                change = (this.props.images.length) - (this.state.position + change);
            }
            this._move(this.state.position + change);
        };

        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => {
                return true;
            },
            onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderRelease: release,
            onPanResponderTerminate: release,
            onPanResponderMove: (e, gestureState) => {
                let dx = gestureState.dx;
                let width = Dimensions.get('window').width;
                this.state.left.setValue(-(this.state.position * width) + Math.round(dx));
            }
        });
    }

		/**
	   * 渲染绘制视图
	   */
    render() {
        let width = Dimensions.get('window').width;
        let height = this.props.height || this.state.height;
        return (<View>
            <Animated.View
                style={[styles.container, {height: height, width: width * this.props.images.length, transform: [{translateX: this.state.left}]}]}
                {...this._panResponder.panHandlers}>
                    {this.props.images.map((image, index) => {
                        return (
													<TouchableOpacity key={index} onPress={() => {
														this._imgPress(index);
													}}>
													<Image key={index} source={{uri: image}} style={[styles.image, {height: this.state.height}]}/>
													</TouchableOpacity>
												)
                    })}
            </Animated.View>
            <View style={styles.buttons}>
                {this.props.images.map((image, index) => {
                    return (<TouchableHighlight
                        key={index}
                        underlayColor="#ccc"
                        onPress={() => this._move(index)}
                        style={[styles.button, this.state.position === index && styles.buttonSelected]}>
                            <View></View>
                    </TouchableHighlight>);
                })}
            </View>
        </View>);
    }

		/**
	   * 点击指示图标操作
	   */
		_move(index) {
				let width = Dimensions.get('window').width;
				Animated.spring(this.state.left, {toValue: index * -width, friction: 10, tension: 50}).start();
				this.setState({position: index});
		}

		/**
		 * 点击图片操作
		 */
		_imgPress(index) {
			this.props.callbackParent('阿里音乐#' + index, index)
		}
}

/**
 * 定义样式
 */
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#f8f8f8'
    },
    image: {
        width: Dimensions.get('window').width
    },
    buttons: {
        height: 15,
        marginTop: -15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    button: {
        margin: 3,
        width: 8,
        height: 8,
        borderRadius: 8 / 2,
        backgroundColor: '#ccc',
        opacity: 0.9
    },
    buttonSelected: {
        opacity: 1,
        backgroundColor: '#fff',
    }
});

module.exports = ImageSlider;
