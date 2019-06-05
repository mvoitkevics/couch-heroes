const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: ['./src/client/views/room/index.ts'],
    output: {
        publicPath: 'static/views/room/',
        path: path.resolve(__dirname, '../dist/client/views/room'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    filename: '[name].bundle.js'
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/client/views/room/index.html'
        }),
        new CopyWebpackPlugin([{ from: 'src/client/css', to: 'css' }]),
        new CopyWebpackPlugin([{ from: 'src/client/views/room/assets', to: 'views/room/assets' }]),
        new webpack.DefinePlugin({
            PHYSICS_DEBUG: JSON.stringify(false)
        })
    ]
}
