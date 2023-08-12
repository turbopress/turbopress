module.exports = {
  root: true,
  extends: ["plugin:@typescript-eslint/recommended", "turbo", "prettier"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
  },
  parserOptions: {},
  plugins: ["@typescript-eslint", "turbo"],
};
