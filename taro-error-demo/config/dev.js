module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  mini: {},
  h5: {
    webpackChain(chain) {
      chain.optimization.sideEffects(false)
    }
  }
}
