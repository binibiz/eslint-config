const path = require("path");

const tsConfig = path.resolve(__dirname, "tsconfig.json");

module.exports = {
  extends: [
    "./packages/typescript",
  ].map(require.resolve),
  parserOptions: {
    project: tsConfig,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: tsConfig,
      },
    },
  },
};
