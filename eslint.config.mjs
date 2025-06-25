// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";
import pluginImport from "eslint-plugin-import";
import { globalIgnores } from "eslint/config";

export default [pluginJs.configs.recommended, globalIgnores([
  "node_modules/",
  "node_modules/*",
  "dist",
  "dist/*"
]), {
  files: ["**/*.ts", "**/*.tsx"],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      project: ["./tsconfig.json"],
    },
    globals: globals.browser,
  },
  plugins: {
    "@typescript-eslint": tseslint.plugin,
    prettier: pluginPrettier,
    import: pluginImport,
  },
  rules: {
    ...tseslint.configs.recommended.rules,
    "prettier/prettier": "error",
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling", "index"]
        ],
        "alphabetize": { "order": "asc", "caseInsensitive": true },
        "newlines-between": "always"
      }
    ],
    "@typescript-eslint/no-explicit-any": "error",
    "eqeqeq": ["error", "always"],
    "keyword-spacing": ["error", { "before": true, "after": true }],
  },
}, {
  files: ["**/*.js"],
  languageOptions: { globals: globals.browser },
  plugins: {
    prettier: pluginPrettier,
    import: pluginImport,
  },
  rules: {
    "prettier/prettier": "error",
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling", "index"]
        ],
        "alphabetize": { "order": "asc", "caseInsensitive": true },
        "newlines-between": "always"
      }
    ],
    "eqeqeq": ["error", "always"],
    "keyword-spacing": ["error", { "before": true, "after": true }],
  },
}, {
  files: ["webpack.config.js"],
  languageOptions: { globals: globals.node },
}, prettierConfig, ...storybook.configs["flat/recommended"]];