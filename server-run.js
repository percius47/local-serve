#!/usr/bin/env node

require('./server')(require('minimist')(process.argv.slice(2)));
