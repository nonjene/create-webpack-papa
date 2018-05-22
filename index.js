#!/usr/bin/env node
const program = require('commander');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const shell = require('shelljs');
const { spawn, exec } = require('child_process');

const log = c => console.log(c);
const colorify = (c) => chalk.cyan(c);
const logCreateSucc = (name)=>{
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

program.option('create <name>', 'create a project').parse(process.argv);

const defCwd = process.cwd();

if (program.create) {
  const dir = path.join(process.cwd(), program.create);
  if (fs.existsSync(dir)) {
    return log(chalk.red(`🌚  ${program.create} 已存在。请重新命名`));
  }
  log(`正在创建${dir} 创建项目...`)
  shell.mkdir(program.create);
  shell.cp('-R', './seed/*', dir);

  log(`准备安装依赖包...`)
  const install = spawn(
    process.platform === 'win32' ? 'npm.cmd' : 'npm',
    ['install'],
    {
      cwd: dir,
      env: process.env,
      stdio: 'inherit' 
    }
  );

  install.on('close', code => {
    if (code === 0) {
      logCreateSucc(program.create);
    } else {
      log(chalk.yellow(`安装依赖包时出错，请进入${program.create}运行“${chalk.cyan('npm install')}”`));
    }
  });
}
//todo: eject

