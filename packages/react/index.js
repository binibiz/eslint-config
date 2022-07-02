module.exports = {
  extends: [
    '@binibiz/eslint-config-base',
    './rules/react',
  ].map(require.resolve),
  rules: {}
};
