const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
require("mongoose-double")(mongoose);
const SchemaTypes = mongoose.Schema.Types;

const schema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    executor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true
    },
    address: { type: String, required: true },
    regularity: { type: String, required: true },
    duration: { type: Number, min: 1, max: 6 },
    date: { type: String, required: true },
    startTime: { type: String, required: true },
    service: { type: String, required: true },
    roomsCount: {
      standart: { type: Number, required: true },
      big: { type: Number, required: true },
      toilet: { type: Number, required: true }
    },
    status: { type: String, required: true, lowercase: true },
    price: { type: SchemaTypes.Double, required: true },
    cleanTime: { type: Number, required: true },
    cancelMessage: { type: String }
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);

schema.post("save", function(error, doc, next) {
  if (error.name === "MongoError" && error.code === 11000) {
    next(new Error("User already exist"));
  } else {
    next(error);
  }
});

schema.set("toObject", {
  transform: function(doc, ret) {
    delete ret.__v;
  }
});

schema.plugin(mongoosePaginate);
module.exports = mongoose.model("Order", schema);
