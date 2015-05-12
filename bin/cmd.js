#!/usr/bin/env node

var dir = require('../')
  , args = process.argv.splice(2)

var name = args.shift()
if (!name) {
  console.log('usage: crypto-dir <name>')
  process.exit(1)
}

if (~['-h', '--help', 'help'].indexOf(name)) {
  console.log('usage: crypto-dir <name>')
  process.exit()
}

console.log(dir(name))
