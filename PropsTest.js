/**
 * Created by Administrator on 2017/5/12.
 */
import React, {Component, PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
export default class PropsTest extends Component {
    constructor(props){
        super(props);
    }

    //默认属性:不传递参数使用的默认参数
    static defaultProps = {
        name: '小红',
        age: 16,
    }
    //参数类型规范 导入PropTypes类定义参数类型
    static propTypes = {
        name:PropTypes.string,
        age:PropTypes.number,
        sex:PropTypes.string.isRequired,//isRequired必须传递

    }

    render() {
        return (<View>
            <Text style={{fontSize: 20, backgroundColor: 'yellow'}}>Hello {this.props.name}</Text>
            <Text style={{fontSize: 20, backgroundColor: 'yellow'}}>Hello {this.props.age}</Text>
            <Text style={{fontSize: 20, backgroundColor: 'yellow'}}>Hello {this.props.sex}</Text>
        </View>)
    }
}