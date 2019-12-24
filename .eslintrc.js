module.exports = {
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'plugin:vue/essential',
        '@vue/typescript',
    ],
    env: {
        browser: true,
        node: true,
    },
    globals: {
        __static: true,
    },
};
