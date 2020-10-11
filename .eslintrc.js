module.exports = {
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  parser: "@babel/eslint-parser",
  extends: ["eslint:recommended", "plugin:react/recommended"],
  plugins: ["@babel", "react"],
  rules: {
    "react/prop-types": "off",
    "react/display-name": "off",
  },
};
