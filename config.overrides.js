const {
    override,
    addLessLoader, // less配置函数
    fixBabelImports, // 按需加载配置函数
    addBabelPlugins // babel插件配置函数
} = require('customize-cra')

module.exports = override(
    ...addBabelPlugins( // 支持装饰器
        [
            '@babel/plugin-proposal-decorators',
            { legacy: true }
        ]
    ),
    fixBabelImports('import', { // antd 按需加载
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true  //自动打包相关的样式 默认为 style:'css'
    }),
    addLessLoader(
        {
            javascriptEnabled: true,
            modifyVars: { '@primary-color': 'red' }
        }
    ),
)