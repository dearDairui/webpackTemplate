const path = require("path")
const HtmlWebapckPlugin = require("html-webpack-plugin")
const MiniCss = require("mini-css-extract-plugin")
module.exports = {
   
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
    
        path: path.resolve('./dist'),
        clean: true,
        assetModuleFilename: 'images/[contenthash][ext]',
     
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