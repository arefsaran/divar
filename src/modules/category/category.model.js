const { Schema, model } = require("mongoose");

const CategorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
            index: true,
        },
        icon: {
            type: String,
            required: true,
        },
        parent: {
            type: Schema.Types.ObjectId,
            ref: "Category",
            required: false,
        },
        parents: {
            type: [
                {
                    type: Schema.Types.ObjectId,
                    ref: "Category",
                    required: false,
                },
            ],
            required: false,
            default: [],
        },
    },
    {
        timestamps: true,
        versionKey: false,
        id: false,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    },
);

CategorySchema.virtual("children", {
    ref: "Category",
    localField: "_id",
    foreignField: "parent",
});

const Category = model("Category", CategorySchema, "categories");

module.exports = Category;
