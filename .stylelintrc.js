module.exports = {
  extends: "@mate-academy/stylelint-config",
  plugins: [
    "stylelint-scss"
  ],
  rules: {
    "scss/at-mixin-pattern": "^[a-zA-Z0-9_]+$"
  }
};
