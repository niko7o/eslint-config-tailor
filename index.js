/* 
 * eslint rule levels:
 * 'off' | 'warn' | 'error'
 */

const TAILOR_ESLINT_RULES = require("./rules");

module.exports = {
    root: true,
    plugins: [],
    extends: ['eslint:recommended'],
    parserOptions: {
        "ecmaVersion": "latest"
    },
    env: {
        "es6": true
    },
    rules: TAILOR_ESLINT_RULES
  };