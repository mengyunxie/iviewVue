const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: {
        app: ['./src/main.js'],
        vendor: [
            'lodash',
            'axios',
            'vue',
            'vue-router'
        ]
    },
    output: {
        path: path.resolve(__dirname , '../dist'),
        publicPath: '/dist',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            { 
                test: /iview.src.*?js$/,
                loader: 'babel' 
            },
            //转化ES6语法
            {
                test: /\.js$/,
                use: 'babel',
                exclude: /node_modules/
            },
            //解析.vue文件
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            //图片转化，小于8K自动转化为base64的编码
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url',
                options: {
                    limit: 8192
                }
            },
            {
              test: /\.(eot(|\?v=.*)|woff(|\?v=.*)|woff2(|\?v=.*)|ttf(|\?v=.*)|svg(|\?v=.*))$/,
              loader: 'file-loader',
              options: { name: 'fonts/[name].[ext]' },
            }
        ]
    },
    //禁止显示webpack的build.js太大的提示
    performance: {
        hints: false
    },
    plugins: [
        new FriendlyErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ],
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    resolve: {
        // require时省略的扩展名，如：require('app') 不需要app.js
        extensions: ['.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            components: path.join(__dirname, './src/components')
        }
    }
}
