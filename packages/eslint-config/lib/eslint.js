const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
  rules: {
    // recommended
    'constructor-super': 'error',
    'for-direction': 'error',
    'getter-return': 'error',
    'no-async-promise-executor': 'error',
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-fallthrough': 'error',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-misleading-character-class': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-new-symbol': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-prototype-builtins': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-setter-return': 'error',
    'no-self-assign': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-this-before-super': 'error',
    'no-undef': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-labels': 'error',
    'no-useless-catch': 'error',
    'no-useless-escape': 'error',
    'no-with': 'error',
    'require-yield': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',

    // possible errors
    'no-await-in-loop': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-console': 'warn',
    'no-import-assign': 'error',
    'no-template-curly-in-string': 'error',

    'no-unsafe-optional-chaining': 'error',

    // best practice
    'array-callback-return': ['error', { allowImplicit: true }],
    'block-scoped-var': 'error',
    'class-methods-use-this': 'error',
    'consistent-return': 'off',
    'default-case': 'error',
    'default-param-last': 'error',
    'dot-notation': 'error',
    eqeqeq: ['error', 'always'],
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'no-caller': 'error',
    'no-constructor-return': 'error',
    'no-else-return': ['error', { allowElseIf: false }],
    'no-empty-function': 'warn',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['acc'],
      },
    ],
    'no-proto': 'error',
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.',
      },
    ],
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': [
      'error',
      {
        enforceForJSX: true,
      },
    ],
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    'prefer-regex-literals': 'error',
    radix: 'error',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'outside'],
    'require-await': 'error',
    yoda: 'error',

    // node
    'global-require': 'warn',
    'no-buffer-constructor': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',

    // style
    camelcase: ['warn', { properties: 'never', ignoreDestructuring: false }],

    'func-names': 'warn',
    'lines-between-class-members': 'error',
    'new-cap': ['error', { newIsCap: true, capIsNew: false }],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-lonely-if': 'error',
    'no-multi-assign': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message:
          'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'one-var': ['error', 'never'],
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: ['import', 'cjs-import'],
        next: ['*'],
      },
      {
        blankLine: 'any',
        prev: ['import', 'cjs-import'],
        next: ['import', 'cjs-import'],
      },
    ],
    'prefer-object-spread': 'error',
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['/'], // typescript triple slash
        },
        block: {
          balanced: true,
        },
      },
    ],
    quotes: ['warn', 'single', { avoidEscape: true }],

    /* variable */

    'no-restricted-globals': ['error'].concat(confusingBrowserGlobals),
    'no-shadow': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-unused-vars': ['warn', { vars: 'all', args: 'after-used' }],
    'no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true },
    ],

    // es6
    'no-useless-computed-key': ['error', { enforceForClassMembers: true }],
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': [
      'error',
      'always',
      {
        avoidQuotes: true,
      },
    ],
    'prefer-arrow-callback': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'symbol-description': 'error',
  },
};
