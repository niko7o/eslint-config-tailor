/* 
 * eslint rule levels:
 * 'off' | 'warn' | 'error'
 */

module.exports = {
    root: true,
    plugins: [],
    extends: ['eslint:recommended'],
    rules: {
        "radix": "warn",
        "curly": "warn",
        "no-shadow": "warn",
        "require-await": "off",
    },
  };