#!/usr/bin/env node
const program = require('commander');


const create = require('./create');
const eject = require('./eject');

program
  .option('create <name>', 'create a project')
  .option('eject', 'eject this project')
  .parse(process.argv);


// 创建
if (program.create) {
  create(program.create);
}

// eject
if (program.eject) {
  eject();
}
