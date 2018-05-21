module.exports = {
  ftp: {
    host: '192.168.1.1',
    port: '',
    user: 'user',
    password: 'ps'
  },
  remoteBasePath: '', //ftp的基目录，用于打印地址时方便排除。m.okpapa.com
  remotePath: '/activity/{$target}',
  localAssetPath: 'build/activity',
  domainName: 'http://m.okpapa.com',
  cdnDomain: 'https://images.okpapa.com',
  proxyPort: 80,
  servePort: 3005,
  staticFileConcatOrder: [], //选定需要合并的文件，必须在 resource/js 里
  staticFileSubPath:'static',
  staticFileName:'common.js',
  seedUrl: 'https://github.com/nonjene/ok-papa-seed.git',
  webpackConfig: {},
  //commonVersion: '',
  // 编译一个单独的页面时，目录里面必须包含其中一个文件夹的定义
  commSingleProjSubPage:['m', 'pc'],
  // 获取所有项目时，排除以下这些文件夹里面的内容
  projRecongizeExclude:[ 'm', 'pc', 'modules', 'module', 'static','components', 'component'],
  //本地开发环境
  developEnvType: {
    deploy: 'test',
    fetch: 'test'
  },
  //正式上线的环境
  productEnvType: {
    deploy: 'pro',
    fetch: 'produce'
  },
  deployEnvType: {
    pre: 'dist/pre',
    pro: 'dist/pro',
    test: 'build/activity'
  },
  //默认的环境对应的接口模式
  deployEnvMapFetch: {
    pre: 'pre',
    pro: 'produce',
    test: 'test'
  },
  releaseEnvDesc: {
    pre: '预发环境😛',
    pro: '生产环境😝',
    test: '开发环境🤔'
  },
  fetchEnvDesc: {
    pre: '预发环境🥑',
    test: '测试环境🥝',
    produce: '生产环境🍓'
  },
  frontendConfCode:`try{
    Object.assign(window.publicConfig, {
      mode:"{$mode}",
      debug:{$debug}
    });
    Object.freeze(window.publicConfig);
  }catch(e){}`,
};
