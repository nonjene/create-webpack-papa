const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const shell = require('shelljs');
const inquirer = require('inquirer');

const { log, colorify } = require('./logger');

const defFolder = 'papaScript';

function confirm(cb) {
  inquirer
    .prompt({
      type: 'confirm',
      name: 'shouldEject',
      message: '确定要删除此项目的工具，把构建代码转到项目上吗？整个操作将无法逆转。',
      default: false
    })
    .then(answers => {
      if (!answers.shouldEject) {
        log(colorify('已取消。'));
        return;
      }
      log('正在处理...');
      cb();
    });
}

function getBinFolderName(cwd) {
  // get unuse folder.

  let folder = defFolder;
  let suffix = 0;
  while (fs.existsSync(path.join(cwd, folder))) {
    folder = defFolder + ++suffix;
  }
  return folder;
}

function copyBinFiles(appPath, ownPath){
  // bin 文件夹
  const appBinDir = path.join(appPath, getBinFolderName(appPath));
  const ownBinDir = path.join(ownPath, 'bin');

  shell.mkdir(appBinDir);
  shell.cp('-R', path.join(ownBinDir, './*'), appBinDir);
}

// 获取依赖文件模块名称
function getDependenciesName(){

}

// 复制模块依赖到用户的package
function copyPackageDependencies() {}

// 复制模块文件
function copyNodeModules() {}



function runEject(){
  const appPath = process.cwd();
    const ownPath = path.join(appPath, 'node_modules/ok-papa-script');

    copyBinFiles(appPath, ownPath);

    // node_modules 文件夹
    const appNmDir = path.join(appPath, 'node_modules');
    const ownNmDir = path.join(ownPath, 'node_modules');
    
    // package.json
    const appPackage = require(path.join(appPath, 'package.json'));
    const ownPackage = require(path.join(ownPath, 'package.json'));
}

runEject();//todo: for debug

module.exports = function() {
  confirm(runEject); 
};
