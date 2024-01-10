/* 
 * eslint rule levels:
 * 'off' | 'warn' | 'error'
 */

module.exports = {
    root: true,
    plugins: [],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
    ],
    rules: {
        "radix": "warn",
        "curly": "warn",
        "no-shadow": "warn",
        "require-await": "off",
    },
  };