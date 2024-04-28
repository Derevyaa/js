// eslint.config.js
module.exports = {
    languageOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        globals: {
            window: 'readonly',
            document: 'readonly',
            alert: 'readonly',
            console: 'readonly',
            setTimeout: 'readonly',
            clearTimeout: 'readonly',
            setInterval: 'readonly',
            clearInterval: 'readonly',
            prompt: 'readonly',
            XPathResult: 'readonly',
            Event: 'readonly',
            confirm: 'readonly',
            module: 'writable',
            require: 'readonly'
        }
    },
    rules: {
        'no-unused-vars': 'warn',
        'no-console': 'off',
        'semi': ['error', 'always'],
        'eqeqeq': 'warn',
        'no-extra-semi': 'error',
        'no-undef': 'error'
    },
    ignores: ['node_modules/**'],
};
