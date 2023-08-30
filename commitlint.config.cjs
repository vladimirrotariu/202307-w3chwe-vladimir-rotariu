module.exports = {
  extends: ["@commitlint/config-conventional"],
  formatter: "@commitlint/format",
  rules: {
    "header-min-length": [2, "always", 5],
    "header-max-length": [2, "always", 120],
    "header-case": [2, "always", ["sentence-case"]],
    "type-empty": [2, "always"],
    "scope-empty": [2, "always"],
    "subject-empty": [2, "always"],
  },
};
