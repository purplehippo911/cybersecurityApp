const path = require('path');

module.exports = {
    entry:"./src/index.js",
    output:{
        filename:"popup.js",
        path:path.resolve(__dirname, 'dist'),
    },
    module: {
        rules:[
          {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ],
          },
          
          {
            test: /\.(html)$/,
            exclude: /(node_modules)/,
            use: {
              loader: "html-loader"
            }
        }
        ],
    },
    devServer: {
        port:9000,
        static: {
            directory: path.join(__dirname, 'public'),
        }
    }
}