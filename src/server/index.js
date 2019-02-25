const server = require("express")();
const dev = process.env.NODE_ENV !== "production";
const app = require("next")({ dev });

server.use("/_next", express.static(path.join(__dirname, ".next")));
server.get("/", (req, res) => app.render(req, res, "/"));

module.exports = server;
