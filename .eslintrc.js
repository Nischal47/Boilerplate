module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'google', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-inline-comments': 'error',
    'no-console': 'error',
    semi: [2, 'always'],
    quotes: [2, 'single', 'avoid-escape'],
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
};
