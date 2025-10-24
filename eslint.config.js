import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  // 1. IGNORAR PATRONES 
  {
    ignores: [
      'node_modules/**', 
      'dist/**',        
      'build/',          
      'src/utils/deprecated-file.js',
      'eslint.config.js'
    ] 
  },
  
  // 2. CONFIGURACIÓN PRINCIPAL DE ARCHIVOS JS/JSX
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest', // Usamos 'latest'
      sourceType: 'module',
      globals: globals.browser, // Habilita variables de navegador (ej: window)
      parserOptions: {
        ecmaFeatures: { jsx: true },
      }
    },
    
    // 3. PLUGINS
    plugins: {
      react, // Agregado para las reglas de react/recommended
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    
    // 4. REGLAS UNIFICADAS
    rules: {
      // Reglas extendidas (eslint:recommended y react-hooks:recommended)
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...react.configs.recommended.rules, // Incluye las reglas estándar de React

      // REGLAS PERSONALIZADAS:
      
      // Indentación: 2 espacios
      'indent': [
          'error',
          2  
      ],
      // Saltos de línea estilo Unix (LF)
      'linebreak-style': [
          'error',
          'unix'
      ],
      // Comillas simples
      'quotes': [
          'error',
          'single'
      ],
      // No usar punto y coma
      'semi': [
          'error',
          'never'
      ],
      // Usar igualdad estricta (===)
      'eqeqeq': 'error',
      // No espacios al final de la línea
      'no-trailing-spaces': 'error',
      // Espacios obligatorios dentro de llaves de objeto ({ a: 1 })
      'object-curly-spacing': [
          'error', 'always'
      ],
      // Espacios obligatorios en arrow functions (a => b)
      'arrow-spacing': [
          'error', { 'before': true, 'after': true }
      ],
      // Permitir console.log (0=off)
      'no-console': 0,
      
      // REGLAS ESPECÍFICAS DE REACT
      // No obligar a importar React cuando se usa JSX (para React 17+)
      'react/react-in-jsx-scope': 'off', 
      // Desactivar validación de propTypes (ya que usa TypeScript o validación externa)
      'react/prop-types': 0, 
      // Desactivamos la regla base
      'no-unused-vars': 0, 
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      // Regla reintroducida de no-unused-vars (para ignorar componentes o props sin usar)
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    }
  }
]
