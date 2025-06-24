import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";
import { globalIgnores } from "eslint/config";

export default [
  pluginJs.configs.recommended,
  globalIgnores([
		"node_modules/", 
		"node_modules/*",
    "dist",
    "dist/*"
	]),
  {
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
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      "prettier/prettier": "error",
    },
  },
  {
    files: ["**/*.js"],
    languageOptions: { globals: globals.browser },
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
  {
    files: ["webpack.config.js"],
    languageOptions: { globals: globals.node },
  },

  prettierConfig,
];