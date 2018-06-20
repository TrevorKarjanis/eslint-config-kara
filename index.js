module.exports = {
  env: {
    browser: true,
    node: false
  },
  extends: [
    'eslint:recommended',
    'standard'
  ],
  parserOptions: {
    // Require explicit support for IE by implicitly supporting modern browsers.
    // ECMAScript 9 support is lacking in Edge and Safari.
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: false
    }
  },
  rules: {
    "array-bracket-spacing": "error",
    "block-scoped-var": "error",
    'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    "capitalized-comments": [
      "error",
      "always",
      { "ignoreConsecutiveComments": true }
    ],
    "computed-property-spacing": "error",
    indent: [
      'error',
      2,
      {
        FunctionDeclaration: { parameters: 2 },
        FunctionExpression: { parameters: 2 },
        ignoreComments: false,
        SwitchCase: 1
      }
    ],
    "max-len": [
      "error",
      {
        "ignoreRegExpLiterals": true,
        "ignoreStrings": true,
        "ignoreUrls": true
      }
    ],
    'no-cond-assign': 'off',
    'no-extra-parens': 'off',
    'operator-linebreak': [
      'error',
      'after',
      {
        'overrides': {}
      }
    ],
    'one-var': 'off',
    semi: ['error', 'always'],
    'semi-style': 'error'
  }
};
