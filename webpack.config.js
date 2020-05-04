const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports ={
    entry: "./src/index.js",
    output:{
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    module:{
        rules:[{
            test:/\.js$/,
            exclude: /node_modules/,
            use:"babel-loader"
        }]
    },
    plugins:[
        new HtmlwebpackPlugin({
            template: path.resolve( __dirname, 'public/index.html' ),
            filename: 'index.html'
        })
    ]
}