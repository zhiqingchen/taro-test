import { View} from '@tarojs/components';
import React from 'react';
import './index.scss'
import { connect } from '../../utils';

function Repayment(props) {
  return <View>还款</View>;
}

export default connect((state) => ({ systemInfo: state.systemInfo.info }))(Repayment);
