# 工具链
一组 JavaScript 构建工具链通常由这些组成：
1. 一个 package 管理器，比如 Yarn 或 npm。它能让你充分利用庞大的第三方 package 的生态系统，并且轻松地安装或更新它们。
2. 一个打包器，比如 webpack 或 Parcel。它能让你编写模块化代码，并将它们组合在一起成为小的 package，以优化加载时间。
3. 一个编译器，例如 Babel。它能让你编写的新版本 JavaScript 代码，在旧版浏览器中依然能够工作。

### 包管理器
1. npm
2. yarn

### 打包器
#### 模块规范
1. CommomJS
2. AMD
3. UMD
简而言之就是从同步到异步再到统一
[详细参见](https://75team.com/post/%E8%AF%91%E7%A5%9E%E9%A9%AC%E6%98%AFamd-commonjs-umd.html)

#### webpack

1. Neutrino 
    把 webpack 的强大功能和简单预设结合在一起。并且包括了 React 应用和 React 组件的预设。(脚手架库)

2. nwb
    特别适合于将 React 组件发布到 npm。它也能用于创造 React 应用
#### parcel
    是一个快速的、零配置的网页应用打包器，并且可以搭配 React 一起工作   
#### browserify
    require('modules') in the browser
    Use a node-style require() to organize your browser code and load modules installed by npm.
    browserify will recursively analyze all the require() calls in your app in order to build a bundle you can serve up to the browser in a single <script> tag.
### js编译器
#### babel

## SPA 前端开发流程图
![流程图](https://user-images.githubusercontent.com/5670289/59024459-85997c80-8884-11e9-8b6a-532ea61ca3fd.jpg)

## 作用
把源代码转换成发布到线上的可执行 JavaScrip、CSS、HTML 代码

## 职责
代码转换：TypeScript 编译成 JavaScript、SCSS 编译成 CSS 等。
文件优化：压缩 JavaScript、CSS、HTML 代码，压缩合并图片等。
代码分割：提取多个页面的公共代码、提取首屏不需要执行部分的代码让其异步加载。
模块合并：在采用模块化的项目里会有很多个模块和文件，需要构建功能把模块分类合并成一个文件。
自动刷新：监听本地源代码的变化，自动重新构建、刷新浏览器。
代码校验：在代码被提交到仓库前需要校验代码是否符合规范，以及单元测试是否通过。
自动发布：更新完代码后，自动构建出线上发布代码并传输给发布系统。

