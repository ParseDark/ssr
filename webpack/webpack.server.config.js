const path = require('path')
const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack');
const resolvePath = (pathstr) => path.resolve(__dirname, pathstr);

process.env.BABEL_ENV = 'node';//设置 babel 的运行环境

const isProd=process.env.NODE_ENV==='production';

module.exports = {
    target: 'node',
    entry: resolvePath('../src/server/app/index.js'),//入口文件
    output: {
        filename: 'app.js',
        path: resolvePath('../dist/server')
    },
    resolve: {
        alias: {
            //定义 dist 目录别名，方便导入模块
            '@dist': path.resolve(__dirname,'../dist')
        }
    },
    externals: [nodeExternals()],
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: `"${process.env.NODE_ENV}"`},
            '__IS_PROD__':isProd,
            '__SERVER__': true
        })
    ]
}
