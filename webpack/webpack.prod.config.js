//webpack 配置文件
const path = require('path')
const webpack = require('webpack');
//提取 css  插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//生成 manifest 方便定位对应的资源文件
const ManifestPlugin = require('webpack-manifest-plugin');

//压缩 js 代码
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

//构建前清理目录
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

//压缩和优化 css
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

//路径转换
const resolvePath = (pathstr) => path.resolve(__dirname, pathstr);

process.env.BABEL_ENV ='development';//指定 babel 编译环境

module.exports = {
    mode: 'production',
    entry: {
        main: resolvePath('../src/client/app/index.js'),
    },//入口文件
    output: {
        filename: 'js/[name].[chunkhash:8].js',
        path: resolvePath('../dist/static'),
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },{
            test: /\.(sa|sc|c)ss$/,
            use: ['isomorphic-style-loader',
                {
                    loader: "css-loader",
                    options: {
                        importLoaders: 2
                    }
                }, 'postcss-loader', 'sass-loader'
            ]
        },{
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]'//配置图片的输出路径和名称
                }
            }]
        }
        ]
    },

    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        // 清理上一次构建的文件
        new CleanWebpackPlugin(),
        //生成 manifest 方便定位对应的资源文件
        new ManifestPlugin({
            fileName: '../server/asset-manifest.json',
        }),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: '"production"'},//标识生产环境
            '__IS_PROD__': true, //方便在代码中使用
            '__SERVER__': false
        })
    ],
    optimization: {
        minimizer: [
            //压缩 js
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        drop_console: true,
                        drop_debugger: true
                    },
                    warnings: false,
                    ie8: true,
                    output: {
                        comments: false,
                    },
                },
                cache: true,
                sourceMap: false
            }),
            //压缩 css
            new OptimizeCSSAssetsPlugin()
        ],
        splitChunks: {
            cacheGroups: {
                libs: { // 抽离第三方库
                    test: /node_modules/, // 指定node_modules下的包
                    chunks: 'initial',
                    name: 'libs'// 打包后的文件名
                }
            }
        }
    },
}
