import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import importPlugin from 'eslint-plugin-import'
import tailwindcss from 'eslint-plugin-tailwindcss'
import prettierConfig from 'eslint-config-prettier'

export default tseslint.config(
  {
    ignores: [
      "dist/",
      "build/",
      "node_modules/",
      ".eslintrc.cjs",
      "npm-debug.log",
      "yarn-debug.log",
      "yarn-error.log",
      "public/",
      "coverage/",
      ".vscode/",
      ".idea/",
      ".DS_Store",
      "package-lock.json",
    ],
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        React: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    settings: {
      react: {
        version: '18.2',
        runtime: 'automatic'
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.css']
        }
      },
      tailwindcss: {
        config: './tailwind.config.js',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'prettier': prettier,
      'react': react,
      'jsx-a11y': jsxA11y,
      'import': importPlugin,
      'tailwindcss': tailwindcss
    },
    extends: [
      js.configs.recommended,        // ESLint 기본 추천 규칙
      prettierConfig,                // Prettier와 충돌을 방지하는 설정
      ...tseslint.configs.recommended // TypeScript ESLint 기본 규칙
    ],
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': 'error',  // Prettier 규칙을 ESLint 규칙으로 적용
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', {
        'varsIgnorePattern': '^_',
        'argsIgnorePattern': '^_',
        'ignoreRestSiblings': true
      }],
      'eqeqeq': ['error', 'always'],
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'off'
    }
  }
)
