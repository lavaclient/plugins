module.exports = {
    "env": { "es6": true, "node": true },
    "extends": [ "marine/prettier/node" ],
    "parser": "@typescript-eslint/parser",
    "root": true,
    "parserOptions": { "project": "tsconfig.eslint.json", "ecmaVersion": 2022, "sourceType": "module" },
    "ignorePatterns": [ "**/dist/*" ],
    "rules": {
        "indent": [ "error", 4, { "SwitchCase": 1 } ],
        "linebreak-style": [ "error", "unix" ],
        "quotes": [ "error", "double" ],
        "semi": [ "error", "always" ],
        "one-var": 0,
        "import/order": 0,
        "no-eq-null": 0,
        "complexity": "warn",
        "accessor-pairs": "warn",
        "camelcase": "warn",
        "max-len": [ "error", 200, 2 ],
        "yoda": 2,
        "eol-last": 2,
        "@typescript-eslint/prefer-nullish-coalescing": 2,
        "@typescript-eslint/unified-signatures": "off",
        "@typescript-eslint/restrict-plus-operands": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-invalid-void-type": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-redeclare": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/no-unnecessary-type-assertion": "off",
        "@typescript-eslint/no-unnecessary-condition": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/explicit-member-accessibility": "off"
    }
}
