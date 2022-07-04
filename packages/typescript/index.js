module.exports = {
  extends: [
    "@binibiz/eslint-config-base",
    "./rules/eslint",
    "./rules/typescript",
  ].map(require.resolve),
  rules: {},
};
