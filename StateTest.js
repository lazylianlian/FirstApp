/**
 * Created by Administrator on 2017/5/12.
 */
import React, {Component} from 'react';
import {
    AppRegistry, Image,
    StyleSheet,
    Text,
    View
} from 'react-native';
export default class StateTest extends Component {
    //初始化组件State的方式
    //1.
    state={
        size:90,
    }
    constructor(props){
        super(props);
        //2.构造器中
        // this.state={
        //     size:80,
        // }
    }
    render() {
        return <View>
            <Text>Hello{this.state.size}</Text>
            <Text
                style={{fontSize:20}}
                onPress={()=>{
                    this.setState({
                        size:this.state.size+10
                    })

                }}
            >气球变大</Text>
            <Text
                style={{fontSize:20}}
                onPress={()=>{
                    this.setState({
                        size:this.state.size-10
                    })
                }}
            >气球变小</Text>
            <Image
                style={{width:this.state.size,height:this.state.size+50}}
                source={require('./timg.jpg')}
            />

        </View>
    }
}