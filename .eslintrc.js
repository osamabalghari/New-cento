module.exports = {
    env: {
      browser: true,
      node: true,
      es2020: true,
    },
    extends: ['airbnb-base','prettier'],
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 11,
    },
    'no-console': 0,
    'no-underscore-dangle': 0,
}