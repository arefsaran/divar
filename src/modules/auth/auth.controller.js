const authService = require("./auth.service");
const autoBind = require("auto-bind");
const AuthMessage = require("./auth.messages");
const { NodeEnvironment } = require("../../common/constant/env.enum");

class AuthController {
    #service;
    constructor() {
        autoBind(this);
        this.#service = authService;
    }
    async sendOTP(req, res, next) {
        try {
            const { mobile } = req.body;
            await this.#service.sendOTP(mobile);
            return res.json({
                message: AuthMessage.SendOtpSuccessfully,
            });
        } catch (error) {
            next(error);
        }
    }
    async checkOTP(req, res, next) {
        try {
            const { mobile, code } = req.body;
            const token = await this.#service.checkOTP(mobile, code);
            return res
                .cookie("access_token", token, {
                    httpOnly: true,
                    secure:
                        process.env.NODE_ENVIRONMENT ===
                        NodeEnvironment.Production,
                })
                .status(200)
                .json({
                    message: AuthMessage.LoginSuccessfully,
                });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new AuthController();
