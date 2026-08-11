module.exports = {
  extends: "@mate-academy/stylelint-config",
  plugins: [
    "stylelint-scss"
  ],
  rules: {
    // Placeholders are kebab-case; keep null if Mate config still flags long token names.
    'scss/percent-placeholder-pattern': null,
  }
};
