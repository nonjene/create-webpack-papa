
const chalk = require('chalk');

const log = (c=" ") => console.log(c);
const colorify = (c=" ") => chalk.cyan(c);

const createSucc = (name)=>{
  log((`🌈  完成! ${name}已创建.`));
  log(`进入这个目录，你可以运行以下命令：\n`);
  log(colorify('  npm run create') + ' my-app');
  log('    创建一个命名为 "my-app" 的项目\n');
  log(colorify('  npm run watch') + ' my-app');
  log('    开启 "my-app" 的本地开发\n');
  log(colorify('  npm run build') + ' my-app');
  log('    根据 "okpapa.config.js" 的配置编译该项目\n');
  log(colorify('  npm run eject'));
  log('    移除这个工具，并且把构建的依赖文件复制到项目目录中。注意这个操作无法逆转！\n');

  log('建议你输入一下命令开始:\n');
  log(colorify('  cd')+` ${name}`);
  log(colorify('  npm run create') + ' my-app');
  log(colorify('  npm run watch') + ' my-app');
  log('\n')
};
const createFail = name=>{
  log(chalk.yellow(`安装依赖包时出错，请进入${name}运行“${chalk.cyan('npm install')}”`));
}

module.exports = {
  log,
  colorify,
  createSucc,
  createFail
}