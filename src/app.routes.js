const { Router } = require("express");
const { authRoutes } = require("./modules/auth/auth.routes");

const mainRouter = Router();
mainRouter.use("/auth", authRoutes);

module.exports = {
    mainRouter,
};
