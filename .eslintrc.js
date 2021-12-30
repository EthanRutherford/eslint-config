module.exports = {
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	plugins: ["react"],
	settings: {react: {version: "detect"}},
	rules: {
		"comma-dangle": [2, {
			arrays: "always-multiline",
			objects: "always-multiline",
			imports: "always-multiline",
			exports: "always-multiline",
			functions: "always-multiline",
		}],
		"no-cond-assign": [2, "except-parens"],
		"no-console": 1,
		"no-constant-condition": [2, {checkLoops: false}],
		"no-control-regex": 2,
		"no-debugger": 2,
		"no-dupe-args": 2,
		"no-dupe-keys": 2,
		"no-duplicate-case": 2,
		"no-empty-character-class": 2,
		"no-empty": 2,
		"no-ex-assign": 2,
		"no-extra-boolean-cast": 2,
		"no-extra-parens": [2, "all", {
			conditionalAssign: false,
			nestedBinaryExpressions: false,
			ignoreJSX: "all",
		}],
		"no-extra-semi": 2,
		"no-func-assign": 2,
		"no-inner-declarations": [2, "both"],
		"no-invalid-regexp": 2,
		"no-irregular-whitespace": 2,
		"no-negated-in-lhs": 2,
		"no-obj-calls": 2,
		"no-regex-spaces": 2,
		"no-undef": 2,
		"no-unreachable": 2,
		"use-isnan": 2,
		"valid-typeof": 2,
		"accessor-pairs": [2, {setWithoutGet: true}],
		"consistent-return": 2,
		curly: [2, "multi-line", "consistent"],
		"dot-notation": 2,
		"dot-location": [2, "property"],
		eqeqeq: [2, "smart"],
		"no-alert": 2,
		"no-caller": 2,
		"no-else-return": 2,
		"no-eval": 2,
		"no-extra-bind": 2,
		"no-implied-eval": 2,
		"no-iterator": 2,
		"no-labels": 2,
		"no-lone-blocks": 2,
		"no-multi-spaces": 2,
		"no-native-reassign": 2,
		"no-new-wrappers": 2,
		"no-new": 2,
		"no-octal-escape": 2,
		"no-octal": 2,
		"no-process-env": 2,
		"no-redeclare": 2,
		"no-script-url": 2,
		"no-self-compare": 2,
		"no-sequences": 2,
		"no-unused-expressions": [1, {allowShortCircuit: true, allowTernary: true}],
		"no-useless-call": 2,
		"no-void": 2,
		"no-warning-comments": [1, {terms: ["todo"], location: "start"}],
		"no-with": 2,
		radix: 2,
		"wrap-iife": [2, "inside"],
		yoda: [2, "never", {exceptRange: true}],
		"no-catch-shadow": 2,
		"no-delete-var": 2,
		"no-shadow-restricted-names": 2,
		"no-unused-vars": 1,
		"array-bracket-spacing": [2, "never"],
		"brace-style": [2, "1tbs", {allowSingleLine: true}],
		camelcase: [2, {properties: "always"}],
		"comma-spacing": [2, {after: true}],
		"comma-style": [2, "last"],
		"computed-property-spacing": [2, "never"],
		"eol-last": 2,
		indent: [2, "tab", {SwitchCase: 1}],
		"key-spacing": [2, {afterColon: true}],
		"new-cap": [2, {newIsCap: true, capIsNew: true}],
		"new-parens": 2,
		"no-array-constructor": 2,
		"no-lonely-if": 2,
		"no-mixed-spaces-and-tabs": [2, "smart-tabs"],
		"no-new-object": 2,
		"no-spaced-func": 2,
		"no-trailing-spaces": 2,
		"object-curly-spacing": [2, "never"],
		"operator-assignment": [2, "always"],
		"operator-linebreak": [2, "after"],
		"padded-blocks": [2, "never"],
		"quote-props": [2, "as-needed"],
		quotes: [2, "double", {allowTemplateLiterals: true}],
		"semi-spacing": [2, {after: true}],
		semi: [2, "always"],
		"sort-vars": [2, {ignoreCase: true}],
		"space-before-blocks": [2, "always"],
		"space-before-function-paren": [2, {
			anonymous: "never",
			named: "never",
			asyncArrow: "always",
		}],
		"space-in-parens": [2, "never"],
		"space-infix-ops": 2,
		"keyword-spacing": 2,
		"space-unary-ops": [2, {words: true}],
		"arrow-parens": [2, "always"],
		"arrow-spacing": [2, {before: true, after: true}],
		"constructor-super": 2,
		"generator-star-spacing": [2, {
			before: false,
			after: true,
			anonymous: "neither",
			method: "before",
		}],
		"no-const-assign": 2,
		"no-this-before-super": 2,
		"no-var": 2,
		"prefer-const": [1, {destructuring: "all"}],
		"require-yield": 2,
		"spaced-comment": [2, "always"],
		"react/display-name": 2,
		"react/no-children-prop": 2,
		"react/no-danger-with-children": 2,
		"react/no-deprecated": 2,
		"react/no-direct-mutation-state": 2,
		"react/no-find-dom-node": 2,
		"react/no-is-mounted": 2,
		"react/no-redundant-should-component-update": 2,
		"react/no-render-return-value": 2,
		"react/no-string-refs": 2,
		"react/no-this-in-sfc": 2,
		"react/no-unescaped-entities": [2, {forbid: [">", "}"]}],
		"react/no-unknown-property": 2,
		"react/no-unsafe": 2,
		"react/prefer-es6-class": 2,
		"react/react-in-jsx-scope": 0,
		"react/require-render-return": 2,
		"react/self-closing-comp": 2,
		"react/void-dom-elements-no-children": 2,
		"react/jsx-boolean-value": 2,
		"react/jsx-closing-bracket-location": 2,
		"react/jsx-closing-tag-location": 2,
		"react/jsx-curly-brace-presence": 2,
		"react/jsx-curly-newline": 2,
		"react/jsx-curly-spacing": [2, {when: "never", children: true}],
		"react/jsx-equals-spacing": 2,
		"react/jsx-filename-extension": 2,
		"react/jsx-first-prop-new-line": 2,
		"react/jsx-fragments": 2,
		"react/jsx-indent": [2, "tab", {
			checkAttributes: true,
			indentLogicalExpressions: true,
		}],
		"react/jsx-indent-props": [2, "tab"],
		"react/jsx-key": 2,
		"react/jsx-no-comment-textnodes": 2,
		"react/jsx-no-duplicate-props": 2,
		"react/jsx-no-target-blank": 2,
		"react/jsx-no-undef": 2,
		"react/jsx-no-useless-fragment": 2,
		"react/jsx-pascal-case": 2,
		"react/jsx-props-no-multi-spaces": 2,
		"react/jsx-tag-spacing": [2, {
			closingSlash: "never",
			beforeSelfClosing: "always",
			afterOpening: "never",
			beforeClosing: "never",
		}],
		"react/jsx-uses-react": 0,
		"react/jsx-uses-vars": 2,
		"react/jsx-wrap-multilines": [2, {
			declaration: "parens-new-line",
			assignment: "parens-new-line",
			return: "parens-new-line",
			arrow: "parens-new-line",
			condition: "parens-new-line",
			logical: "parens-new-line",
			prop: "parens-new-line"
		}],
	},
};
