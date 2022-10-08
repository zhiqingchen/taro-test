import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { setSystemInfo } from './actions/systmInfo';
import 'taro-ui/dist/style/index.scss';
import '@/static/iconfont/iconfont.scss'
import './app.scss';

const store = createStore(reducers);

class App extends Component {
  componentDidMount() {
    store.dispatch(setSystemInfo());
  }

  onLaunch () {}

  render() {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    );
  }
}

export default App;
