module.exports = {
    
    output: {
        filename: 'buildFile/[name].bundle.js',
    },
    // cheap-module-source-map
    devtool: 'inline-source-map',
    mode: 'development',
    // mode: 'production',
    devServer: {
        static: './dist',
        open: true
    }
}