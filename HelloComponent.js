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
/**
 * 定义组件
 * 方式一：ES6
 * 导出组件：export default
 */
export default class HelloComponent extends Component{
    render(){//代表需要渲染的界面
        return <Text style={{fontSize:20,backgroundColor:'yellow'}}>Hello {this.name}</Text>
    }
}

/**
 * 方式二：ES5
 * 导出组件：module.exports
 */
// var HelloComponent = React.createClass({
//     render(){
//         return <Text style={{fontSize:20,backgroundColor:'yellow'}}>Hello World!</Text>
//     }
// })
// module.exports = HelloComponent;
/**
 * 方式三：函数式
 * 导出组件：module.exports
 * 无状态，不能使用this
 * 没有完整意义的声明周期方法
 * 传递属性
 */
// function HelloComponent(canshu) {
//     return <Text style={{fontSize:20,backgroundColor:'yellow'}}>Hello World! BY:{canshu.name}!</Text>
// }
// module.exports = HelloComponent;