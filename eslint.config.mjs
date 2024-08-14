import unjs from "eslint-config-unjs";

export default unjs({
  ignores: [
    // ignore paths
    "pnpm-lock.yaml",
    "playground",
  ],
  rules: {
    // rule overrides
  },
  markdown: {
    rules: {
      // markdown rule overrides
    },
  },
});
