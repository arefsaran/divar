const { Router } = require("express");
const { AuthRoutes } = require("./modules/auth/auth.routes");
const { UserRoutes } = require("./modules/user/user.routes");
const { CategoryRoutes } = require("./modules/category/category.routes");

const mainRouter = Router();
mainRouter.use("/auth", AuthRoutes);
mainRouter.use("/user", UserRoutes);
mainRouter.use("/category", CategoryRoutes);

module.exports = {
    mainRouter,
};
