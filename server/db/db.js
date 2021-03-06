'use strict';

const chalk = require('chalk');
const Sequelize = require('sequelize');
const pkg = require('../../package.json');
const dbUrl =
  process.env.DATABASE_URL || `postgres://localhost:5432/${pkg.name}`;

console.log(chalk.yellow('opening database connection'));
console.log(dbUrl);
let db = new Sequelize(dbUrl, {
  dialectOptions: {
    useUTC: false,
  },
  timezone: '-05:00',
  logging: false,
});

module.exports = db;
