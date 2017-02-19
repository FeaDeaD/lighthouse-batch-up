#!/usr/bin/env node
'use strict'

const program = require('commander')
const execute = require('./index')

program
  .version(require('./package.json').version)
  .option('-s, --sites <sites>', 'a comma delimited list of site urls to analyze with Lighthouse', (str) => str.split(','), [])
  .option('-p, --params <params>', 'extra paramaters to pass to lighthouse cli for each execution e.g. -p "--perf --quiet"', null, '')
  .option('-o, --out [out]', `the output folder to place reports, defaults to '${execute.OUT}'`)
  .option('-g, --use-global', 'use a global lighthouse install instead of the dependency version')
  .option('-v, --verbose', 'enable verbose logging')
  .parse(process.argv)

execute(program)