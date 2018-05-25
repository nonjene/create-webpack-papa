
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const shell = require('shelljs');


const defFolder = 'papaScript';

function getFolderName(cwd){
  // get unuse folder.
  
  let folder = defFolder;
  let suffix = 0;
  while (fs.existsSync(path.join(cwd, folder))) {
    folder = defFolder + ++suffix;
  }
  return folder;
  
}

module.exports = function(){
  const cwd = process.cwd();
  const folder = getFolderName(cwd);
  
};