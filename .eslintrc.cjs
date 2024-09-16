/**
 * This is intended to be a basic starting point for linting in your app.
 * It relies on recommended configs out of the box for simplicity, but you can
 * and should modify this configuration to best suit your team's needs.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  ignorePatterns: ["!**/.server", "!**/.client"],
  plugins: [
    'simple-import-sort',
    'unused-imports',
    'security',
  ],
  // Base config
  extends: ["eslint:recommended"],

  overrides: [
    // React
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      plugins: ["react", "jsx-a11y"],
      extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
      ],
      settings: {
        react: {
          version: "detect",
        },
        formComponents: ["Form"],
        linkComponents: [
          { name: "Link", linkAttribute: "to" },
          { name: "NavLink", linkAttribute: "to" },
        ],
        "import/resolver": {
          typescript: {},
        },
      },
      rules: {
        'jsx-a11y/no-autofocus': 'off',
        'react/forbid-prop-types': 'off',
        'react/no-danger': 'off',
        'react/button-has-type': 'off',
        'react/no-unescaped-entities': 'off',
        'react/no-children-prop': 'off',
        'react/state-in-constructor': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-filename-extension': [
          'error',
          { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'react/jsx-props-no-spreading': 'off',
        'react/no-array-index-key': 'off',
        'react/require-default-props': 'off',
        'react/sort-prop-types': 'error',
        'react/prop-types': 'off',
        'react-hooks/exhaustive-deps': 'error',
      },
    },

    // Typescript
    {
      files: ["**/*.{ts,tsx}"],
      plugins: ["@typescript-eslint", "import"],
      parser: "@typescript-eslint/parser",
      settings: {
        "import/internal-regex": "^~/",
        "import/resolver": {
          node: {
            extensions: [".ts", ".tsx"],
          },
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
      ],
    },

    // Node
    {
      files: [".eslintrc.cjs"],
      env: {
        node: true,
      },
    },
  ],
  rules: {
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'no-shadow': 'off',
    'no-plusplus': 'off',
    'spaced-comment': 'off',
    'guard-for-in': 'off',
    'operator-assignment': 'off',
    'prefer-destructuring': 'off',
    'consistent-return': 'off',
    'no-restricted-syntax': 'off',
    'no-continue': 'off',
    'no-bitwise': 'off',
    'no-redeclare': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-alert': 'off',
    'import/no-named-as-default': 'off',
    'prefer-object-spread': 'off',
    'arrow-body-style': 'off',
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],

    // Unused Import
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],

    // Import Sort
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          ['^\\w', '^\\u0000'],
          ['^@?\\w', '^\\u0000'],
          ['^lib', '^hooks', 'utils'],
          ['^app'],
          ['^components', '^container'],
          ['^store'],
          ['^configs'],
          ['^data'],
          ['^/'],
          [
            '^\\./?$',
            '^\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\./\\.\\.(?!/?$)',
          ],
          ['^typings'],
          ['^public'],
          ['^.+\\.s?css$'],
          ['^'],
        ],
      },
    ],

    // Security rules
    'security/detect-non-literal-regexp': 'warn',
    'security/detect-unsafe-regex': 'warn',
    'security/detect-buffer-noassert': 'warn',
    'security/detect-child-process': 'warn',
    'security/detect-disable-mustache-escape': 'warn',
    'security/detect-eval-with-expression': 'warn',
    'security/detect-no-csrf-before-method-override': 'warn',
    'security/detect-possible-timing-attacks': 'warn',
    'security/detect-pseudoRandomBytes': 'warn',
  }
};
