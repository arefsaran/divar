const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

async function main() {
    const app = express();
    const port = process.env.PORT;
    require("./src/common/mongoose.config");
    app.listen(port, () => {
        console.log(`The server runs on port ${port}`);
    });
}
main();
