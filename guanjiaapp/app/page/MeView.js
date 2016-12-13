/**
 * Created by jiahailiang on 2016/11/22.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ListView,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import Selfinfo from './Selfinfo'
import px2dp from '../util/px2db';
var {width,height} = Dimensions.get('window');
export default class MeView extends React.Component {
    constructor (props){
        super(props);

    }
    JumpAction (title) {
        var _this = this;
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name:Selfinfo,
                component:Selfinfo,
                params:{
                    title:title,
                    // Daliy:Daliy,
                    getResult:function (myMessage) {
                        _this.setState({
                            resultMessage:myMessage,
                        })
                    }
                }
            })
        }
    }

    render (){
        const rightButtonConfig = {
            title: '功能',
            handler: () => alert('点击效果'),
        };
        const titleConfig = {
            title: '我'
        };

        return (
            <View style={{backgroundColor:'#F2F2F2',flex:1,flexDirection:'column'}}>
                <View>
                    <NavigationBar
                        title={titleConfig}
                        rightButton={rightButtonConfig}
                        tintColor={'rgb(61,171,236)'}/>
                </View>
                <View style={{flexDirection:'column',alignItems:'flex-start'}}>
                    <TouchableOpacity onPress={this.JumpAction.bind(this,'Selfinfo')} style={{flexDirection:'row'}}>
                        <View style={styles.sampleViewStyle}>
                                <Image source={require('../image/gerenxinxi.png')} style={styles.imageStyle}/>
                                <Text style={styles.textStyle}>个人信息</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.JumpAction.bind(this,'我的星标')} style={{flexDirection:'row'}}>
                        <View style={styles.sampleViewStyle}>
                                <Image source={require('../image/start.png')} style={styles.imageStyle}/>
                                <Text style={styles.textStyle}>我的星标</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.JumpAction.bind(this,'舆情报告')} style={{flexDirection:'row'}}>
                        <View style={styles.mb10}>
                                <Image source={require('../image/zhuanbao.png')} style={styles.imageStyle}/>
                                <Text style={styles.textStyle}>舆情报告</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.JumpAction.bind(this,'公告')} style={{flexDirection:'row'}}>
                        <View style={styles.sampleViewStyle}>
                                <Image source={require('../image/gonggaoa.png')} style={styles.imageStyle}/>
                                <Text style={styles.textStyle}>公告</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.JumpAction.bind(this,'意见反馈')} style={{flexDirection:'row'}}>
                        <View style={styles.mb10}>
                                <Image source={require('../image/wen.png')} style={styles.imageStyle}/>
                                <Text style={styles.textStyle}>意见反馈</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.JumpAction.bind(this,'退出系统')} style={{flexDirection:'row'}}>
                        <View style={styles.sampleViewStyle}>
                                <Image source={require('../image/no.png')} style={styles.imageStyle}/>
                                <Text style={styles.textStyle}>退出系统</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        );


    }
}
const styles = StyleSheet.create({
    sectionStyle:{
        backgroundColor:'gray',
        height:px2dp(25)
    },
    cellStyle:{
        flexDirection:'row',
        borderBottomColor:'#CCCCCC',
        borderBottomWidth:1,
        alignItems:'center'
    },
    imageStyle:{
        width:px2dp(70),
        height:px2dp(70),
        backgroundColor:'red',
        margin:px2dp(20)

    },
    textStyle:{
        marginLeft:1,
        alignSelf:'center',
        fontSize:px2dp(14)
    },
    imageStyle:{
        width:px2dp(20),
        height:px2dp(20),
        margin:px2dp(10),
    },
    sampleViewStyle:{
        flexDirection:'row',
        backgroundColor:'#FFF',
        width:width,
        borderBottomWidth:1,
        borderBottomColor:'#F2F2F2'
    },
    mb10:{
        marginBottom:px2dp(10),
        flexDirection:'row',
        backgroundColor:'#FFF',
        width:width
    }

});