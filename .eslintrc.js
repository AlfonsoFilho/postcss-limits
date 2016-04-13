module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-console": [
      "warn"
    ],
    "flowtype/require-parameter-type": 1,
    "flowtype/require-return-type": [
      1,
      "always",
      {
        "annotateUndefined": "never"
      }
    ],
    "flowtype/space-after-type-colon": [
      1,
      "always"
    ],
    "flowtype/space-before-type-colon": [
      1,
      "never"
    ],
    "flowtype/type-id-match": [
      1,
      "^([A-Z][a-z0-9]+)+Type$"
    ]
  },
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true
    }
  },
  "plugins": [
    "flowtype"
  ]
};
