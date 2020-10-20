const path = require("path");

module.exports = {
    mode: process.env.NODE_ENV || "development",
    entry:"./src/js/index.js",
    output: {
        path:path.resolve("dist"),
        filename:"script.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
}