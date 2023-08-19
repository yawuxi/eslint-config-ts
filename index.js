const base = require("./lib/base.js");
const react = require("./lib/react.js");
const imports = require("./lib/import.js");

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  ignorePatterns: ["node_modules", "dist", "build", "next"],
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react", "react-hooks", "import"],
  extends: ["plugin:react/jsx-runtime"],
  rules: {
    ...base,
    ...react,
    ...imports,
  },
};
