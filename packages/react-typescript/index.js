module.exports = {
  extends: [
    'eslint-config-binibiz-react',
    'eslint-config-binibiz-typescript',
    './rules/react-typescript',
  ].map(require.resolve),
  rules: {}
};
