module.exports = {
  env: {
    node: true,
    browser: true,
    jest: true,
    es2021: true,
  },
  parser: "@babel/eslint-parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["@babel", "react", "react-hooks"],
  rules: {
    "react/prop-types": "off",
    "react/display-name": "off",
  },
};
