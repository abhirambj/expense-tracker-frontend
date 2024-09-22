import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import {
	configs as tsConfigs,
	parser as tsParser,
} from "@typescript-eslint/eslint-plugin";

export default [
	{
		ignores: ["dist"], // Ignore the dist folder
	},
	{
		files: ["**/*.{ts,tsx}"], // Target TypeScript and TSX files
		languageOptions: {
			ecmaVersion: 2020, // Target ES2020 syntax
			globals: globals.browser, // Use browser global variables
			parser: tsParser, // Set the TypeScript parser
		},
		extends: [
			js.configs.recommended, // JavaScript recommended rules
			...tsConfigs.recommended, // TypeScript recommended rules
			"plugin:react-hooks/recommended", // React Hooks recommended rules
		],
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
		},
		rules: {
			...reactHooks.configs.recommended.rules, // React hooks rules
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true }, // Allow constant exports in React components
			],
			"@typescript-eslint/no-unused-vars": ["warn"], // Warn on unused variables
			"@typescript-eslint/explicit-function-return-type": "off", // You can enable if you want to enforce return types
		},
	},
];
