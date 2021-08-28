const { Router } = require("express");
const swaggerUi = require("swagger-ui-express");

const swaggerDocs = require("./swagger.json");

const CandidateController = require("./app/Controllers/CandidateController");

const routes = new Router();

routes.post("/register", CandidateController.register);

routes.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = routes;