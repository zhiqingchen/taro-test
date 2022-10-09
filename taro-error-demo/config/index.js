const path = require('path');

const config = {
  projectName: 'taro-error',
  date: '2022-8-16',
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  alias: {
    '@': path.resolve(__dirname, '..', 'src/')
  },
  compiler: 'webpack4',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      },
      "postcss-px-scale": {
        "enable": true,
         "config": {
            "scale": 0.5, // 缩放为 1/2
            "units": "rpx",
            "includes": ["taro-ui"]
        }
    }
    },
    miniCssExtractPluginOption: {
      ignoreOrder: true
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: ['taro-ui'],
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      },
      "postcss-px-scale": {
        "enable": true,
        "config": {
            "scale": 0.5, // 缩放为 1/2
            "units": "rem",
            "includes": ["taro-ui"]
        }
      }
    },
    webpackChain(chain) {
      chain.optimization.sideEffects(false)
    }
  },
  rn: {
    appName: 'taroDemo',
    output: {
      iosSourceMapUrl: '', // sourcemap 文件url
      iosSourcemapOutput: '../taro-native-shell/ios/main.map', // sourcemap 文件输出路径
      iosSourcemapSourcesRoot: '', // 将 sourcemap 资源路径转为相对路径时的根目录
      androidSourceMapUrl: '',
      androidSourcemapOutput: '../taro-native-shell/android/app/src/main/assets/index.android.map',
      androidSourcemapSourcesRoot: '',
      ios: '../taro-native-shell/ios/main.jsbundle',
      iosAssetsDest: '../taro-native-shell/ios',
      android: '../taro-native-shell/android/app/src/main/assets/index.android.bundle',
      androidAssetsDest: '../taro-native-shell/android/app/src/main/res'
    },
    postcss: {
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
      }
    },
    resolve: {
      include: ['taro-ui'], // 处理引用 node_modules/taro-ui 的依赖。
      enableSvgTransform: true, // 处理图标
    },
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
