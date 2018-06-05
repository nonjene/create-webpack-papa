
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const shell = require('shelljs');
const { spawn, exec } = require('child_process');

const {log} = require('./logger');

const { createSucc, createFail } = require('./logger');

module.exports = function(name){
  const dir = path.join(process.cwd(), name);
  if (fs.existsSync(dir)) {
    return log(chalk.red(`🌚  ${name} 已存在。请重新命名`));
  }
  log(`正在${dir} 创建项目...`);
  
  shell.mkdir('-p', dir);
  shell.cp('-R', path.join(__dirname, '../template/*'), dir);

  log(`准备安装依赖包...`);
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
      createSucc(name);
    } else {
      createFail(name);
    }
  });
}