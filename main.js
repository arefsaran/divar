const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const SwaggerConfig = require("./src/config/swagger.config");
const { mainRouter } = require("./src/app.routes");
const AllExpectionHandler = require("./src/common/exception/all-exception.handler");
const NotFoundHandler = require("./src/common/exception/not-found.handler");
const cookieParser = require("cookie-parser");

async function main() {
    const app = express();
    const port = process.env.PORT;
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser(process.env.COOKIE_SECRET_KEY));
    require("./src/config/mongoose.config");
    app.use(mainRouter);
    SwaggerConfig(app);
    AllExpectionHandler(app);
    NotFoundHandler(app);
    app.listen(port, () => {
        console.log(`The server runs on http://localhost:${port}`);
    });
}
main();
