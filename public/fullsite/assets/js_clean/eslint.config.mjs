import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";

export default [
  js.configs.recommended,

  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    plugins: {
      react: reactPlugin,
      "unused-imports": unusedImports,
    },

    rules: {
      // حذف خودکار ایمپورت‌های بلااستفاده
      "unused-imports/no-unused-imports": "error",

      // حذف خودکار متغیرهای بلااستفاده
      "no-unused-vars": [
        "error",
        { vars: "all", args: "after-used", ignoreRestSiblings: false },
      ],

      // ری‌اکت نیازی به import React ندارد
      "react/react-in-jsx-scope": "off",
    },
  },
];
