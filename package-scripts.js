module.exports = {
  scripts: {
    default: "next build && next",
    build: {
      default: "next build"
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
