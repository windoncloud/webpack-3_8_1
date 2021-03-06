const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin')
// page 180
module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            // use: ['style-loader', 'css-loader?minimize']
            loaders: ExtractTextPlugin.extract({
                use: 'css-loader'
            })
            // use: ['style-loader', 'css-loader']
            // use: [
            //     loader: 'style-loader',
            //     options:{
            //         minimize: true
            //     }
            // ]
        }]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: `[name]_[contenthash:8].css`
        })
    ]
}
