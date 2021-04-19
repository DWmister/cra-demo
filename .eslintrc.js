module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'standard-jsx'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  parser: 'babel-eslint',
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    indent: [2, 2],
    'react/display-name': 'off',
    // jsx
    'react/jsx-handler-names': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-curly-spacing': [2, 'always']
  },
  // 共享设置
  settings: {
    react: {
      // detect 自动匹配所安装的react版本
      version: 'detect'
    }
  }
}
