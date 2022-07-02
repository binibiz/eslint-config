module.exports = {
  extends: [
    'eslint-config-binibiz-base',
    './rules/react',
  ].map(require.resolve),
  rules: {}
};
