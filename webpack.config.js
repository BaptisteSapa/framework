const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/scripts/index.js',
    output: {
        filename: './scripts/bundle.js',
        path: path.resolve('dist')
    },
    devServer: {
        contentBase: path.resolve('dist'),
        open: true,
        compress: true,
        stats: 'errors-only'
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s(a|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|svg|webp)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images'
                }
            },
            {
                test: /\.(eot|otf|ttf|woff2?)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts'
                }
            },
            {
                test: /\.ejs$/i,
                use: [
                    'ejs-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: './styles/style.css'
        }),
        new HtmlWebpackPlugin({
            title: 'Homepage',
            template: './src/index.ejs',
        })
    ]
}
