const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleSchemaValidationErrors } = require("../helpers");

const userSchema = Schema({
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter",
  },
  token: {
    type: String,
    default: null,
  },
});

const schemas = {
  userSchema,
};

module.exports = {
  schemas,
};
