import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector:
            "JSXElement[openingElement.name.name='button'] JSXElement[openingElement.name.name='p']",
          message: "Do not use <p> inside <button>. Use <span> instead.",
        },
      ],
    },
  },
]);

export default eslintConfig;
