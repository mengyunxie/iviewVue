const config = require('./build/webpack.dev.config.js');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

config.entry.app.unshift("webpack-dev-server/client?http://localhost:9300/", "webpack/hot/dev-server");

const compiler = webpack(config);

const server = new webpackDevServer(compiler,{
    hot:true,
    noInfo:true,
    filename:config.output.filename,
    publicPath:config.output.publicPath
});

server.listen(9300,'localhost',()=>{
    console.log(`server started at localhost:9300 , please open localhost:9300/src`);
});