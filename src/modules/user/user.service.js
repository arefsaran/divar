const autoBind = require("auto-bind");
const UserModel = require("../user/user.model");
const createHttpError = require("http-errors");
const UserMessage = require("./user.messages");
const { randomInt } = require("crypto");
const jwt = require("jsonwebtoken");

class UserService {
    #model;
    constructor() {
        autoBind(this);
        this.#model = UserModel;
    }
}

module.exports = new UserService();
