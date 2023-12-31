const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

function swaggerConfig(app) {
    const swaggerDocument = swaggerJsDoc({
        swaggerDefinition: {
            openapi: "3.1.0",
            info: {
                title: "divar",
                description:
                    "A Fullstack project like https://divar.ir/ is being developed.",
                version: "1.0.0",
            },
        },
        apis: [process.cwd() + "/src/modules/*/*.swagger.js"],
    });

    const swagger = swaggerUi.setup(swaggerDocument, {});
    app.use("/", swaggerUi.serve, swagger);
}

module.exports = swaggerConfig;
