
================================================================================================
webpack 4、babel、react 构建基本项目
================================================================================================
一、Get started with zero configuration
1.mkdir webpackTest
2.npm init -y
3.npm i webpack --save-dev
4.npm i webpack-cli --save-dev
5.config scripts in package.json
6.mkdir src
7.touch ./src/index.js

二、production and development mode
1.config scripts in package.json
  dev --> webpack --mode development
  build --> webpack --mode production
2.nmp run dev & npm run build

三、translating Javascript ES6 with Babel
1.npm i babel-core babel-loader babel-preset-env --save-dev
2.create .babelrc file
3.create webpack.config.js
  config babel-loader

四、 setting up webpack 4 with React
1.npm i react react-dom --save-dev
2.npm i babel-preset-react --save-dev
3.config .babelrc file
4.create ./src/App.js and write react code

五、the HTML webpack plugin
1.npm i html-webpack-plugin html-loader --save-dev
2.config webpack.config.js
3.create ./src/index.html

六、extracting CSS to a file
1.npm i mini-css-extract-plugin css-loader --save-dev
2.create ./src/main.css
3.config webpack.config.js

七、the webpack dev server
1.npm i webpack-dev-server --save-dev
2.config scripts in package.json file
  dev --> webpack-dev-server --mode development
  build --> webpack --mode -production

八、添加一个日期控件
1.移除App.js，把react代码挪到index.js中
2.npm i antd --save-dev
3.npm i style-loader --save-dev
4.index.js中添加DatePikcer组件
5.index.js中引入DatePicker样式

================================================================================================
使用react-router 4 实现单页面应用路由
================================================================================================
React Router被分成三个包:
react-router 提供核心的路由组件和函数
react-router-dom 提供浏览器运行环境所需要的特定组件
react-router-native 提供native运行环境所需要的特定组件

一、安装React官方路由组件
1.npm i react-router-dom --save-dev


====================================================================================================================
React组件生命周期
====================================================================================================================

一、初始化
  constructor()
      init props
      init state
  componentWillMount()
  render()
  componentDidMount()

二、存在期
  更新state
    shouldComponentUpdate()
    componentWillUpdate()
    render()
    componentDidUpdate()

  更新props
    componentWillReceiveProps()
    shouldComponentUpdate()
    componentWillUpdate()
    render()
    componentDidUpdate()

三、销毁期
  componentWillUnmount()

====================================================================================================================
====================================================================================================================
