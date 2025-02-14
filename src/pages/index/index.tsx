import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'

import './index.scss'

export default class Index extends Component<PropsWithChildren> {

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    console.log('domain11111:', __TEST__)
    console.log('domain11111:', __TEST__TRUE)
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
