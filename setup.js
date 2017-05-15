/**
 * Created by Administrator on 2017/5/10.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import HelloComponent from './HelloComponent';
import LifecycleComponent from "./LifecycleComponent";
import PropsTest from "./PropsTest";
import StateTest from "./StateTest";
import RefTest from "./RefTest";
import Student from "./Student"
import MingStudent from "./MingStudent";
export default class setup extends Component {
    constructor(props){
        super(props);
        this.state=({
            remove:false,
            size:20
        })
        this.stu = new Student('啦啦','女',16);
        this.ming = new MingStudent();
    }

    render() {
        // var view = this.state.remove?null:<LifecycleComponent/>;
        // var textView = this.state.remove?"组件移除了,点击显示":"组件装载了，点击移除";
        var params = {name:'小王',age:18,sex:'男'};//一堆参数
        var {name,sex}=params;//解构赋值get参数

        return (
            <View style={styles.container}>
                {/*<HelloComponent*/}
                    {/*name="小明"*/}
                {/*/>*/}
                {/*(1)生命周期组件*/}
                {/*<LifecycleComponent/>*/}
                {/*(2)state状态值改变使组件重新渲染*/}

                {/*<Text*/}
                    {/*style={{fontSize:20}}*/}
                    {/*onPress={()=>{*/}
                        {/*this.setState({*/}
                            {/*remove:!this.state.remove*/}
                        {/*})*/}
                    {/*}}*/}
                {/*>{textView}</Text>*/}
                {/*{view}*/}

                {/*(3)属性传递使用demo*/}

                {/*<PropsTest*/}
                    {/*name="小李"*/}
                    {/*//name={22}//运行出现类型警告*/}
                    {/*sex="女"*/}
                {/*/>*/}
                {/*<PropsTest*/}
                    {/*{...params}//延展操作符,直接给组件批量赋值。*/}
                {/*/>*/}
                {/*<PropsTest*/}
                    {/*name = {name}//解构赋值，此处省略params.name为name*/}
                    {/*sex={sex}*/}
                {/*/>*/}

                {/*(4)state使用demo*/}
                {/*<StateTest/>*/}

                {/*(5)Ref使用demo*/}
                <Text
                    style={{fontSize:20}}
                    onPress={()=>{
                        // var size = this.refs.reftest.getSize();//(1)
                        var size = this.reftest.getSize();//(2)
                        // var size = this.refs['reftest']//this.refs返回的是页面所有ref的数组
                        this.setState({
                            size:size,
                        })
                    }}
                >获取气球大小:{this.state.size}</Text>

                <RefTest
                    //ref,组件的特殊属性
                    // ref="reftest"//(1)
                    ref={reftest=>this.reftest=reftest}//(2)
                />
                <Text>
                    {this.stu.getDescription()}
                </Text>
                <Text>
                    {this.ming.getDescription()}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop:100,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
