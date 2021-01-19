# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



## 目录结构	

```
├─ public                     # 静态资源
│   ├─ favicon.ico            # 图标
│   └─ index.html             # html模板
├─ src                        # 业务源代码
│   ├─ api                    # 所有请求
│   ├─ assets                 # 静态资源(图片、字体等)
│   ├─ components             # 全局公用组件
│   ├─ layout			            # 页面布局
│   ├─ config                 # 全局配置文件
│   ├─ pages                  # 页面文件
│   ├─ router                 # 路由文件
│   ├─ styles                 # 全局样式
│   ├─ utils                  # 全局公用方法
│   ├─ App.js                 # 页面入口
│   └─ index.js               # 源码入口
├── .eslintignore             # eslint 配置忽略项目
├── .eslintrc.js              # eslint 配置
├── .gitignore                # git 忽略项
├── .env.development          # 开发环境变量配置
├── .env.production           # 生产环境变量配置
├── config-overrides.js       # 对cra的webpack自定义配置
└── package.json              # 依赖项

```

## 相关依赖

| 依赖                                                         | 描述                                          |
| ------------------------------------------------------------ | --------------------------------------------- |
| [react-app-rewired](https://www.npmjs.com/package/react-app-rewired) | 在不`eject`的情况下，修改cra内置的weppack配置 |
| [node-sass](https://www.npmjs.com/package/node-sass)         | sass支持                                      |
| [antd](https://ant.design/index-cn)                          | UI组件库                                      |
| [react-router-dom](https://reactrouter.com/web/guides/quick-start) | 路由                                          |


