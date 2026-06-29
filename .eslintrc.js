module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    browser: true,
  },
  rules: {
    'max-len': ['error', { code: 80, ignoreStrings: true }],
  },
};
