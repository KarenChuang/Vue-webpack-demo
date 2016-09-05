var path = require('path')
var Webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ip = require('ip');


module.exports = {
  entry: './src/main.js',

  output: {
    publicPath: 'http://'+ip.address()+':3000/',
    // publicPath: 'http://localhost:3000/',
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },

  devServer: {
    host: ip.address(),
    port:3000,
    historyApiFallback: true,
    hot: true,
    stats: { 
      colors: true  // 用颜色标识
    },
    noInfo: true
  },

  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style!css!autoprefixer' },
      { test: /\.scss$/, loader: 'style!css!sass?sourceMap' },
      { test: /\.(png|jpg|jpeg)$/, loader: 'url-loader?limit=8192' },
      { test: /\.(html|tpl)$/, loader: 'html-loader' },
    ]
  },
  vue: {
    loaders: {
            css: 'style!css!autoprefixer',
        }
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  resolve: {
  	extensions: ['', '.js', '.vue'],
    // 引入依赖的库
  	alias: {
      vue: 'vue/dist/vue.js', // ?? runtime what?
  	  filter: path.join(__dirname, './src/filters'),
  	  components: path.join(__dirname, './src/components')
  	}
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
     template: './index.html',
     inject: 'body',
     minify: {
       minifyJS: true,
       removeComments: true,
       collapseWhitespace: true
     }
   })

  ]
}
