module.exports = {
  extends: [
    'eslint-config-binibiz-base',
    './rules/eslint',
    './rules/typescript',
  ].map(require.resolve),
  rules: {}
};
