module.exports = {
  extends: [
    '@binibiz/eslint-config-react',
    '@binibiz/eslint-config-typescript',
    './rules/react-typescript',
  ].map(require.resolve),
  rules: {}
};
