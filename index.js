/* 
 * eslint rule levels:
 * 'off' | 'warn' | 'error'
 */

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
    rules: {
        "quotes": "single",
        "no-console": "warn",
        "no-unused-vars": "warn",
        "no-shadow": "warn",
        "radix": "warn",
        "curly": "warn",
        "require-await": "off",
    },
  };