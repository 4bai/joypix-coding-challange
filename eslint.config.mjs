import nyxb from '@nyxb/eslint-config'
import globals from 'globals'

export default nyxb(
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        process: 'readonly',
      },
    },
    formatters: true,
    react: true,
    tailwindcss: {
      settings: {
        callees: ['classnames', 'ny', 'cn'],
        config: './apps/web/tailwind.config.ts',
      },
    },
  },
  {
    rules: {},
  },
  {
    ignores: ['**/dist/**', '**/node_modules/**', 'packages/cli/test/**'],
  },
)
