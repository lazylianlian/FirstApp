import WelcomeText from "react-native/local-cli/templates/HelloNavigation/views/welcome/WelcomeText.android";
/**
 * Created by Administrator on 2017/5/10.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class LifecycleComponent extends Component{
    constructor(props){
        super(props);
        console.log('---constructor--')
        this.state={
            count:0
        }

    }
    componentWillMount(){
        console.log('---componentWillMount--')
    }
    componentDidMount(){
        console.log('---componentDidMount--')
    }
    componentWillReceiveProps(nextProps){
        console.log('---componentWillReceiveProps--')
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('---shouldComponentUpdate--')
        return true;
    }
    componentWillUpdate(nextProps,nextState){
        console.log('---componentWillUpdate--')
    }
    componentDidUpdate(prevProps,prevtState){
        console.log('---componentDidUpdate--')
    }
    componentWillUnmount(){
        console.log('---componentWillUnmount--')
    }

    render(){
        console.log('---render--')

        return <View>
            <Text
                style={{fontSize:20,color:'red'}}
                onPress={()=>{
                    this.setState({
                        count:this.state.count+1,
                    })
                }}
            >点击触发state值改变进而触发update</Text>
            <Text style={{fontSize:23,backgroundColor:'blue', color:'red'}}>{this.state.count}</Text>
        </View>
    }
}