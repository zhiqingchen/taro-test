import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { connect } from '@/utils';
import './index.scss';


@connect((state) => ({ systemInfo: state.systemInfo.info }))
class MyPageIndex extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <View>我的</View>
    );
  }
}

export default MyPageIndex;
