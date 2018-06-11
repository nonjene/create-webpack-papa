# 使用说明

**安装:**

`npm i create-webpack-papa -g` 

**创建一个命名为 "proj-hive" 的站点项目:**

`create-webpack-papa create proj-hive`

**等待依赖文件安装完成后:**

`cd proj-hive`

**在里面创建一个命名为 my-proj 小项目:**

`npm run create my-proj`

**对my-proj进行本地开发:**

`npm run watch my-proj`

然后浏览器打开 http://localhost:3005/activity/my-proj/m/index.html


其中的细节配置可在目录下的 `papa.config.js` 中编辑。


# 其余命令

**编译my-proj:**

`npm run build my-proj`

**部署共用静态资源:**

`npm run deploy-static`

**脱离webpack-papa-script, 修改编译逻辑（无法逆转）:**
`npm run eject`