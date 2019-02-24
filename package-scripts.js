module.exports = {
	scripts: {
		default: "",
		build: {
			default: ""
		},
		test: {
			default: "jest --no-watchman --coverage",
			watch: "jest --no-watchman --watchAll --coverage"
		},
		format: {
			default: "prettier src/**/*.js"
		}
	}
}