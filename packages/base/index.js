module.exports = {
  extends: [
    "./rules/eslint",
    "./rules/import",
    "./rules/jsdoc"
  ].map(require.resolve),
  rules: {}
}
