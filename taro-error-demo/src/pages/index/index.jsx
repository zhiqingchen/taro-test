import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View} from '@tarojs/components'
import { connect } from '@/utils';
import './index.scss'

@connect((state) => ({ systemInfo: state.systemInfo.info }))
export default class Index extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return <View>首页</View>
  }
}
