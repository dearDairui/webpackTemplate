const path = require("path")
const HtmlWebapckPlugin = require("html-webpack-plugin")
const MiniCss = require("mini-css-extract-plugin")
const CssMini = require("css-minimizer-webpack-plugin")
//需要压缩代码
const TerserPlugin = require('terser-webpack-plugin')
module.exports = (env) => {
    console.log(env)
    return {
        entry: {
            // index:{
            //     import:path.resolve('./src/index.js'),
            //     dependOn:"shard",
            // },
            // another:{
            //     import:path.resolve('./src/another-module.js'),
            //     dependOn:"shard"
            // },
            // shard:'loadsh'
            index: path.resolve('./src/index.js'),
            another: path.resolve('./src/another-module.js')
        },
        output: {
            filename: 'buildFile/[name].[contenthash].bundle.js',
            path: path.resolve('./dist'),
            clean: true,
            assetModuleFilename: 'images/[contenthash][ext]',
            // 设置公共路径
            // publicPath:'http://localhost:8080' 
        },
        devtool: 'inline-source-map',
        mode: env.production?"production": 'development',
        // mode: 'production',
        devServer: {
            static: './dist',
            open: true
        },
        module: {
            rules: [
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: "asset/resource"
                },
                {
                    test: /\.png$/,
                    type: 'asset/resource',
                    generator: {
                        filename: 'images/[contenthash][ext]'
                    }

                },
                {
                    test: /\.svg$/,
                    type: 'asset/inline'
                },
                {
                    test: /\.txt$/,
                    type: 'asset/source'
                },
                {
                    test: /\.jpg/,
                    type: 'asset',
                    parser: {
                        dataUrlCondition: {
                            maxSize: 4 * 1024 // 4K
                        }
                    }
                },
                // {
                //     test:/\.(css|less)$/,
                //     use:["style-loader",'css-loader','less-loader']
                // },
                {
                    test: /\.(css|less)$/,
                    use: [MiniCss.loader, 'css-loader', 'less-loader']
                },
                //其他文件类型 csv-loader xml-loader
                {
                    test: /\.(csv|tsv)$/i,
                    use: ['csv-loader']
                },
                {
                    test: /\.xml$/i,
                    use: ['xml-loader']
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: [
                                [
                                    "@babel/plugin-transform-runtime"
                                ]
                            ]
                        }
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebapckPlugin({
                template: "./index.html",
                filename: "index.html",
            }),
            new MiniCss({
                filename: 'style/[contenthash].css'
            })
        ],
        optimization: {
            //要配合使用mode:production使用
            minimizer: [
                //css压缩
                new CssMini(),
                //js代码压缩
                new TerserPlugin()
            ],
            // 这是第二种分离公共方法的第二种
            splitChunks: {
                // chunks:"all",
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: "all"
                    }
                }
            }
        }
    }


}