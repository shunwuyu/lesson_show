module.exports = function(env, argv) {
  console.log(argv.mode)
  return argv.mode == 'production'?
  require('./configs/webpack.production'):
  require('./configs/webpack.development')
}