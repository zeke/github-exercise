#!/usr/bin/env node

// const child_process = require('child_process')
//
// var output = child_process.execSync('cd ../../ && git log')

var git    = require('gitty');
var myRepo = git('./');

console.log(output.toString())
