module.exports = {
  scripts: {
    default: "npx rimraf .next && next build && next start",
    build: {
      default: "npx rimraf .next && next build"
    },
    dev: {
      default: "next"
    },
    test: {
      default: "jest --no-watchman --coverage",
      watch: "jest --no-watchman --watchAll --coverage"
    },
    format: {
      default: "prettier src/**/*.js"
    }
  }
};
