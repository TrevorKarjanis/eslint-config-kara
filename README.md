# eslint-config-kara

This package provides an [ESLint](https://eslint.org/) shareable configuration for JavaScript. It extends the [JavaScript Standard Style](https://standardjs.com/) and eslint:recommended to do the following.
- Enforce the use of standards implemented by modern browser environments.
- Enforce a consistent use of curly brackets, line length, and other minor styling characteristics.
- Remove restrictions on variable declarations, conditional assignments, and the use of parenthesis.

## Prerequisites

Packages should declare a dependency on ESLint.
```bash
npm install eslint --save-dev
```

## Installation

```bash
npm install eslint-config-kara --save-dev
```

## Usage

Extend eslint-config-kara in your [ESLint configuration](https://eslint.org/docs/user-guide/configuring#extending-configuration-files).

```json
{
    "extends": "eslint-config-kara"
}
```
Override the environment configuration to support Node.js or older browsers. See .eslintrc.ie.js for an example.

## License

This project is license under the ISC License (ISC). See the LICENSE file.

## Authors

* Trevor Karjanis
