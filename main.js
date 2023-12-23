const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const SwaggerConfig = require("./src/config/swagger.config");

async function main() {
    const app = express();
    const port = process.env.PORT;
    require("./src/config/mongoose.config");
    SwaggerConfig(app);
    app.listen(port, () => {
        console.log(`The server runs on http://localhost:${port}`);
    });
}
main();
