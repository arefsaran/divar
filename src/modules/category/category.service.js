const CategoryModel = require("./category.model");
const { CategoryMessage } = require("./category.message");
const createHttpError = require("http-errors");
const { default: slugify } = require("slugify");
const autoBind = require("auto-bind");
const { isValidObjectId, Types } = require("mongoose");

class CategoryService {
    #model;
    constructor() {
        autoBind(this);
        this.#model = CategoryModel;
    }
    async find() {
        return await this.#model
            .find({ parent: { $exist: false } })
            .populate([{ path: "children" }]);
    }
    async create(categoryDTO) {
        if (categoryDTO?.parent && isValidObjectId(categoryDTO.parent)) {
            const existCategory = await this.checkExistById(categoryDTO.parent);
            categoryDTO.parent = existCategory._id;
            categoryDTO.parents = [
                ...new Set(
                    [existCategory._id.toString()]
                        .concat(
                            existCategory.parents.map((id) => id.toString()),
                        )
                        .map((id) => new Types.ObjectId(id)),
                ),
            ];
        }
        if (categoryDTO?.slug) {
            categoryDTO.slug = slugify(categoryDTO.slug);
            await this.alreadyExistBySlug(categoryDTO.slug);
        } else {
            categoryDTO.slug = slugify(categoryDTO.name);
        }
        const category = await this.#model.create(categoryDTO);
        return category;
    }
    async checkExistById(id) {
        const category = await this.#model.findById(id);
        if (!category) {
            throw new createHttpError.NotFound(CategoryMessage.NotFound);
        }
        return category;
    }
    async checkExistBySlug(slug) {
        const category = await this.#model.findOne({ slug });
        if (!category) {
            throw new createHttpError.NotFound(CategoryMessage.NotFound);
        }
        return category;
    }
    async alreadyExistBySlug(slug) {
        const category = await this.#model.findOne({ slug });
        if (category) {
            throw new createHttpError.Conflict(CategoryMessage.AlreadyExist);
        }
        return null;
    }
}
module.exports = new CategoryService();
