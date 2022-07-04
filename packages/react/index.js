module.exports = {
  extends: [
    '@binibiz/eslint-config-base',
    './rules/eslint',
    './rules/react',
  ].map(require.resolve),
  rules: {}
};
