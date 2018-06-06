#create-webpack-papa

生成基于[webpack-papa-script](https://github.com/nonjene/webpack-papa-script)的项目的cli工具。
[webpack-papa-script](https://github.com/nonjene/webpack-papa-script) 是一个帮助前端开发更轻易的开发到部署的工程化工具。

## 如何使用

**安装**
`npm i create-webpack-papa -g` 

**创建一个命名为 "proj-hive" 的站点项目**
`create-webpack-papa create proj-hive`

**等待依赖文件安装完成后**
`cd proj-hive`

**在里面创建一个命名为 my-proj 小项目**
`npm run create my-proj`

**对my-proj进行本地开发**
`npm run watch my-proj`

浏览器打开 http://localhost:3005/activity/my-proj/m/index.html

其中的细节配置可在目录下的 `papa.config.js` 中编辑。

