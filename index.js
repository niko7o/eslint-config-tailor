/* 
 * eslint rule levels:
 * 'off' | 'warn' | 'error'
 */

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    plugins: [
        '@typescript-eslint'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
    ],
    rules: {
        "no-shadow": "warn",
        "require-await": "off",
        "@typescript-eslint/require-await": "error",
        "@typescript-eslint/no-unnecessary-condition": "error"
    },
  };