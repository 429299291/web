const CompressionPlugin = require("compression-webpack-plugin")
module.exports = {
    dev:{
        open:true,
        port:8083,
        proxy:{
            '/api':{
                target:'',
                ws:true,
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    },
configureWebpack:config=>{
        if(progress.env.NODE_ENV === 'production'){
            return{
                plugins: [
                
                    new CompressionPlugin({
                        test:/\.js$|\.html$|.\css/, //匹配文件名
                        threshold: 10240,//对超过10k的数据压缩
                        deleteOriginalAssets: false //不删除源文件
                    })
                ]
            }
        }

    },
}