module.exports = {
  ftp: {
    host: "192.168.2.228",
    port: "",
    user: "account",
    password: "password"
  },
  remoteBasePath: "",
  remotePath: "/activity/{$target}",
  localAssetPath: "build/activity",
  domainName: "http://m.okpapa.net",
  cdnDomain: "https://images.okpapa.com",
  proxyPort: 80,
  servePort: 3005,
  staticFileConcatOrder: ["reset.js", "responsive.js", "config.js"],
  commonVersion: "12",
  webpackConfig: {
    resolve: {
      alias: {
        common: "modules/tools/common"
      }
    }
  },
  deployEnvType: {
    pre: "dist/pre",
    pro: "dist/pro",
    test: "build/activity",
  },
  releaseEnvDesc: {
    pre: '预发环境😛',
    pro: '生产环境😝',
    test: '开发环境🤔',
  },
  requestEnvDesc: {
    pre: '预发环境🥑',
    test: '测试环境🥝',
    produce: '生产环境🍓',
  },
}
