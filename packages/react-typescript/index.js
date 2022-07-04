module.exports = {
  extends: [
    '@binibiz/eslint-config-typescript',
    '@binibiz/eslint-config-react',
    './rules/react-typescript',
  ].map(require.resolve),
  rules: {}
};
