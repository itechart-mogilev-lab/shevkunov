module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018
  },
  parser: "babel-eslint",
  plugins: ["react"],
  rules: {
    indent: ["error", "tab"],
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "double"],
    semi: ["error", "always"]
  }
};
