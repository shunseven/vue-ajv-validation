module.exports = {
    entry: __dirname + "/demo/index.js",
    output: {
        path: __dirname + "/demo",
        filename: "demo.js"
    },
    devtool: '#eval-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',//在webpack的module部分的loaders里进行配置即可
            }
        ]
    }
}