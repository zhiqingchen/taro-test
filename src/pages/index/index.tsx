import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
import './index.scss'

export default class Index extends Component<PropsWithChildren> {

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <AtAvatar />
      </View>
    )
  }
}
