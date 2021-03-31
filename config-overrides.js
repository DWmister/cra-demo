/**
 * config-overrides.js
 * 覆盖/重写webpack配置
 */

// 写法一，不借助外部插件
// const path = require('path')
// function resolve (dir) {
//   return path.join(__dirname, dir)
// }
// module.exports = {
//   // do stuff with the webpack config...
//   webpack: function override (config, env) {
//     // 添加扩展
//     config.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx']
//     // alias
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       '@': resolve('src')
//     }
//     // 修改sass-loader配置，添加sass全局变量
//     const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf
//     loaders[6].use.push({
//       loader: 'sass-resources-loader',
//       options: {
//         resources: resolve('./src/styles/global.scss')
//       }
//     })
//     return config
//   }
// }

/**
 * 写法二
 * customize-cra
 */
const { override, addWebpackAlias, addLessLoader, fixBabelImports } = require('customize-cra')
const path = require('path')

module.exports = {
  webpack: override(
    // 路径别名
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src')
    }),
    // antd组件样式的按需引入
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true
    }),
    // 修改默认主题色
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#D50202',
          '@link-color': '#1890ff',
          // '@box-shadow-base': '0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12)'
          '@box-shadow-base': '0 2px 6px 1px rgba(0,0,0,.04), 0 2px 6px 0 rgba(0,0,0,.04), 0 1px 8px 0 rgba(0,0,0,.04)'
        }
      }
    }),
    (config) => {
      // 修改、添加loader 配置 :
      // 所有的loaders规则是在config.module.rules(数组)的第二项
      // 即：config.module.rules[2].oneof  (如果不是，具体可以打印 一下是第几项目)
      // 修改 sass 配置，添加sass全局变量， 规则 loader 在第6项(具体可以打印配置)
      const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf
      loaders[6].use.push({
        loader: 'sass-resources-loader',
        options: {
          resources: [path.resolve(__dirname, './src/styles/global.scss'), path.resolve(__dirname, './src/styles/cover_antd.scss')]
        }
      })
      return config
    }
  )
}
