const path = require('path')


module.exports = {
    devtool:'source-map',
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'bundler.js'
    },
    module :{
        rules: [
          { 
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use:{
                loader:'babel-loader'
            }
          }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'./index.html'
        })
    ]
};


// -D webpack webpack-cli
// "build":"webpach --mode production"  json
// npm run build
// babel/core babel-core babel present env babel present react