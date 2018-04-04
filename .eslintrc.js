module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  plugins: ['prettier', 'ember'],
  extends: ['eslint:recommended', 'plugin:ember/recommended', 'prettier'],
  env: {
    browser: true,
  },
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'prettier/prettier': ['error', { trailingComma: 'es5', singleQuote: true }],
    'generator-star-spacing': ['error', { before: false, after: false }],
    'arrow-parens': [2, 'as-needed'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'max-statements-per-line': ['error', { max: 2 }],
    'new-cap': 0,
    camelcase: 'off',
    'ember/named-functions-in-promises': 0,
    'ember/no-on-calls-in-components': 0,
    'ember/use-ember-get-and-set': 'error',
    'ember/alias-model-in-controller': 0,
    'no-useless-escape': 2,
    'ember/no-old-shims': 2,
    'ember/closure-actions': 1,
    'ember-suave/require-access-in-comments': 0,
  },
  overrides: [
    // node files
    {
      files: [
        'testem.js',
        'ember-cli-build.js',
        'config/**/*.js',
        'lib/*/index.js',
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015,
      },
      env: {
        browser: false,
        node: true,
      },
    },
  ],
};
