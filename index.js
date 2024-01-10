/* 
 * eslint rule levels:
 * 'off' | 'warn' | 'error'
 */

import { CUSTOM_ESLINT_RULES } from "./rules"

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
    rules: CUSTOM_ESLINT_RULES
  };