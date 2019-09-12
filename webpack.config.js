const path = require('path')
const dev = process.env.NODE_ENV === "dev"
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ImageminMozjpeg = require('imagemin-mozjpeg')
const ImageminSvgo = require('imagemin-svgo')
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

let config = {
    stats: {
        children: dev ? false : true //? Hides overfull of verbose in 'dev' mode
    },
    entry: './src/scripts/index.js',
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: dev ? "cheap-module-eval-source-map" : false,
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        open: true,
        stats: 'minimal',
        // host: '10.18.73.94', //? ecv digital
        // port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'fonts',
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.(sc|sa)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../' //? Relative path to style's URLs
                        }
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.ejs$/,
                use: [
                    'ejs-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.ejs',
            minify: dev ? false : {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/page.ejs',
            filename: "page.html",
            minify: dev ? false : {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        })
    ]
}

if (!dev) {
    config.plugins.push(
        // new UglifyJsPlugin({
        //     uglifyOptions: {
        //         output: {
        //             comments: false
        //         }
        //     }
        // }),
        new ImageminWebpackPlugin({
            plugins: [
                ImageminMozjpeg({ quality: 75 }),
                ImageminSvgo()
            ]
        })
    )
}

module.exports = config
