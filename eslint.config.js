import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  {
    ignores: ['dist'], // Ignorar la carpeta "dist"
  },
  {
    files: ['**/*.{js,jsx}'], // Aplica a todos los archivos JS y JSX
    languageOptions: {
      ecmaVersion: 2020, // Versión de ECMAScript a usar
      globals: globals.browser, // Define los globals para el entorno del navegador
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true }, // Habilita JSX
        sourceType: 'module', // Usa módulos ES
      },
    },
    settings: {
      react: {
        version: '18.3', // Especifica la versión de React
      },
    },
    plugins: {
      react, // Plugin para reglas de React
      'react-hooks': reactHooks, // Plugin para reglas de hooks de React
      'react-refresh': reactRefresh, // Plugin para react-refresh
    },
    rules: {
      ...js.configs.recommended.rules, // Reglas recomendadas por ESLint
      ...react.configs.recommended.rules, // Reglas recomendadas por React
      ...react.configs['jsx-runtime'].rules, // Reglas específicas de JSX
      ...reactHooks.configs.recommended.rules, // Reglas recomendadas para hooks de React
      'react/jsx-no-target-blank': 'off', // Desactiva la advertencia sobre "target=_blank"
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }, // Permite exportación de constantes en react-refresh
      ],
    },
  },
]
