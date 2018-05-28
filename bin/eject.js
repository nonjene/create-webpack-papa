const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');
const { cyan, yellow, green } = require('chalk');
const shell = require('shelljs');
const inquirer = require('inquirer');

const { log, colorify } = require('./logger');

const defFolder = 'papaScript';
const ownBinFolderName = 'bin';

function confirm(cb) {
  inquirer
    .prompt({
      type: 'confirm',
      name: 'shouldEject',
      message:
        '确定要删除此项目的工具，把构建代码转到项目上吗？整个操作将无法逆转。',
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

function copyBinFiles(appPath, ownPath, binFolderName) {
  // bin 文件夹

  const appBinDir = path.join(appPath, binFolderName);
  const ownBinDir = path.join(ownPath, ownBinFolderName);

  shell.mkdir(appBinDir);
  shell.cp('-R', path.join(ownBinDir, './*'), appBinDir);
}

function runEject() {
  const appPath = process.cwd();
  const ownPath = path.join(appPath, 'node_modules/ok-papa-script');

  log(cyan(`复制文件到 ${appPath}...`));
  const binFolderName = getBinFolderName(appPath);
  // 复制bin文件夹
  copyBinFiles(appPath, ownPath, binFolderName);

  log(`  添加 ${cyan('bin')} 到项目 ${cyan(binFolderName)} 文件夹`);
  log();

  // node_modules 文件夹
  const appNmDir = path.join(appPath, 'node_modules');
  const ownNmDir = path.join(ownPath, 'node_modules');

  // package.json
  const appPackage = require(path.join(appPath, 'package.json'));
  const ownPackage = require(path.join(ownPath, 'package.json'));
  const ownPackageName = ownPackage.name;

  log(cyan('更新依赖模块'));
  // 用户自己安装到dependencies的情况
  if (appPackage.dependencies) {
    if (appPackage.dependencies[ownPackageName]) {
      log(`  删除 dependencies 的 ${cyan(ownPackageName)}`);
      delete appPackage.dependencies[ownPackageName];
    }
  }

  appPackage.devDependencies = appPackage.devDependencies || {};
  if (appPackage.devDependencies[ownPackageName]) {
    log(`  删除 devDependencies 的 ${cyan(ownPackageName)}`);
    delete appPackage.devDependencies[ownPackageName];
  }

  // 复制own dependencies 模块依赖到用户的 devDependencies
  Object.keys(ownPackage.dependencies).forEach(key => {
    log(`  添加 ${cyan(key)} 到 devDependencies`);
    // 假如有相同的依赖包而且版本不一样
    if (
      appPackage.devDependencies[key] &&
      appPackage.devDependencies[key] !== ownPackage.dependencies[key]
    ) {
      log(
        `  ${yellow(key)}: ${
          yellow(appPackage.devDependencies[key])
        } 已存在, 将替换版本为${yellow(ownPackage.dependencies[key])}`
      );
    }
    appPackage.devDependencies[key] = ownPackage.dependencies[key];
  });
  // Sort the deps
  appPackage.devDependencies = Object.keys(appPackage.devDependencies)
    .sort()
    .reduce((o, key) => {
      o[key] = appPackage.devDependencies[key];
      return o;
    }, {});

  log();
  log(cyan('更新 scripts 命令'));

  delete appPackage.scripts['eject'];
  Object.keys(appPackage.scripts).forEach(key => {
    Object.keys(ownPackage.bin)
      .filter(binKey => !!~appPackage.scripts[key].indexOf(binKey))
      .forEach(binKey => {
        appPackage.scripts[key] = appPackage.scripts[key].replace(
          new RegExp(binKey + '( \\S+)?', 'g'),
          `node ${ownPackage.bin[binKey].replace(
            `${ownBinFolderName}/`,
            `${binFolderName}/`
          )}$1`
        );

        log(
          `  替换 ${cyan(key)} 的 ${cyan(`"${binKey}${RegExp.$1}"`)} 为 "${cyan(
            appPackage.scripts[key]
          )}"`
        );
      });
  });

  fs.writeFileSync(
    path.join(appPath, 'package.json'),
    JSON.stringify(appPackage, null, 2) + os.EOL
  );
  log();

  // 删除bin和ok-papa-script
  try {
    Object.keys(ownPackage.bin).forEach(binKey => {
      fs.removeSync(path.join(appPath, 'node_modules', '.bin', binKey));
    });
    fs.removeSync(ownPath);
  } catch (e) {}

  //
  log(cyan('运行 npm install...'));
  spawnSync('npm', ['install', '--loglevel', 'error'], {
    stdio: 'inherit'
  });
  log(green('eject 完成!'));
}

//runEject();

module.exports = function() {
  confirm(runEject);
};
